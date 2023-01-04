import type { Post } from '../interfaces'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items: Post = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields: string[] = []) {
    const slugs = getPostSlugs()
    const allPosts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort allPosts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    return allPosts
}

export function getAllPostsByYear(fields: string[] = []) {
    const slugs = getPostSlugs()
    const allPostsByYearMap = {}

    const allPosts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        // sort allPosts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    // populate posts map according to year
    allPosts.map((post) => {
        const yearOfCurrentPost = new Date(post.date).getFullYear()
        if (allPostsByYearMap[yearOfCurrentPost]) {
            allPostsByYearMap[yearOfCurrentPost].push(post)
        } else {
            allPostsByYearMap[yearOfCurrentPost] = [post]
        }
    })
    return allPostsByYearMap
}

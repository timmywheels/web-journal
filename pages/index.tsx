import Container from '../components/Container'
import React from 'react'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { getAllPostsByYear } from '../lib/getPost'
import Post from '../components/Post'

const HomePage = ({
                      allPosts,
                  }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const postPublishedYears = Object.keys(allPosts).sort((a, b) =>
        new Date(a).toDateString() > new Date(b).toDateString() ? -1 : 1,
    )

    return (
        <Container>
            <div className={'grow h-full'}>
                {postPublishedYears.map((year) => {
                    const allPostsForYear = allPosts[year]
                    return (
                        <div>
                            <div className='my-4'>
                                <div className={'highlight-container'}>
                                    <h1
                                        className={
                                            'highlight text-2xl font-extrabold font-monospace'
                                        }
                                    >
                                        {year}
                                    </h1>
                                </div>
                            </div>
                            <div className={'py-4'}>
                                {allPostsForYear.length ? (
                                    allPostsForYear.map((post, key) => {
                                        return (
                                            <Link
                                                key={key}
                                                as={`/${post.slug}`}
                                                href='/[slug]'
                                                className=''
                                            >
                                                <Post post={post} />
                                            </Link>
                                        )
                                    })
                                ) : (
                                    <p className={'font-medium flex items-center font-monospace'}><span
                                        className={'text-3xl mr-2'}>😬</span>Nothing here yet...</p>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

interface IAllPosts {
    props: { allPosts: { [year: string]: Post[] } }
}

export async function getStaticProps(): Promise<IAllPosts> {
    const allPosts = getAllPostsByYear(['slug', 'title', 'excerpt', 'date'])
    return {
        props: { allPosts },
    }
}

export default HomePage

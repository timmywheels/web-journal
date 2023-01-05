import type { InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../components/Container'
import distanceToNow from '../lib/dateRelative'
import { getAllPosts, getPostBySlug } from '../lib/getPost'
import markdownToHtml from '../lib/markdownToHtml'
import Head from 'next/head'
import React from 'react'
import SubscribeCTA from '../components/SubscribeCTA'

const PostPage = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()

    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }

    return (
        <Container>
            <Head>
                <title>{post.title} | TimWheeler.com</title>
            </Head>

            {router.isFallback ? (
                <div>🤔</div>
            ) : (
                <div>
                    <article>
                        <header>
                            <div className={'mt-4'}>
                                <div className={'highlight-container'}>
                                    <h1
                                        className={
                                            'highlight text-4xl font-extrabold font-monospace'
                                        }
                                    >
                                        {post.title}
                                    </h1>
                                </div>
                            </div>
                            {post.excerpt ? (
                                <p className="mt-2 text-xl font-medium text-gray-600">{post.excerpt}</p>
                            ) : null}
                            <time className="flex mt-2 text-gray-400">
                                {distanceToNow(new Date(post.date))}
                            </time>
                        </header>

                        <div
                            className="prose mt-10"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>
                    <SubscribeCTA/>
                </div>
            )}
        </Container>
    )
}

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'slug',
        'title',
        'excerpt',
        'date',
        'content',
    ])
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'])

    return {
        paths: posts.map(({ slug }) => {
            return {
                params: {
                    slug,
                },
            }
        }),
        fallback: false,
    }
}

export default PostPage

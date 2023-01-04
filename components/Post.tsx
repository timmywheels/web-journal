import { Post } from '../interfaces'
import React from 'react'

const Post = ({ post }: { post: Post }) => {
    const formattedPostDate = new Date(post.date).toISOString().split('T')[0]
    return (
        <div className='py-2 mb-2'>
            <div
                className={
                    'grid grid-cols-4'
                }
            >
                <div className='group-hover:cursor-pointer col-span-4 sm:col-span-1'>
                    <span
                        className={
                            'font-monospace text-md font-bold text-gray-700'
                        }
                    >
                        {formattedPostDate}
                    </span>
                </div>
                <div
                    className='handwritten-underline-container col-span-4 sm:col-span-3 border-b-4 border-transparent group-hover:cursor-pointer group-hover:border-b-4 group-hover:border-yellow-200 ease-in-out duration-300'>
                    <article
                        key={post.slug}
                        className='mb-2'
                    >
                        <h3
                            className={
                                'text-lg leading-6 font-bold font-monospace tracking-tighter'
                            }
                        >
                            {post.title}
                        </h3>
                        <p>
                            {post.excerpt}
                        </p>
                    </article>

                    <svg
                        id='stroke'
                        xmlns='http://www.w3.org/2000/svg'
                        width='0'
                        height='0'
                    >
                        <defs>
                            <path
                                id='line'
                                d='M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6'
                                fill='none'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                vectorEffect='non-scaling-stroke'
                            />
                        </defs>
                    </svg>
                    <svg
                        className='handwritten-underline-stroke'
                        viewBox='0 0 154 13'
                    >
                        <use href='#line'></use>
                    </svg>
                    <svg
                        className='handwritten-underline-stroke'
                        viewBox='0 0 154 13'
                    >
                        <use href='#line'></use>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Post

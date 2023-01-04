import Link from 'next/link'
import Container from './Container'
import React from 'react'
import classNames from 'classnames'

const Header = () => {
    return (
        <header className='py-6 mb-6 font-monospace text-sm font-bold'>
            <Container>
                <Link href='/'>
                    <div
                        style={{
                            transform: 'rotate(-1.25deg)',
                        }}
                        className={
                            classNames(
                                'shadow-xl',
                                'border-b-2 border-b-gray-600',
                                'border-r-2 border-r-gray-400',
                                // 'lifted-corners',
                                'shadow-xl',
                                'bg-gray-800  w-fit py-2 px-4',
                            )}
                    >
                        <h1
                            style={{
                                textShadow:
                                    'rgb(0 0 0) 1px 1px 1px, rgb(97 97 97) -1px -1px 5px, rgb(97 97 97) 1px 1px 5px, rgb(91 97 97) 1px 1px 5px, rgb(97 97 97) -1px -1px 5px',
                            }}
                            className={
                                'text-2xl font-medium font-monospace text-white'
                            }
                        >
                            tim wheeler's journal
                        </h1>
                    </div>
                </Link>
                {/*<nav className="flex space-x-4">*/}
                {/*  <Link href="/">About</Link>*/}
                {/*  <Link href="/posts">Posts</Link>*/}
                {/*  <Link href="/projects">Projects</Link>*/}
                {/*  <Link href="/consulting">Consulting</Link>*/}
                {/*</nav>*/}
            </Container>
        </header>
    )
}

export default Header

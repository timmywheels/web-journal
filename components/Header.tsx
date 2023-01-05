import Link from 'next/link'
import Container from './Container'
import React from 'react'
import classNames from 'classnames'

const Header = () => {
    return (
        <header className='py-6 mb-6 font-monospace text-sm font-bold'>
            <Container>
                <div>
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
                                    'shadow-xl rounded-md',
                                    'w-fit py-2 px-4',
                                    'bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900',
                                )}
                        >
                            <h1
                                style={{
                                    textShadow:
                                        // 'rgb(0 0 0) 1px 1px 1px, rgb(97 97 97) -1px -1px 5px, rgb(97 97 97) 1px 1px 5px, rgb(91 97 97) 1px 1px 5px, rgb(97 97 97) -1px -1px 5px',
                                    'rgb(150 150 150) 1px 1px 1px, rgb(0 0 0) -2px 0px 1px, rgb(97 97 97) 0px 1px 0px, rgb(125 125 125) -1px 1px 3px, rgb(0 0 0) -1px 0px 5px'
                                }}
                                className={
                                    'text-2xl font-medium font-monospace text-white'
                                }
                            >
                                tim wheeler's journal
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className={'grid grid-cols-2'}>
                    <div className={'col-span-1 text-right'}>
                        <Link href={'https://twitter.com/search?q=%23buildinpublic'}>
                            <h2 className={classNames(
                                'text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-gray-600',
                                'handwriting text-3xl tracking-wide drop-shadow-md'
                            )}>
                                #buildinpublic
                            </h2>
                        </Link>
                    </div>
                    <div className={'col-span-1'}></div>
                </div>
            </Container>
        </header>
    )
}

export default Header

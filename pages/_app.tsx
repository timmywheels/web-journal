import 'tailwindcss/tailwind.css'
import '../public/css/styles.css'
import '@fontsource/jetbrains-mono/variable.css'
import "@fontsource/east-sea-dokdo"

import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta name='description' content="Tim Wheeler's Journal" />
                <title>tim wheeler's journal</title>
            </Head>

            {/* Desktop Experience */}
            <div className='hidden sm:block'>
                {/* Journal Pages Effect */}
                <div className={'grid-paper mr-1 bg-gray-100 border-r-2 border-r-gray-200'}>
                    <div className={'grid-paper mr-1 bg-gray-100 border-r-2 border-r-gray-200'}>
                        <div className={'grid-paper mr-1 bg-gray-100 border-r-2 border-r-gray-200'}>
                            <div className={'grid-paper mr-1 bg-gray-100 border-r-2 border-r-gray-200'}>
                                <div className={'grid-paper mr-1 bg-gray-100 border-r-2 border-r-gray-200'}>
                                    <div className={'grid-paper mr-1 bg-gray-100 border-r-2 border-r-gray-200'}>
                                        <div className={'grid-paper mr-1 bg-gray-100 border-r-2 border-r-gray-200'}>
                                            <div className={'grid-paper mr-1 bg-gray-100 border-r-2 border-r-gray-200'}>
                                                <div className={'grid-paper mr-1 bg-gray-100 border-r-2 border-r-gray-200'}>
                                                    <div className={'grid-paper mr-1 bg-gray-100 border-r-2 border-r-gray-200'}>
                                                        {/* Grid Container */}
                                                        <Layout Component={Component} pageProps={pageProps} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Experience */}
            <div className={'block sm:hidden'}>
                <Layout Component={Component} pageProps={pageProps}/>
            </div>


        </div>
    )
}

export default App

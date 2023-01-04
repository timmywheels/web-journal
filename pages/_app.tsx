import 'tailwindcss/tailwind.css'
import '@fontsource/jetbrains-mono/variable.css'
import '../public/css/styles.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/Layout'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel="shortcut icon" href="/public/img/favicon.ico" />
                <meta name='description' content="Tim Wheeler's Journal" />
                <title>Journal | TimWheeler.com</title>
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


        </>
    )
}

export default App

import classNames from 'classnames'
import Header from './Header'
import Footer from './Footer'
import React from 'react'

const ContentArea = ({ Component, pageProps }) => {
    return (
        <div className='flex-1 flex overflow-hidden col-span-12 sm:col-span-10'>
            <div className='flex-1 overflow-scroll'>
                <main className={classNames(
                    'grid-paper ',
                    'col-span-10',
                    'flex flex-col justify-between bg-gray-50 min-h-screen',
                )}>
                    <div className={'pt-16'}>
                        <Header />
                    </div>
                    <div className={'items-start grow'}>
                        <Component {...pageProps} />
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    )
}

export default ContentArea;

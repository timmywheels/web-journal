import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
import React from 'react'

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="follow, index" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <link rel="shortcut icon" href="/img/favicon.ico" />
                {/*Google tag (gtag.js)*/}
                <Script strategy={'afterInteractive'} src="https://www.googletagmanager.com/gtag/js?id=G-S03Y104S24"/>
                <Script
                    id={'google-analytics'}
                    strategy={'afterInteractive'}
                    dangerouslySetInnerHTML={{ __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-S03Y104S24');
                    `}}
                />
            </Head>
            <body className="bg-gray-50 text-gray-700 antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document

import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="follow, index" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            </Head>
            <body className="bg-gray-50 text-gray-700 antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document

import React from 'react'
import Sidebar from './Sidebar'
import ContentArea from './ContentArea'

const Layout = ({ Component, pageProps }) => {
    return (
        <div className='h-screen grid grid-cols-12'>
            <Sidebar/>
            <ContentArea Component={Component} pageProps={pageProps} />
        </div>
    )
}

export default Layout

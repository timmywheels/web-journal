import Link from 'next/link'
import Image from 'next/image'
import twLogoLight from '../public/img/tw-logo-light.svg'
import React from 'react'

const SidebarMenu = () => {
    return (
        <div className={'hidden sm:flex col-span-1 bg-[#ffd500] justify-center items-end pb-4'}>
            <Link href='https://timwheeler.com?ref=journal'
                  target={'_blank'}>
                <Image
                    alt='TimWheeler.com logo'
                    src={twLogoLight}
                    width={50}
                    height={30}
                />
            </Link>
        </div>
    )
}

export default SidebarMenu

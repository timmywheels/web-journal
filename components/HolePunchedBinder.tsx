import journalTexture from '../public/img/journal-texture.svg'
import classNames from 'classnames'
import React from 'react'

const HolePunchedBinder = () => {
    return (
        <div style={{ backgroundImage: `url(${journalTexture.src})` }}
             className={
                 classNames(
                     'hidden sm:flex',
                     'col-span-1 flex-col h-full',
                     'drop-shadow-2xl py-10 bg-gray-100 justify-between items-center',
                     'border-l-gray-200 border-l-8',
                     'border-r-gray-300 border-r-2',
                 )}>
            <div className='hole-punch' />
            <div className='hole-punch' />
            <div className='hole-punch' />
        </div>
    )
}

export default HolePunchedBinder;

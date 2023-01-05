import React, { useState } from 'react'
import Loader from './Loader'
import AlertError from './AlertError'
import classNames from 'classnames'
import AlertSuccess from './AlertSuccess'

const SubscribeInput = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const handleChange = e => {
        setEmail(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setIsError(false)
        setIsSuccess(false);
        const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY
        const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID

        const res = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify({
                api_key: API_KEY,
                email: email,
            }),
        })
        if (res.ok) {
            setEmail('')
            setIsSuccess(true);
        } else {
            setIsError(true)
        }
        setLoading(false)
    }

    return (
        <div className={'space-y-6'}>
            <form onSubmit={e => handleSubmit(e)} className='sm:flex' aria-labelledby='newsletter-headline'>
                <input
                    aria-label='Email address'
                    type='email'
                    required
                    value={email}
                    onChange={e => handleChange(e)}
                    className={classNames(
                        'appearance-none font-monospace w-full px-5 py-3 border-4 border-dashed border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white',
                        'placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out'
                    )}
                    placeholder='Enter your email'
                />
                <div className='mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
                    <button
                        type={'submit'}
                        className={classNames(
                            'font-monospace text-sm leading-6 font-bold rounded-md text-white bg-green-500',
                            'w-full flex items-center justify-center px-5 py-3 border-b-2 border-green-600',
                            'hover:opacity-75 focus:outline-none focus:bg-green-400 transition duration-150 ease-in-out',
                        )}
                    >
                        {loading ? (
                            <Loader />
                        ) : null}
                        {!loading ?
                            <div className={`inline-block transition duration-150 ease-in-out`}>Subscribe</div> : null}
                    </button>
                </div>
            </form>
            <div>
                {isError ? <AlertError /> : null}
                {isSuccess ? <AlertSuccess/> : null}
            </div>
        </div>
    )
}

export default SubscribeInput

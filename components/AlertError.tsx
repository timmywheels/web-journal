import React from 'react'

const AlertError = () => {
    return (
        <div className="rounded-md bg-red-100 p-4 border-red-300 border">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <span className={'text-3xl'}>😬</span>
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">Oh snap. There was an error subscribing.</h3>
                    <div className="mt-2 text-sm text-red-700">
                        <p>Try subscribing again and if it still doesn't work, shoot me an email at <span className={'font-bold'}>tim@timwheeler.com</span> and I'll add you to the list manually.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlertError;

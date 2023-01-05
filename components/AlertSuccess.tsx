import React from 'react'

const AlertSuccess = () => {
    return (
        <div className="rounded-md bg-green-100 p-4 border-green-300 border">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <span className={'text-3xl'}>👉😎👉</span>
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-700">Niiiice. You've been subscribed. Check your email to confirm.</h3>
                </div>
            </div>
        </div>
    )
}

export default AlertSuccess;

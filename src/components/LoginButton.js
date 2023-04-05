import React from 'react'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

function LoginButton() {
    return (
        <>
            <div className="ml-4 flow-root lg:ml-6">
                <div className="group -m-2 flex items-center p-2">
                    <button>
                    <ArrowRightOnRectangleIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                    </button>
                </div>
            </div>
        </>
    )
}
export {LoginButton};
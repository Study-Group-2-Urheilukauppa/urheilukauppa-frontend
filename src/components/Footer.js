import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="mt-20 footer">
            <div className='z-50 fixed bottom-0 bg-secondary w-full h-16 grid content-center justify-center'>
    
                <div className='fixed bottom-0 grid right-11 h-11 text-indigo-600 text-sm font-medium'>
                <Link className="spurdo p-1 mb-24 nav-link" to="/Help">Asiakaspalvelu</Link>
                </div>
            </div>
        </footer>
    )
}
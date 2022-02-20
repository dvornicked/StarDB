import React from 'react'

import './ErrorIndicator.css'
import icon from './DeathStar.png'

const ErrorIndicator = () => {
    return (
        <div className='text-warning text-center mx-auto'>
            <img className='my-2' src={icon} alt='Error icon: Death Star'></img>
            <div className='lead'>BOOM!</div>
            <span>Something has gone terribly wrong</span>
        </div>
    )
}

export default ErrorIndicator
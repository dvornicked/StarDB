import React from 'react'
import { Link } from 'react-router-dom'


const LoginPage = ({ isLoggendIn, onLogin }) => {
    return (
        <div className='bg-dark p-3'>
            <p>Login to see secret page!</p>
            <Link
            to='/secret'
            className='btn btn-primary'
            onClick={onLogin}>
            Login
            </Link>
        </div>
    )
}

export default LoginPage
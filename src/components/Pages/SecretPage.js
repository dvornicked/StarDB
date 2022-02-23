import React from 'react'

const SecretPage = ({isLoggedIn}) => {
    if (isLoggedIn) {
        return (
            <div className='bg-dark text-center p-3'>
                <h3>This page is full </h3>
            </div>
        )
    }
    return <p>You should not see this!!!</p>
}

export default SecretPage
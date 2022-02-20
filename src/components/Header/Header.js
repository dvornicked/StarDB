import React from 'react'

import './Header.css'

const Header = ({onServiceChange}) => {
    return (
        <div className='header d-flex'>
            <h3><a href='/'>StarDB</a></h3>
            <ul className='d-flex'>
                <li><a href='/people'>People</a></li>
                <li><a href='/planets'>Planets</a></li>
                <li><a href='/starships'>Starships</a></li>
            </ul>
            <button className='btn btn-primary btn-sm' onClick={onServiceChange}>Change servive</button>
        </div>
    )
}

export default Header
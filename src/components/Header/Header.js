import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">StarDB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>
      <button className="btn btn-primary btn-sm ms-1" onClick={onServiceChange}>
        Change servive
      </button>
    </div>
  )
}

export default Header

import React from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'

import './App.css'

const App = () => {
    return (
        <div className='container'>
            <Header />
            <RandomPlanet />
            <div className='row my-1'>
                <div className='col-md-6 my-1'>
                    <ItemList />
                </div>
                <div className='col-md-6 my-1'>
                    <PersonDetails />
                </div>
            </div>
        </div>
    )
}

export default App
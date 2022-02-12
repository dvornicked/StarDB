import React, { Component } from 'react'

import Header from '../Header'
import PeoplePage from '../PeoplePage/PeoplePage'
import RandomPlanet from '../RandomPlanet'

import './App.css'



export default class App extends Component {

    state = {
        selectedPerson: null
    }

    onPersonSelected = id => {
        this.setState({selectedPerson: id})
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <RandomPlanet />
                <PeoplePage />
            </div>
        )
    }
}
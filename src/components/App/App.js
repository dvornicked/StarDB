import React, { Component } from 'react'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorBoundry from '../ErrorBoundry'
import SwapiService from '../../services/SwapiService'
import DummySwapiService from '../../services/DummySwapiService'

import { SwapiServiceProvider } from '../SwapiServiceContext'

import './App.css'
import { PeoplePage } from '../Pages'
import PlanetPage from '../Pages/PlanetsPage'
import StarshipPage from '../Pages/StarshipPage'

export default class App extends Component {

    state = {
        swapiService: new DummySwapiService()
    }

    onServiceChange = () => {
        this.setState(({ swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService

            return {
                swapiService: new Service()
            }
        })
    }

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className='container'>
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet />
                        <PeoplePage />
                        <PlanetPage />
                        <StarshipPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry> 
        )
    }
}
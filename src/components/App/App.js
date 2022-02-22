import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
import { StarshipDetails } from '../SWComponents'

export default class App extends Component {
  state = {
    swapiService: new SwapiService()
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService

      return {
        swapiService: new Service()
      }
    })
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="container">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Routes>
                <Route path="/" element={<h2 className='my-3'>Welcome to StarDB</h2>} />
                <Route path="/people" element={<PeoplePage />} />
                <Route path="/planets" element={<PlanetPage />} />
                <Route path="/starships" element={<StarshipPage />} />
                <Route path="/starships/:id" element={<StarshipDetails/>} />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}

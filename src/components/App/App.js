import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from '../Header'
import RandomPlanet from '../RandomPlanet'
import ErrorBoundry from '../ErrorBoundry'
import SwapiService from '../../services/SwapiService'
import DummySwapiService from '../../services/DummySwapiService'

import { SwapiServiceProvider } from '../SwapiServiceContext'

import './App.css'
import { PeoplePage, PlanetsPage, StarshipPage, LoginPage, SecretPage } from '../Pages'
import { PersonDetails, PlanetDetails, StarshipDetails } from '../SWComponents'

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
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
    const { isLoggedIn } = this.state
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
                <Route path="/planets" element={<PlanetsPage />} />
                <Route path="/starships" element={<StarshipPage />} />
                <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />} />
                <Route path="/secret" element={<SecretPage isLoggedIn={isLoggedIn} />} />
                <Route path="/people/:id" element={<PersonDetails />} />
                <Route path="/planets/:id" element={<PlanetDetails />} />
                <Route path="/starships/:id" element={<StarshipDetails/>} />
                <Route path='*'  element={<h2 className='text-center'>Page not found</h2>}/>
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}

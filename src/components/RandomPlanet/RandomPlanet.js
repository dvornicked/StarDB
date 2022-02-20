import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SwapiService from '../../services/SwapiService'
import ErrorIndicator from '../ErrorIndicator'
import Spinner from '../Spinner/Spinner'

import './RandomPlanet.css'

export default class RandomPlanet extends Component {
  SwapiService = new SwapiService()

  state = {
    planet: {},
    loading: true,
    error: false
  }

  static defaultProps = {
    updateInterval: 10000
  }

  static propTypes = {
    // updateInterval: (props, propName, componentName) => {
    //     const value = props[propName]

    //     if (typeof value === 'number' && !isNaN(value)) return null
    //     return new TypeError(`${componentName}: ${propName} must be number`)
    // }
    updateInterval: PropTypes.number
  }

  componentDidMount() {
    const { updateInterval } = this.props
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, updateInterval)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false })
  }

  onError = err => {
    this.setState({ error: true, loading: false })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 10 + 2)
    this.SwapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {
    const { planet, loading, error } = this.state

    const hasData = !(loading || error)

    const errorMessage = error ? <ErrorIndicator /> : null
    const spinner = loading ? <Spinner /> : null
    const content = hasData ? <PlanetView planet={planet} /> : null

    return (
      <div className="random-planet bg-dark rounde">
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotation, diameter } = planet
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="Planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotation}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

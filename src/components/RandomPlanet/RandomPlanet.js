import React, { Component } from 'react'

import './RandomPlanet.css'

export default class RandomPlanet extends Component {

    render() {
        return (
            <div className='random-planet bg-dark rounde'>
                <img className='planet-image'
                    src='https://starwars-visualguide.com/assets/img/planets/5.jpg' alt='Planet'/>
                <div>
                    <h4>Planet Name</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Population</span>
                            <span>123124</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Rotation Period</span>
                            <span>43</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diameter</span>
                            <span>100</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

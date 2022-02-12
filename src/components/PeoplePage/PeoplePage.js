import React, { Component } from 'react'

import './PeoplePage.css'

import ItemList from '../ItemList'
import PersonDetails from '../PersonDetails'
import ErrorIndicator from '../ErrorIndicator'

export default class PeoplePage extends Component {

    state = {
        selectedPerson: null,
        hasError: false
    }

    onPersonSelected = selectedPerson => { this.setState({selectedPerson})  }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) return <ErrorIndicator />

        return (
            <div className='row my-1'>
                <div className='col-md-6 my-1'>
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className='col-md-6 my-1'>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Title from './Title'

export default class Home extends Component {
    render() {
        return (
            <div id='home-div'>
                <Title />
                <Jumbotron />
            </div>
        )
    }
}

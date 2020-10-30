import React, { Component } from 'react'
import JumbotronContent from './JumbotronContent'

export default class Jumbotron extends Component {
    render() {
        return (
            <div className='jumbotron'>
                <JumbotronContent />
            </div>
        )
    }
}

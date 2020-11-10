import React, { Component } from 'react'

export default class FanArtCard extends Component {
    render() {
        return (
            <div className='fan-art-card'>
                <h4 className="fan-art-card__title">{this.props.title}</h4>
                <img className="fan-art-card__img" src={this.props.url}></img>
                <p>Submitted by: <strong>{this.props.username}</strong></p>
            </div>
        )
    }
}

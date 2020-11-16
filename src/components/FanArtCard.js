import React, { Component } from 'react'
import FanArtForm from './FanArtForm'

export default class FanArtCard extends Component {

    state = {
        showEditForm: false, 
    }

    onClick = () => {
        this.setState({showEditForm: true})
    }

    formToggle = () => {
        this.setState({showEditForm: false})
    }

    render() {
        return (
            <div className='fan-art-card u-margin-bottom-medium'>
                <h4 className="fan-art-card__title">{this.props.title}</h4>
                <button className='btn-primary' onClick={this.onClick}>Edit {this.props.title}</button>
                {this.state.showEditForm ? <FanArtForm fanArt={this.props} formToggle={this.formToggle} editFanArt={this.props.editFanArt} /> : null}
                <img className="fan-art-card__img" src={this.props.url}></img>
                <p>Submitted by: <strong>{this.props.username}</strong></p>
            </div>
        )
    }
}

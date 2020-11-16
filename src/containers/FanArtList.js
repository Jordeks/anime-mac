import React, { Component } from 'react'
import FanArtCard from '../components/FanArtCard'

export default class FanArtList extends Component {
    render() {
        return (
    <div className='fanart'>
        <h3 className='heading-secondary'> Latest Fanart:</h3>
        <ul className='fanart__list'>
            {this.props.fanarts.map(art => <FanArtCard {...art} key={art.id} addFanArt={this.props.addFanArt} editFanArt={this.props.editFanArt}/>)}
        </ul>
    </div>
        )
    }
}

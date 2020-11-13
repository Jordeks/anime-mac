import React, { Component } from 'react'
import FanArtCard from '../components/FanArtCard'

export default class FanArtList extends Component {
    render() {
        return (
    <div className='arts-div'>
        <h3> Latest Fanart:</h3>
        <ul className='art-list'>
            {this.props.fanarts.map(art => <FanArtCard {...art} key={art.id} />)}
        </ul>
    </div>
        )
    }
}

import React, { Component } from 'react'
import FanArtList from './FanArtList'
import FanArtForm from '../components/FanArtForm'

export default class FanArtContainer extends Component {

    state = {
        fanarts: []
      }

      componentDidMount(){
        fetch('http://localhost:3000/fanarts')
          .then(response => response.json())
          .then(data => this.setState({fanarts: data }));
      }
    
      addFanArt = (fanArt) => {
        fetch(`http://localhost:3000/fanarts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fanArt),
        })
        .then(response => response.json())
        .then(newArt => this.setState({fanarts: [...this.state.fanarts, newArt]}))
      }

    render() {
        return (
            <div>
                <FanArtList fanarts={this.state.fanarts}/>
                <FanArtForm addFanArt={this.addFanArt}/>
            </div>
        )
    }
}

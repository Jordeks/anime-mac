import React, { Component } from 'react'
import FanArtList from './FanArtList'
import FanArtForm from '../components/FanArtForm'

export default class FanArtContainer extends Component {

    state = {
        fanarts: [],
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

      editFanArt = (fanArt, id) => {
        fetch(`http://localhost:3000/fanarts/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fanArt),
        })
        .then(response => response.json())
        .then(updatedArt => {
          const array = this.state.fanarts.filter(art => art.id !== updatedArt.id)
          this.setState({fanarts: [...array, updatedArt]})
        })
      }

  

    render() {
        return (
            <div>
                <FanArtList fanarts={this.state.fanarts} addFanArt={this.addFanArt} editFanArt={this.editFanArt} />
                <FanArtForm addFanArt={this.addFanArt} editFanArt={this.editFanArt}/>
            </div>
        )
    }
}

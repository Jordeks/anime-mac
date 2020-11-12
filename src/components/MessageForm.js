import React, { Component } from 'react'
import animegirl from "../img/animegirl.jpg"

export default class MessageForm extends Component {

 state = {
      username: '',
      text: '',
    }
  

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addMessage(this.state)
    this.setState({
      username: '',
      text: ''
    })
  }

  render() {
    return (
      <div className='form-div'>
        {/* <figure class="form-shape">
            <img src={animegirl} alt="anime girl" className="form-img" />
        </figure> */}
      <form className="submit-message-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input className='form-input' type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" required/>
          <label className='form-label'> Username </label>
        </div>
        <div className='form-group'>
          <input className='form-input' type="text" name="text" value={this.state.text} onChange={this.handleChange} placeholder="Message" required/>
          <label className='form-label'> Message </label>
        </div>
        <input className='submit-btn' type="submit" value="Submit" />
    </form>
  
    </div>
    )
  }
}

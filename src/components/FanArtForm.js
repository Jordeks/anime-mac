import React, { Component } from 'react'

export default class FanArtForm extends Component {

 state = {
      username: '',
      title: '',
      url: '', 
    }
  

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addFanArt(this.state)
    this.setState({
      username: '',
      title: '',
      url: ''
    })
  }

  render() {
    return (
      <div className='form-div'>
      <form className="submit-message-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input className='form-input' type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" required/>
          <label className='form-label'> Username </label>
        </div>
        <div className='form-group'>
          <input className='form-input' type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title" required/>
          <label className='form-label'> Title </label>
        </div>
        <div className='form-group'>
          <input className='form-input' type="text" name="url" value={this.state.url} onChange={this.handleChange} placeholder="Fan art Url" required/>
          <label className='form-label'> Fan art Url </label>
        </div>
        <input className='submit-btn' type="submit" value="Submit" />
    </form>
  
    </div>
    )
  }
}
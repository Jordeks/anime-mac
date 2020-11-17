import React, { Component } from 'react'

export default class FanArtForm extends Component {

 state = {
      username: this.props.fanArt ? this.props.fanArt.username : '',
      title: this.props.fanArt ? this.props.fanArt.title : '',
      url: this.props.fanArt ? this.props.fanArt.url : '', 
    }
  
  // componentDidUpdate(prevProps, prevState){
  //   console.log("previous:", prevProps, "current", this.props)
  //   this.setState({
  //     username: this.props.username,
  //     title: this.props.title,
  //     url: this.props.url 
  //   })
  // }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.props.fanArt.id) {
      this.props.editFanArt(this.state, this.props.fanArt.id)
      this.props.formToggle()
    } else {
      this.props.addFanArt(this.state)
    }
    this.setState({
      username: '',
      title: '',
      url: ''
    })
  }

  // componentDidMount() {
  //   this.setState({
  //     username: this.props.fanArt.username,
  //     title: this.props.fanArt.title,
  //     url: this.props.fanArt.url 
  //   })
  // }

  render() {
    console.log(this.props, this.state)
    return (
      <div className='fanart-form'>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form__group">
            <input className='form__input' type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" required/>
            <label className='form__label'> Username </label>
          </div>
          <div className='form__group'>
            <input className='form__input' type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title" required/>
            <label className='form__label'> Title </label>
          </div>
          <div className='form__group'>
            <input className='form__input' type="text" name="url" value={this.state.url} onChange={this.handleChange} placeholder="Fan art Url" required/>
            <label className='form__label'> Fan art Url </label>
          </div>
          <input className='submit-btn' type="submit" value="Submit" />
        </form>
  
    </div>
    )
  }
}
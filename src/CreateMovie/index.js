import React, { Component } from 'react';


class CreateMovie extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      description: ''
    }
  }
  updateMovie = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <form onSubmit={null}>
        <label>
          Movie:
          <input type='text' name='title' onChange={this.updateMovie}/>
        </label>
        <label>
          description:
          <input type='text' name='description' onChange={this.updateMovie}/>
        </label>
        <input type='Submit' value="Create Movie"/>
      </form>
      )
  }
}

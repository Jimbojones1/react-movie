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
      <form onSubmit={this.props.addMovie.bind(null, this.state)}>
        <label>
          Movie:
          <input type='text' name='title' value={this.state.title} onChange={this.updateMovie}/>
        </label>
        <label>
          description:
          <input type='text' name='description' value={this.state.description} onChange={this.updateMovie}/>
        </label>
        <button type='Submit'>Create Movie</button>
      </form>
      )
  }
}

export default CreateMovie;

import React, { Component } from 'react';


class MovieContainer extends Component {
  constructor(){
    super();

    this.state = {
      movies: []
    }
  }
  addMovie = async (movie) => {
    // Set up your post request with fetch, Maybe lookup how do i do post request with fetch,
    // headers: {'Content-Type': 'application/json'}
    // becuase after we create it, we want to add it to the movies array
  }
  render(){
    return (
      <div>Is this working</div>
      )
  }
}

export default MovieContainer;

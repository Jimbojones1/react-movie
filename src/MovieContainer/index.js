import React, { Component } from 'react';
import CreateMovie from '../CreateMovie';
import MovieList from '../MovieList';
class MovieContainer extends Component {
  constructor(){
    super();

    this.state = {
      movies: []
    }
  }
  getMovies = () => {
    // Where We will make our fetch call to get all the movies
  }
  componentDidMount(){
    // get ALl the movies, on the intial load of the APP
  }
  addMovie = async (movie, e) => {
    // .bind arguments take presidence over every other argument
    e.preventDefault();
    console.log(movie);

    try {

      // We have to send JSON
      // createdMovie variable will store the response from the express API
      const createdMovie = await fetch('http://localhost:9000/api/v1/movies', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // we have to turn the response from express into
      // an object we can use
      const parsedResponse = await createdMovie.json();
      console.log(parsedResponse, ' this is response')
      // we are emptying all the movies that are living in state into a new array,
      // and then adding the movie we just created to the end of it
      // the newMovie is called parsedResponse.data
      this.setState({movies: [...this.state.movies, parsedResponse.data]})


    } catch(err){
      console.log('error')
      console.log(err)
    }
    // request address will start with 'http://localhost:9000'
    // Set up your post request with fetch, Maybe lookup how do i do post request with fetch,
    // headers: {'Content-Type': 'application/json'}
    // becuase after we create it, we want to add it to the movies array
  }
  render(){
    console.log(this.state)
    return (
      <div>
        <CreateMovie addMovie={this.addMovie}/>
        <MovieList />
      </div>
      )
  }
}

export default MovieContainer;

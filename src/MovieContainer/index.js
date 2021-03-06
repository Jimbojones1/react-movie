import React, { Component } from 'react';
import CreateMovie from '../CreateMovie';
import MovieList from '../MovieList';
import EditMovie from '../EditMovie';
import { Grid } from 'semantic-ui-react';

class MovieContainer extends Component {
  constructor(){
    super();

    this.state = {
      movies: [],
      movieToEdit: {
        title: '',
        description: '',
        _id: ''
      },
      showEditModal: false
    }
  }
  getMovies = async () => {
    // Where We will make our fetch call to get all the movies
    const movies = await fetch('http://localhost:9000/api/v1/movies');
    const moviesParsedJSON = await movies.json();
    return moviesParsedJSON
  }
  componentDidMount(){
    // get ALl the movies, on the intial load of the APP
    this.getMovies().then((movies) => {
      this.setState({movies: movies.data})
    }).catch((err) => {
      console.log(err);
    })
    /// Where you call this.getMovies
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
        credentials: 'include',
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
  deleteMovie = async (id) => {


    const deleteMovieResponse = await fetch('http://localhost:9000/api/v1/movies/' + id, {
                                              method: 'DELETE'
                                            });

    // This is the parsed response from express
    const deleteMovieParsed = await deleteMovieResponse.json();




    // Now that the db has deleted our item, we need to remove it from state
    this.setState({movies: this.state.movies.filter((movie) => movie._id !== id )})

    console.log(deleteMovieParsed, ' response from express server')
      // Then make the delete request, then remove the movie from the state array using filter
  }
  handleEditChange = (e) => {

    this.setState({
      movieToEdit: {
        ...this.state.movieToEdit,
        [e.currentTarget.name]: e.currentTarget.value
      }
    });


    // movieToEdit: {
    //   _id: this.state.movieToEdit._id,
    //   title: this.state.movieToEdit.title,
    //   description: this.state.movieToEdit.description
    // }
  }
  closeAndEdit = async (e) => {
    // Put request,
    e.preventDefault();
    // then update state
    try {

      const editResponse = await fetch('http://localhost:9000/api/v1/movies/' + this.state.movieToEdit._id, {
        method: 'PUT',
        body: JSON.stringify({
          title: this.state.movieToEdit.title,
          description: this.state.movieToEdit.description
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const editResponseParsed = await editResponse.json();

      const newMovieArrayWithEdit = this.state.movies.map((movie) => {

        if(movie._id === editResponseParsed.data._id){
          movie = editResponseParsed.data
        }

        return movie
      });

      this.setState({
        showEditModal: false,
        movies: newMovieArrayWithEdit
      });

      console.log(editResponseParsed, ' parsed edit')




    } catch(err){
      console.log(err)
    }

    // If you feel up to make the modal (EditMovie Component) and show at the appropiate times

  }
  openAndEdit = (movieFromTheList) => {
    console.log(movieFromTheList, ' movieToEdit  ');


    this.setState({
      showEditModal: true,
      movieToEdit: {
        ...movieFromTheList
      }
    })

    // movieToEdit = {
    //   title: movieFromTheList.title,
    //   description: movieFromTheList.description
    // }
  }
  render(){
    console.log(this.state)
    return (
      <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
        <Grid.Row>
          <Grid.Column>
            <CreateMovie addMovie={this.addMovie}/>
          </Grid.Column>

          <Grid.Column>
            <MovieList movies={this.state.movies} deleteMovie={this.deleteMovie} openAndEdit={this.openAndEdit}/>
          </Grid.Column>
          <EditMovie open={this.state.showEditModal} movieToEdit={this.state.movieToEdit} handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit}/>
        </Grid.Row>
      </Grid>
      )
  }
}

export default MovieContainer;

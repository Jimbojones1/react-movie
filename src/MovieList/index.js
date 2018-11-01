import React from 'react';

// Pure Function, takes an input and renders ui
const Movies = (props) => {
  // you'll propably have to map over the movies and create your list items here
  const movies = props.movies.map((movie, i) => {
    return (
      <li key={movie._id}>
        <h5>{movie.title}</h5>
        <small>{movie.description}</small>
        <button>Edit Movie</button>
        <button>Delete Movie</button>
      </li>
      )
  })

  return (
    <div>
      <h3>Movies</h3>
      <ul>
        {movies}
      </ul>
    </div>
    )
}


export default Movies;

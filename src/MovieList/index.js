import React from 'react';
import { Card, Button} from 'semantic-ui-react';
// Pure Function, takes an input and renders ui
const Movies = (props) => {
  // you'll propably have to map over the movies and create your list items here
  const movies = props.movies.map((movie, i) => {
    return (
      <Card key={movie._id}>
        <Card.Content>
          <Card.Header>{movie.title}</Card.Header>
          <Card.Description>{movie.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button color="green" onClick={props.openAndEdit.bind(null, movie)}>Edit Movie</Button>
          <Button color="red" onClick={props.deleteMovie.bind(null, movie._id)}>Delete Movie</Button>
        </Card.Content>
      </Card>
      )
  })

  return (
    <div>
      <h3>Movies</h3>
      <Card.Group className="centered">
        {movies}
      </Card.Group>
    </div>
    )
}


export default Movies;

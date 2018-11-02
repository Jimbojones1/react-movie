import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

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
      <Segment>
        <h4>Create Movie</h4>
        <Form onSubmit={this.props.addMovie.bind(null, this.state)}>
          <Label>Movie:</Label>
          <Form.Input type='text' name='title' value={this.state.title} onChange={this.updateMovie}/>
          <Label>description:</Label>
          <Form.Input type='text' name='description' value={this.state.description} onChange={this.updateMovie}/>
          <Button color="green" type='Submit'>Create Movie</Button>
        </Form>
      </Segment>
      )
  }
}

export default CreateMovie;

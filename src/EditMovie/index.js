import React from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';


const EditMovie = (props) => {
  console.log(props)
  return (
    <Modal open={props.open}>
      <Header>Edit Movie</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
          <Label>
            Edit Moive Title:
          </Label>
          <Form.Input type='text' name='title' value={props.movieToEdit.title} onChange={props.handleEditChange}/>
          <Label>
            Edit Movie Description:
          </Label>
          <Form.Input type='text' name='description' value={props.movieToEdit.description} onChange={props.handleEditChange}/>

          <Modal.Actions>
            <Button color='green' type='submit'>Edit Movie</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
    )
}

export default EditMovie;

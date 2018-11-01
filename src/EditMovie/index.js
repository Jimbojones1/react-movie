import React from 'react';


const EditMovie = (props) => {

  return (
    <div>
      <h4>Edit Movie</h4>
      <form onSubmit={props.closeAndEdit}>
        <label>
          Edit Moive Title:
          <br/>
          <input type='text' name='title' value={props.movieToEdit.title} onChange={props.handleEditChange}/>
        </label>
        <label>
          Edit Movie Description:
          <br/>
          <input type='text' name='description' value={props.movieToEdit.description} onChange={props.handleEditChange}/>
        </label>
        <button type='submit'>Edit Movie</button>
      </form>
    </div>
    )
}

export default EditMovie;

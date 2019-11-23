import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.getCharacter} >
      <input type="text" name="character" placeholder="Search for a SuperHuman..."/>
      <button> Get Character </button>
    </form>
  )
}

export default Form;
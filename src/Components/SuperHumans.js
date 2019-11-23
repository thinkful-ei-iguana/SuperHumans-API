import React from 'react';

const SuperHumans = (props) => {
  return (
    <div>
      {props.name && <p>Character Name: { props.name }</p>}
      
      {props.aliases && <p>Character Aliases: {props.aliases }</p>} 
      {props.affiliates && <p>Character Affiliates: {props.affiliates }</p>}
      {props.relatives && <p>Character Relatives: { props.relatives }</p>}
      {props.height && <p>Character Height: { props.height }</p>}
      {props.weight && <p>Character Weight: {props.weight }</p>}
      {props.error && <p> {props.error}</p>}
    </div>
  )
}

export default SuperHumans;
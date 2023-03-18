import React from 'react'

function Posting(props) {
  return (
    <div>
        <div>{props.Data.price}</div>
        <img src={props.Data.imageURL} alt={props.data.title}/>
        <span>{props.data.title}</span>
    </div>
  )
}

export default Posting
/* eslint-disable react/prop-types */
import React from "react"

const Note = (props) => {
  const handleEdit = () => {
    const data = {
      title: props.title,
      content: props.content,
    }
    console.log(data)
  }

  return (
    <div className="note" onClick={() => handleEdit()}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default Note

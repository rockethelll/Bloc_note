/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"
import Showdown from "showdown"

const NoteDisplay = ({ title, content }) => {
  
  const converter = new Showdown.Converter()
  let titleInMd = converter.makeHtml(title)
  let contentInMd = converter.makeHtml(content)

  const createMarkup = (item) => {
    return { __html: item }
  }

  return (
    <div className="note-display">
      <h1 dangerouslySetInnerHTML={createMarkup(titleInMd)}></h1>
      <p dangerouslySetInnerHTML={createMarkup(contentInMd)}></p>
    </div>
  )
}

export default NoteDisplay

/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import MarkdownInput from "./components/MarkdownInput/MarkdownInput.jsx"
import NoteDisplay from "./components/NoteDisplay/NoteDisplay.jsx"
import NoteList from "./components/NoteList/NoteList.jsx"

const App = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }

  return (
    <div className="container">
      <NoteList />
      <NoteDisplay title={title} content={content} />
      <MarkdownInput
        title={title}
        content={content}
        onChangeTitle={handleChangeTitle}
        onChangeContent={handleChangeContent}
      />
    </div>
  )
}

export default App

/* eslint-disable no-unused-vars */
import React from "react"
import MarkdownInput from "./components/MarkdownInput/MarkdownInput.jsx"
import NoteDisplay from "./components/NoteDisplay/NoteDisplay.jsx"
import NoteList from "./components/NoteList/NoteList.jsx"

const App = () => {
  return (
    <div className="container">
      <NoteList />
      <NoteDisplay />
      <MarkdownInput />
    </div>
  )
}

export default App

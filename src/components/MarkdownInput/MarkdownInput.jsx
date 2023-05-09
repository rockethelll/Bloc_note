/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"
import Button from "../Button/Button.jsx"

const MarkdownInput = ({ onChangeTitle, onChangeContent, title, content }) => {
  const handleSave = () => {
    const notes = JSON.parse(localStorage.getItem("blocNote")) || []
    notes.push({ date: Date.now(), title, content: content })
    localStorage.setItem("blocNote", JSON.stringify(notes))
  }

  return (
    <div className="markdonwn-input">
      <form>
        <input
          id="title"
          type="text"
          placeholder="Titre"
          onChange={onChangeTitle}
          value={title}
        />

        <textarea
          id="content"
          type="text"
          placeholder="Tapez votre note"
          onChange={onChangeContent}
          value={content}
        ></textarea>

        <Button
          value={"Sauvegarder"}
          className={"btn-save"}
          onClick={handleSave}
        />
      </form>
    </div>
  )
}

export default MarkdownInput

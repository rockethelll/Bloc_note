// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import Button from "../Button/Button.jsx"

const MarkdownInput = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  localStorage.setItem('blocNote', JSON.stringify({title, content}))
  // localStorage.clear()

  return (
    <div className="markdonwn-input">
      <form>
        <input
          id="title"
          type="text"
          placeholder="Titre"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          id="content"
          type="text"
          placeholder="Tapez votre note"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        ></textarea>
        <Button value={'Sauvegarder'} className={'btn-save'}/>
      </form>
    </div>
  )
}

export default MarkdownInput

import React, { useEffect, useState } from "react"

const MarkdownInput = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // useEffect(() => window.localStorage.blocNote = JSON.stringify({ title, content }), [])

  return (
    <div>
      <form>
        <input type="text" placeholder="Titre" onChange={(e) => setTitle(e.target.value)} value={title} />
        <textarea type="text" placeholder="Tapez votre note" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
        <input type="submit" value="Sauvegarder" className="btn"/>
      </form>
    </div>
  )
}

export default MarkdownInput

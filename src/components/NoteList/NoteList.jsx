import React from "react"
import Button from "../Button/Button"
import Note from "../Note/Note"

const NoteList = () => {
  const notes = JSON.parse(localStorage.getItem("blocNote")) || []

  return (
    <div className="note-list">
      <Button value={"Ajouter une note"} className={"btn-add"} />

      {notes
        .sort((a, b) => b.date - a.date)
        .map((note) => (
          <Note
            key={note.date}
            title={note.title}
            content={note.content.split(" ").slice(0, 15).join(" ")}
          />
        ))}
    </div>
  )
}

export default NoteList

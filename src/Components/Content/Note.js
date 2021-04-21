import React, { useState } from "react";
import { Button } from "../Elements/Button";

export const Note = ({ onSubmit, note }) => {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState(note?.title || "");
  const [description, setDescription] = useState(note?.description || "");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (note) {
      return onSubmit(note.id, { title, description, updatedAt: new Date() })
    }

    return onSubmit({ date, title, description})
  };

  return (
    <div className="note">
      <form onSubmit={handleSubmit}>
        <div id="noteContent">
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
            className="Date"
            value={date}
          ></input>
          <br></br>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            className="Title"
            placeholder="Titulo"
            value={title}
          ></input>{" "}
          <br></br>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="descriptionNote"
            placeholder="Escribe tu notita"
            value={description}
          ></textarea>
          <br></br>
          <Button text="Crear" />
        </div>
      </form>
    </div>
  );
};

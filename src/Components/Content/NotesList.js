import React, { useState, useEffect } from "react";
import { fireStore } from "../../firebase";
import { Modal } from "./Modal";
import crearnota from "../../assets/crearnota.png";
import { Note } from "./Note";

export const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [modal, setModalVisibility] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const getNotes = async () => {
      const { docs } = await fireStore.collection("remember").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setNotes(newArray);
    };

    getNotes();
  }, []);

  const showModal = () => {
    setModalVisibility(true);
  };

  const hideModal = () => {
    setModalVisibility(false);
  };

  const deleteNote = async (id) => {
    try {
      await fireStore.collection("remember").doc(id).delete();
      const { docs } = await fireStore.collection("remember").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      setNotes(newArray);
    } catch (e) {
      console.log(e);
    }
  };

  const createNote = (note) => {
    fireStore
      .collection("remember")
      .add(note)
      .then(() => hideModal())
      .catch((err) => console.error(err));
  };

  const updateNote = (id, changes) => {
    fireStore
      .doc(`remember/${id}`)
      .update(changes)
      .then(() => hideModal())
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        <button className="createNote">
          <a
            href="#miModal"
            onClick={() => {
              setSelectedNote(null);
              showModal();
            }}
          >
            {" "}
            <img src={crearnota} alt="crearnota" />
          </a>
        </button>
        <h2>Historial de tus notas </h2>
        <div className="Print">
          {notes.length !== 0 ? (
            notes.map((item) => (
              <div className="printNotes" key={item.id}>
                <div className="content">
                  <h4>{item.date}</h4>
                  <h4>{item.title}</h4>
                  <h4>{item.description}</h4>
                  <button
                    onClick={() => {
                      deleteNote(item.id);
                    }}
                  >
                    Borrar
                  </button>
                  <button
                    onClick={() => {
                      setSelectedNote(item);
                      showModal();
                    }}
                  >
                    Editar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <span> lo siento no hay notas </span>
          )}
        </div>
        <Modal onClose={hideModal} open={modal}>
          {selectedNote ? (
            <Note onSubmit={updateNote} note={selectedNote} />
          ) : (
            <Note onSubmit={createNote} />
          )}
        </Modal>
      </div>
    </>
  );
};

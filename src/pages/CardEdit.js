import React, { useState, useEffect } from 'react';
import './CardEdit.css';
import { db } from '../firebase';
import { useHistory } from 'react-router';


const inicialValues = {
  title: "",
  text: "",
};

function CardEdit() {
  const history = useHistory();
  const [values, setValues] = useState(inicialValues);

  const notesinputChange = (e) => {
    const { id, value } = e.target; // key, value
    setValues({ ...values, [id]: value })
  };

  const historyPageInNotes = () => {
    history.push('/Cards')
  }


  const addOrEditNote = async (notesinputChange) => {
    await db.collection('newNotes').doc().set(notesinputChange);
    console.log('agregaste la info')
    //console.log(doc.id)
  };

  useEffect(() => {
    addOrEditNote();

  })

  const notesEdit = e => {
    e.preventDefault();
    console.log(values);

  }

  return (
    <form
      className="cardContainer" onSubmit={notesEdit}>
      <div className="title">
        <input type="text"
          id="title"
          className="titleControl"
          placeholder="Title"
          onChange={notesinputChange}


        />
      </div>

      <div className="textEdit">
        <input type="text"
          id="text"
          className="textControl"
          placeholder="Text"
          onChange={notesinputChange}
          value={values.id}
        />
      </div>


      <button className=" btnSave">
        Save
     </button>
      <div className="actions">
        <button onClick={historyPageInNotes}
          className="buttonIni">Ver Notas</button>
      </div>




    </form>

  );
}


//crear componentes para editar notas borrar, escribir,eliminar
export default CardEdit;


/*<div className="footD">
{props.img}
</div>*/
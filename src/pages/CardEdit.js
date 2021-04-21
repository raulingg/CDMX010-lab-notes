import React, { useState } from 'react';
import './CardEdit.css';

const inicialValues = {
  title: "",
  text: "",
};

function CardEdit() {
  const [values, setValues] = useState(inicialValues);

  const addNote = () => {
    console.log('new Note')
  }


  const notesinputChange = (e) => {
    const { id, value} = e.target; // key, value
    /*console.log(title,textEdit, value);*/
    setValues({ ...values, [id]: value })
  };

  const notesEdit = e => {
    e.preventDefault();
    console.log(values);
    // guardar nota ...


    
  };


  return (
    <form className="cardContainer" onSubmit={notesEdit}>
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
        />
      </div>


      <button className=" btnSave">
        Save
     </button>


    </form>

  );
}
//crear componentes para editar notas borrar, escribir,eliminar
export default CardEdit;


/*<div className="footD">
{props.img}
</div>*/
import React, { useState } from 'react';
import './CardEdit.css';
import ducky from '../assets/img/ducky.png';
function CardEdit(props) {

  const addNote = () => {
    console.log('new Note')
  }

  const inicialValues = {
    title: "",
    textEdit: "",
  };
  
  
  const [values, setValues] = useState(inicialValues);

  const notesinputChange = (e) => {
    const { title, textEdit, value } = e.target;
    /*console.log(title,textEdit, value);*/
    setValues({ ...values, [title]: value, [textEdit]: value })
  };

  const notesEdit = e => {
    e.preventDefault();
    console.log(values);
  };


  return (



    <form className="cardContainer" onSubmit={notesEdit} addOrEdit={addNote}>

      <div className="title">
        <input type="text"
          className="titleControl"
          placeholder="Title"
          onChange={notesinputChange}
        />

      </div>


      <div className="textEdit">
        <input type="text"
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
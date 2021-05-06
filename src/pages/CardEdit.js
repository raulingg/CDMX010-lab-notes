import React, { useState } from 'react';
import './CardEdit.css';
import { db } from '../firebase';
import { useHistory } from 'react-router';
import duckytwo from '../assets/img/duckytwo.png';
import check from '../assets/img/check.png';
const inicialValues = {
  title: "",
  text: "",
};

function CardEdit() {
  const history = useHistory();

  const historyPageInNotes = () => {
    history.push('/Cards')
  }

  const [values, setValues] = useState(inicialValues);

  const notesinputChange = (e) => {
    const { id, value } = e.target; // key, value
    setValues({ ...values, [id]: value })
  };

  const createNote = e => {
    e.preventDefault();
    db.collection('newNotes').add(values)
  }


  return (
    <div>
      <header className="headerW">
        <h1>UglyDucklingNotes</h1>
      </header>
      <form className="cardContainer" onSubmit={createNote}>
        <div className="title">
          <input type="text"
            id="title"
            className="titleControl"
            placeholder="My first Note"
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
        <img src={check}></img>
     </button>

      
      </form>
        <button onClick={historyPageInNotes}
          className="buttonViewN">Ver Notas</button>
        <footer className="imgDucky">
          <img src={duckytwo} width="100%" height="100%"></img>
        </footer>
      
    </div>
  );
}


//crear componentes para editar notas borrar, escribir,eliminar
export default CardEdit;


/*<div className="footD">
{props.img}
</div>*/
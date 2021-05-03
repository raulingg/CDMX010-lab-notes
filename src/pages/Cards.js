import React from 'react';
import './CardEdit.js';
import './Cards.css';
import { useHistory } from 'react-router';
import duckytwo from '../assets/img/duckytwo.png';
import icon from '../assets/img/icon.png';
// import { cardContainer } from '../CardEdit.js'
function Cards() {
  const historyCards = useHistory();

  const historyViewNotes = () => {
    historyCards.push('/CardEdit')

  }
  /*renderNotes = () => {

    <div className="notesContainer">
      <li>{id.title} {id.textEdit}</li>

    </div>


  }*/

  return (
    <div className="pageNotes">
      <header className="headerW">
        <h1>UglyDucklingNotes</h1>
      </header>
      <div className="renderNotes">
      </div>
      <div className="btnsNotes">
        <div className="actionsNotes">
          <button
            onClick={historyViewNotes}
            className="buttonCreate"><img src={icon} width="10%" height="10%"></img> </button>
        </div>
        <footer className="imgDuck">
          <img src={duckytwo} width="30%" height="30%"></img>
        </footer>
      </div>

    </div>
  );
}
//esta pagina contiene el render de todas las notas
//componente de edit 
//prop ingresar text 
export default Cards;
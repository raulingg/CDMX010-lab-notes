import React, { useState } from 'react';
import './Cards.css';
import { useHistory } from 'react-router';
import duckytwo from '../assets/img/duckytwo.png';
import icon from '../assets/img/icon.png';

function Cards() {
  const historyCards = useHistory();

  const historyViewNotes = () => {
    historyCards.push('/CardEdit')

  }

  
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
            className="buttonCreate"><img src={icon} width="100%" height="0%"></img> </button>
        </div>
        <footer className="imgDuck">
          <img src={duckytwo} width="100%" height="100%"></img>
        </footer>
      </div>
    </div>
    
     
  )
}
//esta pagina contiene el render de todas las notas
//componente de edit 
//prop ingresar text 
export default Cards;
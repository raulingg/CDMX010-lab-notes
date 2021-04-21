import Main from './Main';
import Cards from './Cards';
import React, { useState } from "react";
import CardEdit from './CardEdit';
import ducky from '../assets/img/ducky.png';
const Home = () => {
  return (

    <div className="appHello">

      <Main />
      <div className="titleD">
        <p> UglyDucklingNotes</p>
      </div>

      <Cards />

      
      


      </div>
        )}

export default Home
/*
import ducky from '../assets/img/ducky.png';
<div className="imgDuck">
      <img src={ducky} width="100%" height="100%"></img>
</div> */
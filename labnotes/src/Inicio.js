import React from 'react'
import logo2 from './images/logo2.png'
import tpimage from './images/tpimage.png'
import './inicio.css'
import { useHistory } from 'react-router-dom';

export default function Inicio() {
    const history = useHistory();
    const handleClick = () => history.push('/publish');
    const handleClick2 = () => history.push('/notes');

    return (
        <div className= "intro">
            <div className= "intro_elements">
            <a href = " "> <img src ={logo2} className = "logo2" alt="logo"/></a>
            <a href = " "> <img src ={tpimage} className="tpimage" alt="typingMachine"/></a>
            <div className="black"></div>
            <h1>Welcome to your note app, here you will be able to write, </h1>
            <h2>edit and publish your most important thoughts and experiences.</h2>
            <h3> Go back to  your personal archive and search for your post.</h3>
            </div>
            <div id="buttons">
                <button id="publish" onClick={handleClick}>PUBLISH</button>
                <button id="goToArchive"onClick={handleClick2}>ARCHIVE</button>
            </div>
        </div>
    )
}

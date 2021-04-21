import React from 'react';

import { useHistory } from 'react-router';
import './Main.css';

function Main() {
    const history = useHistory();

    const historyPageIn = () => {
        history.push('/CardEdit')
    }
    return (

        <div className="containerMain">
            <div className="actions">
                <button onClick={historyPageIn}
                    className="buttonIni">Ingresar</button>
            </div>
        </div>






    );
}


export default Main;

/*<div className="logo">
                  {props.title}
                  {props.img}
                </div>

                <div className="search">

                </div> */
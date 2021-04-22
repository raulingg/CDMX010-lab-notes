import React from 'react'
import { useHistory } from 'react-router-dom';
import './buttons.css'

export default function Buttonarchive() {
    const history = useHistory();
    const handleClick = () => history.push('/notes');
    return (
        <div>
         <button className="goToArchive" onClick={handleClick}>ARCHIVE</button>
        </div>
    )
}

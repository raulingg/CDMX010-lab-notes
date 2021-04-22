import React from 'react'
import { useHistory } from 'react-router-dom';
import './buttons.css'

export default function ButtonPublish(props) {
    const history = useHistory();
    const handleClick = () => history.push('/publish');
    return (
        <div>
            <button className="editorialButton" onClick={handleClick}>PUBLISH</button>
        </div>
    )
}

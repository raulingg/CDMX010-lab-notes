import React from 'react'
import { useHistory } from 'react-router-dom';
import './buttons.css'


export default function ButtonHome(props) {
    const history = useHistory();
    const handleClick = () => history.push('/inicio');
    return (
        <div>
            <button className="home" onClick={handleClick}>HOME</button>
        </div>
    )
}

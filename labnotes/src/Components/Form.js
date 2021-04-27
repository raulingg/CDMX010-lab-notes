import React, { useEffect, useState} from 'react'
import logo2 from '../images/logo2.png'
import {db} from '../firebase'
import desk1 from '../images/desk1.jpg'
import './form.css'
import { useLocation } from 'react-router-dom'
import Swal  from 'sweetalert2';

const initialValue = {
    date: "",
    title: "",
    subtitle: "",
    note: "",
};


function useQuery() {
    // ref: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
    return new URLSearchParams(useLocation().search);
}

export default function Form() {
    const [values, setValues] = useState(initialValue);
    // ref custom hooks: https://reactjs.org/docs/hooks-custom.html
    const query = useQuery()
    
    const getNote = async (id) => {
        const doc = await db.doc(`notas/${id}`).get();
        setValues({...values, ...doc.data()});
    };

    useEffect(() => {
        if (query.has('id')) {
            getNote(query.get('id'));   
        }
    }, []);


    const inputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };
   
    const handleSubmit = async e => {
        e.preventDefault();

        const successfulMessage = {
            text: 'Congratulations! Your note has been published.',
            imageUrl:'https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif',
            confirmButtonText: 'Cool!'
        }

        // edit note
        if (query.get('id')){
            await db.doc(`notas/${query.get('id')}`).update(values);
            Swal.fire({...successfulMessage, text: 'Your note has been updated!'});
        } else { // create note
            await db.collection("notas").add(values);
            Swal.fire(successfulMessage);
            setValues({...initialValue});
        }
    }

    return (
        <div className="allForm">
            <div className="background"></div>
            <img src ={desk1} className = "background" alt="logo"/>
            <form className="formTemplate background" onSubmit={handleSubmit}>
                <div className="header">
                    <img src ={logo2} className = "logo" alt="logo"/>
                </div>
                <div className="formInputs">
                    <input className ="form date" type="date" name="date" value={values.date}  onChange= {inputChange} required/>
                    <input className ="form title" type="text" name="title" value={values.title} placeholder="Title" onChange= {inputChange} required/>
                    <input className="form sub" type="text" name="subtitle" value={values.subtitle} placeholder="Subtitle" onChange={inputChange} required/>
                    <textarea className="form note" name="note" value={values.note} onChange={inputChange} placeholder="Note" required/>
                </div>
                <button className="formButton" onSubmit={handleSubmit}>
                    P U B L I S H
                </button>
            </form>
        </div>
    
    )
}

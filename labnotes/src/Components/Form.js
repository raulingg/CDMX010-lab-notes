import React, { useEffect, useState} from 'react'
import logo2 from '../images/logo2.png'
import desk1 from '../images/desk1.jpg'
import './form.css'
const Swal = require('sweetalert2');

export default function Form({ add, note}) {
  
    const initialValue = {
        date: note?.date || "",
        title: note?.title || "",
        subtitle: note?.subtitle || "",
        note: note?.note || "",
    };
    
    const [values, setValues] = useState(initialValue);

    console.log(values)
    const inputChange = (e) => {
        const {name, value} = e.target;
        setValues({...values,[name]:value})
        console.log(name, value);
       
    };

   
    const handleSubmit = e => {
        e.preventDefault();
        add(values);
        setValues({...initialValue});
        Swal.fire({
            text: 'Congratulations! Your note has been published.',
            imageUrl:'https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif',
            confirmButtonText: 'Cool!'
          });

    }

    useEffect(() => {
        if (note){
            setValues(initialValue)
        }
    }, [note])

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

import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import {db} from '../firebase'
import hemeroteca from '../images/hemeroteca.jpg'

import './notes.css'




export default function Notes(props) {    
    const [notas, setNotas] = useState([]);

    const deleteNote = async (id) => {
        if (window.confirm('Are you sure you want to delete this note?')){
           await db.collection('notas').doc(id).delete(id);
        }
    };

    useEffect(()=>{
        // ref: https://firebase.google.com/docs/firestore/query-data/listen#detach_a_listener
        const unsubscribe = db.collection("notas").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setNotas(docs);
        });

        // ref: https://reactjs.org/docs/hooks-reference.html#cleaning-up-an-effect
        return () => unsubscribe()
    }, []);

    return (
                <div className='notesBackground'>   
                <img src ={hemeroteca} className = "hemeroteca" alt="logo"/>   
                <div className="notesMainTemplate"> </div>

            {notas.map(note => {
                return ( 
                    <div key={note.id}> 
                        <div className="notesTemplate">
                            <i className="far fa-trash-alt btn-delete" onClick={()=>deleteNote(note.id)}></i>
                            <Link to={`/publish?id=${note.id}`} ><i className="fas fa-keyboard"></i></Link>
                            <h5 className="date note">{note.date} </h5>
                            <h5 className="title note">{note.title} </h5>
                            <h5 className="sub note">{note.subtitle} </h5>
                            <h5 className="notes note">{note.note} </h5>
                        </div>
                        
                    </div>
                
            
                ) 
                
                        
            })}  
   
            </div>
         
    )
}


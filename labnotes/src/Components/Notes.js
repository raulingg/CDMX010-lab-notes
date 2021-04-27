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
           console.log(id);
        }
    };

    
    const getDatos =  () => {
        db.collection("notas").onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setNotas(docs);
        console.log(docs);
      });
    };

    useEffect(()=>{
        getDatos();   

    }, []);

    

    return (
                <div className='notesBackground'>   
                <img src ={hemeroteca} className = "hemeroteca" alt="logo"/>   
                <div className="notesMainTemplate"> </div>

            {notas.map(notas => {
                
                return ( 
                    <div > 
                        <div className="notesTemplate">
                            <i className="far fa-trash-alt btn-delete" key={notas.id} onClick={()=>deleteNote(notas.id)}></i>
                            <Link to={`/publish?id=${notas.id}`} ><i className="fas fa-keyboard"></i></Link>
                            <h5 className="date note">{notas.date} </h5>
                            <h5 className="title note">{notas.title} </h5>
                            <h5 className="sub note">{notas.subtitle} </h5>
                            <h5 className="notes note">{notas.note} </h5>
                        </div>
                        
                    </div>
                
            
                ) 
                
                        
            })}  
   
            </div>
         
    )
}


import React, {useEffect, useState} from 'react'
import {db} from '../firebase'
import hemeroteca from '../images/hemeroteca.jpg'
import Slider from '../Components/Slider'
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
            <Slider>
            {notas.map(notas => {
                
                return ( 
                    <div > 
                        <div className="notesTemplate">
                            <i class="far fa-trash-alt btn-delete" key={notas.id} onClick={()=>deleteNote(notas.id)}></i>
                            <i class="fas fa-keyboard" key={notas.id} onClick={()=>(notas.id)}></i>
                            <h5 className="date note">{notas.date} </h5>
                            <h5 className="title note">{notas.title} </h5>
                            <h5 className="sub note">{notas.subtitle} </h5>
                            <h5 className="notes note">{notas.note} </h5>
                        </div>
                        
                    </div>
                
            
                ) 
                
                        
            })}  
            </Slider>
            </div>
         
    )
}


import React, { useEffect, useState } from 'react'
import {db} from '../firebase'
import Form from '../Components/Form'
import ButtonHome from '../Components/ButtonHome'
import ButtonArchive from '../Components/ButtonArchive'
import {useLocation} from "react-router-dom"

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Add() {
    const query = useQuery()
    const [note, setNote] = useState([]);
    const [id, currentId] = useState("");
    

    const getNote = async (id) => {
        const doc = await db.doc(`notas/${id}`).get();
        setNote(doc.data());
        console.log(doc.data)
    };

    useEffect(()=>{
        if (query.get('id')) {
            console.log(query.get('id'))
            getNote(query.get('id'));   
        }
    }, []);


    const addTask = async (datos) => {
        if (id === " "){
            await db.collection("notas").doc('id').set(datos);

        }else{
            await db.collection("notas").doc('id').update(datos);
            currentId(" ");

        }
      
    }

    return (
      <div>
          <Form add={addTask} note={note} />
          <ButtonHome/>
          <ButtonArchive/>
      </div>
    )
}

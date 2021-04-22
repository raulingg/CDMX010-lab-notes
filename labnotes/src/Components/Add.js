import React from 'react'
import {db} from '../firebase'
import Form from '../Components/Form'



export default function Add() {
    const addTask = async (datos) => {
        await db.collection("notas").doc().set(datos);
     }

    return (
      <div>
          <Form add={addTask}/>
      </div>
    )
}

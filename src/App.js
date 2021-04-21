import "./App.css";
import React from "react";
import { Navbar } from "./Components/Content/Navbar";
import {NotesList} from "./Components/Content/NotesList"

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="impNotes">
        <NotesList />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from "react";
import CardEdit from './pages/CardEdit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Cards from './pages/Cards';
function App() {

  return (
    <Router>
      <div className="container-btns">
        <div className="btn-group">
        <Link to="/CardEdit" className="btn-dark">
          Ingresar
        </Link>
        <Link to="/Home" className="btn-dark">
          Home
        </Link>







        </div>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/CardEdit">
            <CardEdit />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );

}



//const [renderCards, editCard] = useState(false);

//crear const para mostrar pantalla con todas las card
// crear un const para mostrar la pantalla para editar card



export default App;
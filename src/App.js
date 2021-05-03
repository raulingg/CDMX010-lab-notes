import './App.css';
import React  from "react";
import CardEdit from './pages/CardEdit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home'
import Cards from './pages/Cards';
function App() {

  return (
    <Router>
      <div className="container-btns">
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
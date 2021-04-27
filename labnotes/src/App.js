import Notes from './Components/Notes';
import Add from './Components/Add';
import ButtonHome from './Components/ButtonHome';
import ButtonPublish from './Components/ButtonPublish';
import Inicio from './Inicio';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/inicio">
            <Inicio/>
          </Route>
          <Route path="/publish">
            <Add/>
          </Route>
          <Route path="/notes" >
            <Notes component={Add}/>
            <ButtonPublish/>
            <ButtonHome/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

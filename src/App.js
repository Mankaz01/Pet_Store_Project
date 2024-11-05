import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pets from './Pets';
import AddPet from './AddPet';
import UpdatePet from './UpdatePet';
import DeletePet from './DeletePet';
import './App.css';
import petLogo from './petLogo.jpeg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={petLogo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pets" exact component={Pets} />
          <Route path="/pets/create" component={AddPet} />
          <Route path="/pets/update" component={UpdatePet} />
          <Route path="/pets/delete" component={DeletePet} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

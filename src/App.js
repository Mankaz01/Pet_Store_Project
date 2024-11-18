import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Pets from "./Pets";
import Add from "./Add";
import Update from "./Update";
import Delete from "./Delete";
import View from "./View";
import "./App.css";
import petLogo from "../src/assets/Images/Logo.webp";

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
          <Route path="/pets/create" component={Add} />
          <Route path="/pets/update" component={Update} />
          <Route path="/pets/delete" component={Delete} />
          <Route path="/pets/view" component={View} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

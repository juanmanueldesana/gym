import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login"
import './App.css';

export default function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>        
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}


import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login"
import Clases from "./components/Clases/Clases"
import Staff from "./components/Staff/Staff"
import Perfil from "./components/Perfil/Perfil"
import Rutina from "./components/Rutina/Rutina"
import Separador from "./components/Separador/Separador";
import Footer from "./components/Footer/Footer"
import WapButton from "./components/WapButton/WapButton"
import AuthRoute from './components/AuthRoute';
import Registro from "./components/Registro/Registro"
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
        <Route path="/Clases">
          <Clases />
        </Route>
        <Route path="/Staff">
          <Staff />
        </Route>
        <Route path="/Comunidad">
          <Staff />
        </Route>
        <Route path="/Perfil">
        <AuthRoute>
          <Perfil />
        </AuthRoute>
        </Route>
        <Route path="/Rutina">
        <AuthRoute>
          <Rutina />
          </AuthRoute>
        </Route>
        <Route path="/Registro">
        <AuthRoute>
          <Registro/>
        </AuthRoute>
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      <WapButton/>
      <Separador/>
      <Footer />
    </div>
    </Router>
  );
}


import React from 'react';
import Navbar from "./components/NavBar/Navbar";
import Landing from "./components/Landing/Landing";
import Carousel from "./components/Carousel/Carousel"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Landing />
    </div>
  );
}

export default App;
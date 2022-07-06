import React from 'react';
import './App.css';
import Dinner from './Dinner.js';
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Let`s Play the GAME............</h1>
        <Dinner DishName="Biryani" SweetDish="Kheer"/>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Dinner from './Dinner.js';
import breakfast from './breakfast';
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Let`s Play the GAME............</h1>
        <br />

        <Dinner DishName="Biryani" SweetDish="Kheer"/>
        <br />
        
        <breakfast />
        <br />
      </header>
    </div>
  );
}

export default App;

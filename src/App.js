import React from 'react';
import './App.css';
import Dinner from './Dinner.js';
import Breakfast from './breakfast';
function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Let`s Play the GAME............</h1>
        <br />

        <Dinner DishName="Biryani" SweetDish="Kheer"/>
        <br />
        
        <Breakfast />
        <br />
      </header>
    </div>
  );
}

export default App;

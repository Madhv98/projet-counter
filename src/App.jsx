import React from 'react';
import Counter from './counter';
import './App.css'

function App() {
    return (
      <div className="App">
        <Counter count={0} />
        <Counter count={5} /> 
      </div>
    );
  }


export default App

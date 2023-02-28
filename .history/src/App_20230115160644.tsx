import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todolist />
    </div>
  );
}

function Todolist() {
  return(<div>
    <h3>what to learn</h3>
    <div>
      <input />
      <button>+</button>
    </div>
    <ul>
      <li><input type='checkbox' checked={true} /><span>CSS&HTML</span></li>
      <li><input type='checkbox' checked={true} /><span>JS</span></li>
      <li><input type='checkbox' checked={false} /><span>REACT</span></li>
    </ul>
  </div>)
}

export default App;

import React from 'react';
import './App.css';
import Form from './Form';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Form/>
        <div className='link'>
        <Link to="/users" >Click Here!</Link>
        </div>
    </div>
  );
}

export default App;


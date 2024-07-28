import React from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from "./components/layout/date-picker/lib/DatePicker";

function App() {
  return (
    <div className="App">

        <h1>Test</h1>
      <DatePicker onChange={()=>{return new Date()}} value={new Date()} />
    </div>
  );
}

export default App;

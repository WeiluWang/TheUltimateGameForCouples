import logo from './logo.svg';
import './App.css';
import Problems from './Problems';
import { useState } from "react";


function App() {
const uploadImage = () => {}

  return (
    <div className="App">
      <input type="file"></input>
      <button onClick={uploadImage}>Upload Image</button>
      <Problems />
    </div>
  );
}

export default App;

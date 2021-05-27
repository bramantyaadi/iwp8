import logo from './logo.svg';
import React , {useRef, useState} from 'react';
import Component from './Component/Component';
import './App.css';

function App() {
  const inputRef = useRef();
  const [show , setShow] = useState(true);

  return (
    <div className="App">
      <br></br>
        <input type="text" ref={inputRef}></input><br></br>
        <input type="text"></input><br></br>
        <input type="text"></input><br></br>
        <button onClick={() => inputRef.current.focus()}>set Fokus</button>

        <button onClick={() => setShow(!show)}>Toggle Tampil / Tidak</button>
        <h1>Hilangkan component</h1>
        {show && <Component/>}
    </div>
  );
}

export default App;

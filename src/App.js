//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//let name= "udit";
function App() {
  const [mode, setMode] = useState('light');//whether darkmode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {<Navbar title="Text Analyzer" aT="About Us" mode={mode} toggleMode={toggleMode} />}

      <div className="container my-3">
        {<TextForm heading="Enter the text here:" mode={mode} />}
        {/*<About />*/}
      </div>

    </>
  );
}

export default App;


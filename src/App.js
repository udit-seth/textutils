//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link --because it is not used in app.js 
} from "react-router-dom";


//let name= "udit";
function App() {
  const [mode, setMode] = useState('light');//whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  /*const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
  }*/


  const toggleMode = (/*cls*/) => {
    //console.log(cls);
    //removeBodyClasses();
    //document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      //document.title = "TextAnalyzer - Dark Mode";
      /*setInterval(() => {
        document.title = "TextAnalyzer is the best app";
      }, 1500);
      setInterval(() => {
        document.title = "Install TextAnalyzer app now";
      }, 2000);*/
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disabled", "danger");
      //document.title = "TextAnalyzer - Light Mode";
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  //because every thing is packed inside a router go to website :- react router dom
  return (
    <>
      <Router>
        {<Navbar title="TextAnalyzer" aT="About Us" mode={mode} toggleMode={toggleMode} />}
        <Alert exact alert={alert} />

        <div className="container my-3">

          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm heading="Try TextAnalyzer - Word counter, Character counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>

          {/*<About />*/}

        </div>
      </Router>

    </>
  );
}
//exact helps in complete matching
//eg: /users --> component1
//    /users/home -->--> component2 but it will render component 1 because react does partial matching when exact is not used

export default App;


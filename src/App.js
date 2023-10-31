import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React from 'react';
import Alert from './components/Alert';

 import TextForm from './components/TextForm';

 import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
        setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
   <>
  
  <Alert alert={alert}/>
  <div className="container my-3">
 <Router>
   <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
       <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
           
          </Route>
       </Routes>
  </Router>
  {/* <About/> */}
  </div>
   </> 
  );
}

export default App;

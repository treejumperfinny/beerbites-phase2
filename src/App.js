import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SplashBev from "./SplashBev";
import NavHead from "./NavHead";


function App() {
  return (
    <div className="App">
      <NavHead />
      <SplashBev />    
    </div>
  );
}

export default App;

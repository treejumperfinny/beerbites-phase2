import React from 'react';
// import MainContainer from './MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function SplashBev() {
  return (
    <>
      <br />
      <div className="welcome-card">
        <div>
        <img src={require("./testing-img/welcomebanner.png")} alt="placeholder" className="bbimg" />
            <h1 className="welcome">Welcome to beerbites!</h1> 
            <p>
            Jump on in to discover to check out a daily beer and food reccomendation.
            </p>
            <p>Maybe you to have a new tasty beer with your lunch or dinner? Or breakfast? No judgement here!
            </p>
            <p>
            Looking for a spot to check out to finally enjoy that Pilsner you've been thinking about?</p>
            <p>
             Or maybe you want to catalog all of the best and roast all of the worst drinks you've had?   
            </p>
            <p>
            Well, you are in the right place. Take a second to look around and plan out all of the delicous drinks that lay ahead.
            </p>
        </div>
        {/* <MainContainer /> */}
    </div>
    
    </>
  );
}

export default SplashBev;

import React from 'react';
// import MainContainer from './MainContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function SplashBev() {
    return <>
    <div className="welcome-card">
        <div>
        <img src={require("./testing-img/bb-icon.png")} alt="placeholder" className="bbimg" />
            <h1>Welcome to beerbites!</h1> <p>Want to have a new tasty beer with your lunch or dinner? Looking for a spot to check out to finally enjoy that Pilsner you've been thinking about? Well, you are in the right place. Take a second to look around and plan out all of the delicous drinks that lay ahead.</p>
        </div>
        {/* <MainContainer /> */}
    </div>
    
    </>
}

export default SplashBev;
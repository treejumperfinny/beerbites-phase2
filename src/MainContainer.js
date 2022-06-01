import React from 'react';
import RandomBev from './RandomBev';
import TastingNotes from './TastingNotes';

function MainContainer() {
    return <>
    <div className="container">
        <RandomBev />
        <TastingNotes />
    </div>
    </>
}

export default MainContainer;
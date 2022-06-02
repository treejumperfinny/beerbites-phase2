import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SplashBev from './SplashBev'
import NavHead from './NavHead'
import LocalPubs from './LocalPubs'
import CocktailCorner from './CocktailCorner'
import RandomBev from './RandomBev'
import TastingNotes from './TastingNotes'

function App() {
  return (
    <div className="App">
      <NavHead />
      <SplashBev />
      <RandomBev />
      <TastingNotes />
      <LocalPubs />
      <CocktailCorner />
    </div>
  )
}

export default App

import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SplashBev from './SplashBev'
import NavHead from './NavHead'
import LocalPubs from './LocalPubs'
import CocktailCorner from './CocktailCorner'
import RandomBev from './RandomBev'
import { Switch, Route, Outlet } from 'react-router-dom'
import TastingNotes from './TastingNotes'

function App() {
  return (
    <div className="App">
      <NavHead />
      <Outlet />
    </div>
  )
}

export default App

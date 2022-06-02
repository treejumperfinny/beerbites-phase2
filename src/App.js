import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SplashBev from './SplashBev'
import NavHead from './NavHead'
import LocalPubs from './LocalPubs'
import CocktailCorner from './CocktailCorner'
import { Switch, Route } from 'react-router-dom'
import TastingNotes from './TastingNotes'

function App() {
  return (
    <div className="App">
      <NavHead />
      <Switch>
        <Route exact path="/">
          <SplashBev />
        </Route>

        <Route path="/tasting-notes">
          <TastingNotes />
        </Route>

        <Route path="/pubs">
          <LocalPubs />
        </Route>

        <Route path="/cocktails">
          <CocktailCorner />
        </Route>
      </Switch>
    </div>
  )
}

export default App

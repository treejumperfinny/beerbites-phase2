import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SplashBev from './SplashBev'
import NavHead from './NavHead'
import LocalPubs from './LocalPubs'
import CocktailCorner from './CocktailCorner'
<<<<<<< HEAD
import RandomBev from './RandomBev'
import { Switch, Route, Outlet } from 'react-router-dom'
=======
>>>>>>> main
import TastingNotes from './TastingNotes'
import SearchBrews from './SearchBrews'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavHead />
<<<<<<< HEAD
      <Outlet />
=======
      <Switch>
        <Route exact path="/">
          <SplashBev />
        </Route>

        <Route path="/search-brews">
          <SearchBrews />
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
>>>>>>> main
    </div>
  )
}

export default App

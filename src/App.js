import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavHead from './NavHead'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavHead />
      <Outlet />
    </div>
  )
}

export default App

import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Header from './components/Header.jsx'
import Cards from './components/Cards.jsx'
import Rodape from './components/Rodape.jsx'
import './App.css'
import './assets/js/home.js'

function App() {
  return (
    <>
        <NavBar></NavBar>
        <Header></Header>
        <Cards></Cards>
        <Rodape></Rodape>
    </>
  )
}

export default App

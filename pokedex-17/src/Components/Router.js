import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Pokedex from '../Pages/Pokedex'
import DetalhesPokemon from '../Pages/DetalhesPokemon'

function Router17() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path="pokedex" element={<Pokedex/>} />
      <Route path="detalhes" element={<DetalhesPokemon/>} />      
    </Routes>
  </BrowserRouter></div>
    
  )
}

export default Router17
import React from 'react'
import {useNavigate} from 'react-router-dom'

function DetalhesPokemon() {
    const navigate = useNavigate()

    const acessarHome = () => {
        navigate("/")
      }
    
      const acessarPokedex= () => {
        navigate("pokedex")
      }
  
    return (
    <div>
        <h1>Pokedex 17 Pagina</h1>
        <button onClick={acessarHome}>Ir para Home</button>
       <button onClick={acessarPokedex}>Ir para Pokedex</button>
   </div>
  )
}

export default DetalhesPokemon
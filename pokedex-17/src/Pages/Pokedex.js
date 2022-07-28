import React from 'react'
import {useNavigate} from 'react-router-dom'

function Pokedex() {
    const navigate = useNavigate()

    const acessarHome = () => {
        navigate("/")
      }
    
      const acessarDetalhes= () => {
        navigate("pokedex")
      }
  
    return (
    <div>
        <h1>Pokedex 17 Pagina</h1>
       <button onClick={acessarHome}>Ir para Home</button>
       <button onClick={acessarDetalhes}>Ir para Detalhes</button>
    </div>
  )
}

export default Pokedex
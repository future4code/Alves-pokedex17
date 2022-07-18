import React from 'react'
import {useNavigate} from 'react-router-dom'


function Home() {
    const navigate = useNavigate()

    const acessarDetalhes = () => {
        navigate("detalhes")
      }
    
      const acessarPokedex= () => {
        navigate("pokedex")
      }
  
    return (
    <div>
       <h2>Home</h2> 
       <button onClick={acessarDetalhes}>Ir para Detalhes</button>
       <button onClick={acessarPokedex}>Ir para Pokedex</button>
    </div>
  )
}

export default Home
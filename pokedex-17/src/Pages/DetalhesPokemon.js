import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const CardDetalhes = styled.div` 
  border: 2px solid black
`

function DetalhesPokemon() {
    const navigate = useNavigate()
    const [details, setDetails] = useState({})


   useEffect(() => {
      const url = `https://pokeapi.co/api/v2/pokemon/35`
      axios.get(url)
      .then((res) => { 
        setDetails(res.data)
      })
      .catch((err) => {
        alert(err.response)
      })
    }, [])

    const pokemonName = details.abilities    

    const seePokemon = pokemonName?.map((element) => {
      return <CardDetalhes key={element.id}>{element.ability.name}</CardDetalhes>
    })
        

    const acessarHome = () => {
        navigate("/")
      }
    
      const acessarPokedex= () => {
        navigate("pokedex")
      }
  
    return (
      <div>   
        <h1>Detalhes do Pokémon</h1> 
        {seePokemon}            
        <button onClick={acessarHome}>Ir para Home</button>
       <button onClick={acessarPokedex}>Ir para Pokedex</button>
   </div>
  )
}

export default DetalhesPokemon
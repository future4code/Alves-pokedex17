import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import {CardActionArea} from '@mui/material'
import styled from 'styled-components'

const MainDiv = styled.div`  
  display: flex;
  margin-left: 35vw;
  max-width: 20%;
`

const StatsDiv = styled.div`
  border: 2px solid red;
  display: flex;
  justify-content: space-evenly; 
`

const InformacaoP = styled.p`  
  color: red;
  font-size: medium;
  font-weight: bold;
  text-align: center;     
`

function DetalhesPokemon() {
  const navigate = useNavigate()
  const [details, setDetails] = useState({})
  const [pokeId, setPokeId] = useState("")

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/35`
    axios.get(url)
      .then((res) => {
        setDetails(res.data)
        setPokeId(details.id)
      })
      .catch((err) => {
        alert(err.response)
      })
  }, []) 

  const pokemonName = details.name.toUpperCase()
  
  const pokeStats = details.stats  

  const pokemonAbilities = details.abilities  

  const seePokemonAbilities = pokemonAbilities?.map((element) => {
    return <StatsDiv key={element.id}>      
      <ul>
        <li>{element.ability.name.toUpperCase()}</li>
        </ul>
    </StatsDiv>
  })
  
  const seePokeStats = pokeStats?.map((element) => {
    return <div key={element.id}>
      <StatsDiv>
        <InformacaoP>{element.stat.name.toUpperCase()}</InformacaoP>
        <InformacaoP>{element.base_stat}</InformacaoP>         
        </StatsDiv>        
    </div>
  })
  
  const pokePhoto = details.sprites

  // const verifyPokemon = () => {
  //   if(pokeId === /* Id vindo do Params*/){
  //     return <button>Remover da Pokedex</button>
  //   } else 
  //     return <button>Adicionar a Pokedex</button>
  // }

  return (
    <MainDiv>
          <Card 
          sx={{ 
            maxWidth: 345,
            padding: 0,             
         }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"          
          image={pokePhoto.front_default}
          alt="Front Clefairy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h4>{pokemonName}</h4>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <h4>Informações Básicas:</h4>
          {seePokeStats}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <h4>Habilidades</h4>
          {seePokemonAbilities}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Adicionar / Remover da Pokedex
        </Button>
      </CardActions>
    </Card>
    </MainDiv>
  )
}

export default DetalhesPokemon

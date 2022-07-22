import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import CatchEmAll from '../Images/CatchEmAll.png'

const MainDiv = styled.div`  
  width: 100%;
  height: 100%;
`
const CardsDiv = styled.div`
  border: 2px solid red;
`
const PhotoDiv = styled.div`
  display: flex;  
  flex-direction: inline;
  /* margin-left: 30%;   */
`

const StatsDiv = styled.div`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between; 
`
const InformacaoDiv = styled.div`  
  color: #F5D41B;
  font-size: medium;
  font-weight: bold;
  text-align: start;
     `

function DetalhesPokemon() {
  const navigate = useNavigate()
  const [details, setDetails] = useState({})

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/2`
    axios.get(url)
      .then((res) => {
        setDetails(res.data)
      })
      .catch((err) => {
        alert(err.response)
      })
  }, [])

  const finalDetails = details
  const pokeName = finalDetails.name
  const pokeId = finalDetails.id
  const pokeType = finalDetails.types
  const pokeStats = finalDetails.stats
  const pokeAbilities = finalDetails.abilities
  const pokeXperience = finalDetails.base_experience
  const pokeWeight = finalDetails.weight

  const seePokeType = pokeType?.map((element) => {
    return <div>
      <p>{element.type.name}</p>
    </div>
  })

  const seePokeAbilities = pokeAbilities?.map((element) => {
    return <StatsDiv key={element.id}>
      <StatsDiv>
        <InformacaoDiv>{element.ability.name}</InformacaoDiv>
      </StatsDiv>
    </StatsDiv>
  })

  const seePokeStats = pokeStats?.map((element) => {
    return <div key={element.id}>
      <StatsDiv>
        <InformacaoDiv>{element.stat.name.toUpperCase()}</InformacaoDiv>
        <InformacaoDiv>{element.base_stat}</InformacaoDiv>
      </StatsDiv>
    </div>
  })

  const pokePhoto = details.sprites
  console.log("FOTOS = ", pokePhoto)

  return (
    <MainDiv>
      <Grid container spacing={5}>
        <Grid item xs={3} />
        <Grid item xs={3}>
          <CardsDiv>
            <Card sx={{ maxWidth: 345, background: "#F7534A", color: "#F5D41B" }}>
              <CardActionArea>
                <PhotoDiv>
                  <CardMedia
                    component="img"
                    height="150"
                    image={pokePhoto?.front_default}
                    alt="imagem de frente do pokemon"
                  />
                  <CardMedia
                    component="img"
                    height="150"
                    image={pokePhoto?.back_default}
                    alt="imagem de costas do pokemon"
                  />
                </PhotoDiv>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h4>NAME: {pokeName}</h4>
                    <h6>INITIAL XP: {pokeXperience}</h6>
                  </Typography>
                  <Typography variant="body2" color="#F5D41B" fontSize="large">
                    <div>TYPE(S):{seePokeType}</div>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" variant='contained'>
                  Add to Pokedex
                </Button>
                <Button size="small" color="primary" variant='contained'>
                  Remove from Pokedex
                </Button>
              </CardActions>
            </Card>
          </CardsDiv>
        </Grid>
        <Grid item xs={3}>
          <CardsDiv>
            <Card sx={{ maxWidth: 600, background: "#F7534A", color: "#F5D41B" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <div>
                      <h3>BASIC STATS</h3>
                      {seePokeStats}
                    </div>
                  </Typography>
                  <Typography variant="body2" color="#F5D41B" fontSize="large">
                    <div>
                      <h3>ABILITIES</h3>
                      {seePokeAbilities}
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={CatchEmAll}
                alt="green iguana"
              />
            </Card>
          </CardsDiv>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </MainDiv>
  )
}

export default DetalhesPokemon
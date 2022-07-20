import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from "@mui/material";
import Typography from '@mui/material/Typography';
import useRequestData from '../hooks/useRequestData'
import BASE_URL from "../constants/BASE_URL"





const PokemonCard = (props) => {

  const pokemonName = props.pokemonName
  const pokemonData = useRequestData(`${BASE_URL}${pokemonName}`)[0];
  let pokemonPhoto  = pokemonData.sprites.other.home.front_default

 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={`${pokemonName}`}
        height="140"
        image={pokemonPhoto}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.pokemon.name}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Link to={`/detalhes/${pokemonName}`}>
          <Button size="small" >Detalhes</Button>
        </Link>
        <Button size="small" >Captura</Button>
        {/* disable = {OnPokedex()} */}
        {/* onClick = add */}
      </CardActions>
    </Card>
  )
}

export default PokemonCard
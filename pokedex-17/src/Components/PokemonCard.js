import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';





const PokemonCard = (props) => {

  const [listPokemon, setListPokemon] = useState([]);
	const [listDetailsPokemon, setListDetailsPokemon] = useState({});
  const navigate = useNavigate()

  

	useEffect(() => {
		listPokemon.forEach((pokemon) => {
			axios
				.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
				.then((response) => {
					setListDetailsPokemon(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}, [listPokemon]);

  const setPokedex =() => {

    // essa função deve colocar o selecionado na pokedex//
  }


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={`${props.pokemon.name}`}
        height="140"
        image={listDetailsPokemon.sprites?.front_default}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.pokemon.name}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => goToDetails (navigate, listDetailsPokemon.name)} >Detalhes</Button>
        <Button size="small"onClick={() => setPokedex()} >Captura</Button>
      </CardActions>
    </Card>
  )
}

export default PokemonCard
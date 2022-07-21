import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../Components/Header'
import PokemonCard from '../Components/PokemonCard'




export default function Home() {
  const [listPokemons, setListPokemons] = useState([]);
	const [detailsPokemons, setDetailsPokemons] = useState([]);

  useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
			.then((response) => {
				setListPokemons(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		const data = [];

		listPokemons.forEach((pokemon) => {
			axios
				.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
				.then((response) => {
					data.push(response.data);
					if (data.length === 20) {
						setDetailsPokemons(data);
						console.log(data);
					}
				})
				.catch((error) => {
					console.log(error);
				});
		});
	}, [listPokemons]);


  // const renderPokemonList = detailsPokemons?.map((pokemon) =>  {
  //     return <PokemonCard {} />;
  //   });

  return (
    <div>
 
        <Header />
          {/* <Box m={2}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 2, md: 12 }}
            >
              {renderPokemonList}

            </Grid> 
          </Box>  */}
        <PokemonCard />

    </div>
  
   
  )
}


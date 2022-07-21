import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid,Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const PokemonCard = (props) => {
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

	return (
		<Grid
			container
			spacing={{ xs: 2, md: 3 }}
			columns={{ xs: 4, sm: 2, md: 12 }}
		>
			{detailsPokemons?.map((pokemon) => (
				<Grid item xs={2} sm={4} md={4} key={pokemon.id}>
					<Card sx={{ maxWidth: 300, margin: "0 auto", padding: "0.1em" }} variant="outlined">
						<CardMedia
							component="img"
							sx={{ mapadding: "1em 1em 0 1em", width: 250, height: 200, objectFit: "contain" }}
							image={pokemon.sprites.other.dream_world.front_default}
							alt="pokemon"
							loading="lazy"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								textTransform="capitalize"
							>
								{pokemon.name} - {pokemon.id}
							</Typography>
						</CardContent>
						<CardActions>
							<Link to={`/detalhes/${pokemon.name}`}>
							<Button size="small">Detalhes</Button>
							</Link>
							<Button size="small">Capturar</Button>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default PokemonCard;
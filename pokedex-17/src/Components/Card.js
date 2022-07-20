import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Card() {
	const [listPokemon, setListPokemon] = useState([]);
	const [listDetailsPokemon, setListDetailsPokemon] = useState({});

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
			.then((response) => {
				setListPokemon(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

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

	return <div>Card</div>;
}

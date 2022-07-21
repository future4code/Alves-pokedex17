

import { Grid } from "@mui/material";
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
				<Grid item xs={2} sm={4} md={2} key={pokemon.id}>
					<Card sx={{ maxWidth: 300 }} variant="outlined">
						<CardMedia
							component="img"
							sx={{ width: 250, height: 200 }}
							image={pokemon.sprites.other.dream_world.front_default}
							alt="green iguana"
							loading="lazy"
						/>
						<CardContent>
							<Typography
								gutterBottom
								variant="h5"
								component="div"
								textTransform="capitalize"
							>
								{pokemon.name} - #0{pokemon.id}
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Detalhes</Button>
							<Button size="small">Capturar</Button>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default PokemonCard;

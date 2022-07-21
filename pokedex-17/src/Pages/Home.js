import React from 'react'
// import {useNavigate} from 'react-router-dom'
import useRequestData from '../hooks/useRequestData'
import { BASE_URL } from '../constants/BASE_URL';
import PokemonCard from '../Components/PokemonCard'
import { Grid, Box } from '@mui/material';



export default function Home() {
    // const navigate = useNavigate()

    // const acessarDetalhes = () => {
    //     navigate("detalhes")
    //   }
    
    //   const acessarPokedex= () => {
    //     navigate("pokedex")
    //   }
      

      // const Item = styled( PokemonCard )(({ theme }) => ({
      //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      //   ...theme.typography.body2,
      //   padding: theme.spacing(2),
      //   textAlign: 'center',
      //   color: theme.palette.text.secondary,
      // }));

      
    

        const pokemonList= useRequestData (`${BASE_URL}?limit=20&offset`);
        console.log(pokemonList)
        const renderPokemonList =  pokemonList && pokemonList.results.map((p) => {
          return <PokemonCard key={p.name} pokemonName={p.name} />;
        });

        return (
            <Box sx={{ flexGrow: 1 , mt: 10, ml: 4 }}>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 6, sm: 8, md: 12 }}>
              {renderPokemonList}
            </Grid>
         
          </Box>
        );
      
      
        
}


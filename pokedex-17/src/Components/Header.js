import React from 'react'
import { AppBar, Button, Grid, Link } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import PokeLogo from '../assets/Logo-Pokebola-Pokémon-PNG.png'



function Header() {
  return (
    <div>
        <AppBar position='fixed' color='primary'>
            <Toolbar>
                <Grid container>
                    <Grid item xs={2}>
                        <Typography variant="h4" color='secondary'>
                            PokedeX 
                        </Typography>
                    </Grid>
                    <Grid item  xs={5}>
                    <img
                            src={PokeLogo}
                            alt="Pokebola"
                            height={40}
                        />
                    </Grid>
                         <Grid item xs={1}/>
                         <Grid item xs={3}>
                            <Box display="flex">
                                <Link to={`/pokedex`}>
                                    <Button
                                     sx={{marginLeft: 'auto' }}
                                     variant="contained">Pokedex
                                    </Button>
                                </Link>
                            </Box>
                         </Grid>
                                       
                
                </Grid>
                                   
            </Toolbar>
        </AppBar>
    </div>

  )
}

export default Header
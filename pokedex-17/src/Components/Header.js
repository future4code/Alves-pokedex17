import React from 'react'
import { AppBar, Button, Grid } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'



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
                    <Grid item  xs={6}>
                    </Grid>
                         <Grid item xs={1}/>
                         <Grid item xs={3}>
                            <Box display="flex">
                                <Button sx={{marginLeft: 'auto'}} variant="contained">Detalhes</Button>
                                <Button sx={{marginLeft: 2 }}variant="contained">Pokedex</Button>
                            </Box>
                         </Grid>
                                       
                
                </Grid>
                                   
            </Toolbar>
        </AppBar>
    </div>

  )
}

export default Header
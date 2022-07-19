import { createTheme } from '@mui/material';



export default createTheme({
    palette:{
        common:{
            red: "#FB1B1B" ,
            black : "#000000"
        },
        primary: {
            main: "#FB1B1B" 
        },
        secondary:{
            main: "#000000"

        }
    },
    typography: {
        fontFamily: "'Work Sans', sans-serif",
        fontSize: 14,
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700, // Roboto Condensed
      },

})
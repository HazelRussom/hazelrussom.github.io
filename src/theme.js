import { createTheme, responsiveFontSizes } from '@mui/material'

let theme = createTheme({
  palette: {
    primary: {
      main: '#EDF2F4',
    },
    secondary: {
      main: '#EF233C',
    }
  }
});

theme = responsiveFontSizes(theme);

export default theme;
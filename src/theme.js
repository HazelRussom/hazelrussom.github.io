import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
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
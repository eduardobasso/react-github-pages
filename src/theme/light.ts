import { ThemeOptions } from '@mui/material/styles';

const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#61dafb',
      light: '#9affff',
      dark: '#10a8c8',
      contrastText: '#282c34'
    },
    text: {
      primary: '#fff'
    },
    background: {
      default: '#282c34'
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'sans-serif'
    ].join(',')
  }
};

export default lightTheme;
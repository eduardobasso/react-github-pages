import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';

import lightTheme from '../theme/light';

const theme = createTheme(lightTheme);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}
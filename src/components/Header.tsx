import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import logo from '../images/logo.svg';

const StyledHeader = styled('header')(({ theme: { palette } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: palette.background.default,
  color: palette.text.primary,
  textAlign: 'center'
}));
const StyledLogo = styled('img')(() => ({
  height: '40vmin',
  pointerEvents: 'none'
}));

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="React logo" />
      <Typography component="p" variant="h4" mb={4}>React App + GitHubPages</Typography>
      <Button variant="contained" size="large" href="https://reactjs.org" target="_blank">Learn React</Button>
    </StyledHeader>
  );
}
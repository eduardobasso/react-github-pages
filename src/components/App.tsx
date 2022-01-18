import styled from 'styled-components'

import logo from '../assets/img/logo.svg'

const StyledApp = styled.div`
  text-align: center;
`
const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
`
const StyledLink = styled.a`
  color: #61dafb;
`

export default function App() {
  return (
    <StyledApp>
      <StyledHeader>
        <StyledLogo src={logo} className="App-logo" alt="logo" />
        <p>React App + GitHubPages</p>
        <StyledLink href="https://reactjs.org" target="_blank">Learn React</StyledLink>
      </StyledHeader>
    </StyledApp>
  );
}
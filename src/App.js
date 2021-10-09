import './App.css';
import { Container } from '@mui/material';
import AboutMe from "./AboutMe";
import Header from "./Header";
import Links from "./Links";

function App() {
  return (
    <Container>
      <Header/>
      
      <Container maxWidth="sm" align="center">
        <AboutMe/>
        <Links/>
      </Container>
    </Container>
  );
}

export default App;

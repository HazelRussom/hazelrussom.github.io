import './App.css';
import { Container } from '@mui/material';
import LandingPage from "./LandingPage";
import Header from "./Header";

function App() {
  return (
    <Container>
      <Header/>
      <LandingPage/>
    </Container>
  );
}

export default App;

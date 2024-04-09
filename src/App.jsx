import './App.css';
import { Container } from '@mui/material';
import LandingPage from "./LandingPage";
import Header from "./Header";
import { Suspense } from 'react';
import BackgroundElements from './BackgroundElements';

function App() {
  return (
    <Suspense fallback="...is loading">
      <Container>
        <Header/>
        <LandingPage/>
        <BackgroundElements/>
    </Container>
  </Suspense>
  );
}

export default App;

import './App.css';
import { Container } from '@mui/material';
import LandingPage from "./LandingPage";
import Header from "./Header";
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback="...is loading">
    <Container>
      <Header/>
      <LandingPage/>
    </Container></Suspense>
  );
}

export default App;

import './App.css';
import { Container } from '@mui/material';
import LandingPage from "./LandingPage";
import Header from "./Header";
import Projects from "./Projects/Projects";
import { Suspense } from 'react';
import BackgroundElements from './BackgroundElements';

function App() {
  return (
    <div>

    <Suspense fallback="...is loading">
      <Container>
        <Header/>
        <LandingPage/>
        {/* <Projects/> */}
        <BackgroundElements/> 
    </Container>
  </Suspense>
    </div>
  );
}

export default App;

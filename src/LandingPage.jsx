import { Container } from '@mui/material';
import AboutMe from "./AboutMe";
import Links from "./Links";

export default function LandingPage() { 
    return (
        <Container maxWidth="sm" align="center">
            <AboutMe/>
            {/* <Links/> */}
        </Container>
    )
}
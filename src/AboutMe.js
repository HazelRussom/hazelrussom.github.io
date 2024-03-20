import React from "react";
import { Typography, Box } from '@mui/material'

export default function AboutMe() {
  return (
    <Box m={4}>
      <Typography color='primary' variant='h4'>
        About Me
      </Typography>
      <Typography color='primary' variant='body1'>
        Hello! I'm a Software Engineer with over 5 years of experience. 
        I'm based in Scotland and currently work remotely in a full-stack position at Codurance. 

        I like writing reliable code that's easy to maintain.
      </Typography>
    </Box>
  );
}
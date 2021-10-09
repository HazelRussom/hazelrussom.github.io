import React from "react";
import { Typography, Box } from '@material-ui/core'

export default function AmoutMe() {
  return (
    <Box m={4}>
      <Typography color='primary' variant='h4'>
        About Me
      </Typography>
      <Typography color='primary' variant='body1'>
        I have over 3 years of experience working in FinTech as a Software Engineer. 
        My desire to learn more pushes me to regularly learn new technologies, and given me a comfortable base for full-stack roles.
        I have a passion for planning and optimising tasks to work in the most efficient way I can.
        Currently I'm working remotely with a full-time position at FNZ.
      </Typography>
    </Box>
  );
}
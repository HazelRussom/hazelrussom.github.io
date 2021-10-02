import React from "react";
import { Typography, Box } from '@material-ui/core'

export default function Header() {
  return (
    <Box m={4}>
      <Typography color='primary' variant='h1' align="center">
        Hazel Russom
      </Typography>
      <Typography color='primary' variant='h2' align="center">
        Software Engineer
      </Typography>
    </Box>
  );
}
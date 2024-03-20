import React from "react";
import { Grid } from '@mui/material'
import LinkCard from "./LinkCard"

export default function Links() {
  return (
    <Grid container spacing={4} justify="center" >
      <Grid item xs={3}>
        <LinkCard title="LinkedIn" link="https://www.linkedin.com/in/daniel-russom/" image="LinkedIn.png"/>
      </Grid>
      <Grid item xs={3}>
        <LinkCard title="GitHub" link="https://github.com/DanielRussom/" image="Github.png"/>
      </Grid>
    </Grid>
  );
}
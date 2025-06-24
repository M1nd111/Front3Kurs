import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BuildCard from './BuildCard';
import structures from '../../data';

function Content() {
  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Grid container spacing={{ xs: 3 }}>
        {structures.map((item, index) => (
          <Grid key={index} size={12}>
            <BuildCard building={item} index={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Content;
import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink, useParams } from 'react-router-dom';
import structures from '../../data';
import Navbar from '../../components/Navbar';

function Building() {
  const { id } = useParams();
  const building = structures[Number(id)];

  return (
    <Container maxWidth="lg">
      <Navbar active="1" />
      <Breadcrumbs sx={{ mt: 2, mb: 2 }}>
        <Link component={RouterLink} to="/">Главная</Link>
        <Typography color="text.primary">{building.title}</Typography>
      </Breadcrumbs>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
        <Box sx={{ flex: 1 }}>
          <img src={building.img} alt={building.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        </Box>
        <Box sx={{ flex: 2 }}>
          <Typography variant="h4" gutterBottom>{building.title}</Typography>
          {building.description.map((desc, index) => (
            <Typography key={index} paragraph>{desc}</Typography>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Building;
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box sx={{ bgcolor: '#333', color: '#fff', py: 2, mt: 4 }}>
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2">
          © Талыбов А.А., Б9122-09.03.04(6), 2024-2025
        </Typography>
        <Link href="#" color="inherit" sx={{ fontSize: '14px' }}>
          Контакты
        </Link>
      </Container>
    </Box>
  );
}

export default Footer;
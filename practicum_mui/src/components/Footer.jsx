import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'grey.200', py: 4, mt: 4 }}>
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Самые высокие здания и сооружения.{' '}
          <Link href="#" color="inherit">
            Контакты
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#f0f0f0',
  padding: '10px 0',
}));

interface ComponentProps {
  active: string;
}

function Navbar({ active }: ComponentProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{ boxShadow: 0, bgcolor: 'transparent' }}
    >
      <Container maxWidth="xl">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            Название
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {['Меню_1', 'Меню_2', 'Меню_3', 'Меню_4'].map((item, index) => (
              <Button
                key={item}
                variant={active === `${index + 1}` ? 'contained' : 'text'}
                sx={{
                  mx: 0.5,
                  bgcolor: active === `${index + 1}` ? '#000' : '#ccc',
                  color: active === `${index + 1}` ? '#fff000' : 'inherit',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
            >
              <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {['Меню_1', 'Меню_2', 'Меню_3', 'Меню_4'].map((item, index) => (
                  <MenuItem
                    key={item}
                    sx={{
                      fontWeight: 'bold',
                      backgroundColor:
                        active === `${index + 1}` ? '#000' : 'transparent',
                      color: active === `${index + 1}` ? '#fff000' : 'inherit',
                      '&:hover': { backgroundColor: '#ccc' },
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Structure } from '../data';

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'textAlign',
})<{ textAlign: 'left' | 'center' | 'right' }>(({ theme, textAlign }) => ({
  color: theme.palette.text.secondary,
  textAlign,
  marginBottom: theme.spacing(1),
}));

interface ComponentProps {
  building: Structure;
  index: number;
}

function BuildCard({ building, index }: ComponentProps) {
  const getFlexDirection = () => {
    if (index === 0) return 'row'; 
    if (index === 2) return 'row-reverse'; //
    return 'row'; 
  };

  const getTextAlign = () => {
    if (index === 0) return 'left';
    if (index === 1) return 'center';
    return 'right';
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: getFlexDirection(),
        height: '430px',
        mb: 2,
      }}
    >
      {index !== 1 && (
        <CardMedia
          component="img"
          sx={{ width: { xs: '30%', md: '37%' }, height: {xs: '20%',md:'100%'} , objectFit: 'cover' }}
          image={building.img}
          alt={building.title}
        />
      )}
      <CardContent sx={{ width: { xs: '100%', md: index === 1 ? '100%' : '63%' } }}>
        <Typography variant="h5" gutterBottom>
          {building.title}
        </Typography>
        {building.description.map((item, ind) => (
          <StyledTypography key={ind} variant="body2" textAlign={getTextAlign()}>
            {item}
          </StyledTypography>
        ))}
      </CardContent>
    </Card>
  );
}

export default BuildCard;
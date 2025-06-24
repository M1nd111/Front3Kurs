import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'textAlign',
})<{ textAlign: 'left' | 'center' | 'right' }>(({ theme, textAlign }) => ({
  color: theme.palette.text.secondary,
  textAlign,
  marginBottom: theme.spacing(1),
}));

interface ComponentProps {
  building: {
    img: string;
    title: string;
    description: string[];
  };
  index: number;
}

function BuildCard({ building, index }: ComponentProps) {
  const getFlexDirection = () => {
    if (index === 0) return 'row';
    if (index === 2) return 'row-reverse';
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
          sx={{ width: { xs: '30%', md: '37%' }, height: { xs: '20%', md: '100%' }, objectFit: 'cover' }}
          image={building.img}
          alt={building.title}
        />
      )}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ width: { xs: '100%', md: index === 1 ? '100%' : '63%' } }}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
            {building.title}
          </Typography>
          {building.description.map((item, ind) => (
            <StyledTypography key={ind} variant="body2" textAlign={getTextAlign()}>
              {item}
            </StyledTypography>
          ))}
        </CardContent>
        <CardActions sx={{ justifyContent: index === 1 ? 'center' : getTextAlign(), mt: 'auto' }}>
          <Button component={Link} to={`/building/${index}`} size="small">
            Подробнее
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default BuildCard;
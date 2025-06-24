import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Container from '@mui/material/Container';
import structures from '../data';

function Gallery() {
  return (
    <Container maxWidth="xl" sx={{ my: 2, textAlign: 'center' }}>
      <ImageList
        sx={{
          columnCount: {
            xs: '1 !important',
            sm: '2 !important',
            md: '3 !important',
          },
        }}
        gap={8}
      >
        {structures.map((item) => (
          <ImageListItem key={item.img} sx={{ width: '100%' }}>
            <img
              srcSet={item.img}
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <ImageListItemBar position="bottom" title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

export default Gallery;
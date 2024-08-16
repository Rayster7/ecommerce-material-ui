import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card
      sx={{
        width: 345,
        height: 420,
        boxShadow: '5px',
        borderRadius: 3,
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '8px',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'cover', borderRadius: '3px 3px 0 0' }}
      />
      <CardContent sx={{ padding: '16px' }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', color: '#333' }}
        >
          {product.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, color: '#777' }}
        >
          Prix : {product.price} €
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            width: '100%',
            backgroundColor: '#ff4081',
            '&:hover': {
              backgroundColor: '#ff1c75',
            },
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'block',
            margin: '0 auto',
          }}
          onClick={handleAddToCart}
        >
          Ajouter au panier
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

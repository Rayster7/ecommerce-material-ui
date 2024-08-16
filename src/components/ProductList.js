import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, Button, CircularProgress, Alert, Box } from '@mui/material';
import { addToCart } from '../features/cartSlice';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add an error state
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
        setError("Impossible de charger les produits. Veuillez réessayer plus tard.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (loading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '80vh' 
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '80vh' 
        }}
      >
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ boxShadow: 3, borderRadius: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.title}
              sx={{ objectFit: 'cover', borderRadius: '4px 4px 0 0' }}
            />
            <CardContent sx={{ padding: 3 }}>
              <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prix : {product.price} €
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Catégorie : {product.category}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ width: '100%' }}
                onClick={() => handleAddToCart(product)}
              >
                Ajouter au panier
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;

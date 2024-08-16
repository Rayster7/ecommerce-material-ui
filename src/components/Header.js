import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  const cartItems = useSelector((state) => state.cart);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1, fontWeight: 'bold', color: '#fff' }}
        >
          Ma Boutique
        </Typography>
        <Button 
          color="inherit" 
          component={RouterLink} 
          to="/" 
          sx={{ 
            marginRight: '16px',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          Accueil
        </Button>
        <Button 
          color="inherit" 
          component={RouterLink} 
          to="/products" 
          sx={{ 
            marginRight: '16px',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          Produits
        </Button>
        <IconButton 
          color="inherit" 
          component={RouterLink} 
          to="/cart"
          sx={{ 
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
          }}
        >
          <Badge badgeContent={itemCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

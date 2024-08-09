import React from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
  const cartItems = useSelector((state) => state.cart);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ma Boutique
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Accueil
        </Button>
        <Button color="inherit" component={RouterLink} to="/products">
          Produits
        </Button>
        <IconButton color="inherit" component={RouterLink} to="/cart">
          <Badge badgeContent={itemCount} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
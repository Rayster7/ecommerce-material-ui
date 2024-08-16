import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';

function Home() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 8, mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Bienvenue sur notre boutique en ligne
        </Typography>
        <Typography variant="h5" component="h2" paragraph>
          Découvrez notre large sélection de produits et trouvez ce dont vous avez besoin pour tous vos projets.
          Profitez de nos offres spéciales et de la livraison rapide !
        </Typography>
        <Button variant="contained" color="primary" href="/products">
          Voir nos produits
        </Button>
        <Button variant="outlined" color="primary" sx={{ ml: 2 }} href="/contact">
          Contactez-nous
        </Button>
      </Box>
    </Container>
  );
}

export default Home;


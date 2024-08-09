import React from 'react';
import { Typography, Box } from '@mui/material';

function CheckoutPage() {
  return (
    <Box sx={{ mt: 2 }}>
        <Typography variant="h4" gutterBottom>
        Paiement
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
        Merci pour votre achat ! Le processus de paiement sera traité ici.
        </Typography>
    </Box>
  );
}

export default CheckoutPage;

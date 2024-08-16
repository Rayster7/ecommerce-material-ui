import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container, Alert } from '@mui/material';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setError(null);
      
      console.log('Message envoyé:', formData);
    } else {
      setError('Veuillez remplir tous les champs.');
    }
  };

  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 8, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contactez-nous
        </Typography>
        <Typography variant="body1" paragraph>
          Si vous avez des questions ou des commentaires, veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
        </Typography>
        {isSubmitted && <Alert severity="success">Votre message a été envoyé avec succès!</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
        <Box sx={{ mt: 4 }}>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Nom"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Envoyer
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactPage;

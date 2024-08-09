import React from 'react';
import { BrowserRouter as Router, Routes, Route } from
'react-router-dom';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Home from './Pages/Home';
import Products from './Pages/Products';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';

function App() {
return (
<Router>
<CssBaseline />
<Header />
<Box sx={{ mt: 4 }}>
<Container maxWidth="lg">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/cart" element={<CartPage />} />
<Route path="/checkout" element={<CheckoutPage />} />
</Routes>
</Container>
</Box>
</Router>
);
}
export default App;

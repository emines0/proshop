import express from 'express';
import dotenv from 'dotenv';
// dotenv.config() loads the variables from .env file into process.env
dotenv.config();
import products from './data/products.js';

const port = process.env.PORT || 5002;

// Initialize express
const app = express();

// Create a route
app.get('/', (req, res) => {
  res.send('API is running....');
});

// Create a route for products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Create a route for single product
app.get('/api/products/:id', (req, res) => {
  // If the id of the product matches the id in the url, return the product
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// Listen to port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

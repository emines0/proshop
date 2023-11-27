import express from 'express';
import dotenv from 'dotenv';
// dotenv.config() loads the variables from .env file into process.env
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';

const port = process.env.PORT || 5002;

// Connect to database
connectDB();

// Initialize express
const app = express();

// Create a route for testing purposes
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);

// Listen to port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

import express from 'express';

const port = 5002;

// Initialize express
const app = express();

// Create a route
app.get('/', (req, res) => {
  res.send('API is running....');
});

// Listen to port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

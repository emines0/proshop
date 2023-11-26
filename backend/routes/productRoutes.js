import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// Initialize express router
const router = express.Router();

// Create a route for products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // Get all products
    // Passing an empty object as an argument gets all products
    const products = await Product.find({});
    res.json(products);
  })
);

// Create a route for single product
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    // Find product by id
    const product = await Product.findById(req.params.id);

    // If product is found
    if (product) {
      res.json(product);
    } else {
      // If product is not found
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;

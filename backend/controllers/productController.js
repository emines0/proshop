import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc   Fetch all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  // Get all products
  // Passing an empty object as an argument gets all products
  const products = await Product.find({});
  res.json(products);
});

// @desc   Fetch single product
// @route  GET /api/products/:id
// @access Public
const getProductsById = asyncHandler(async (req, res) => {
  // Find product by id
  const product = await Product.findById(req.params.id);

  // If product is found
  if (product) {
    res.json(product);
  } else {
    // If product is not found
    res.status(404);
    throw new Error('Rescourse not found');
  }
});

export { getProducts, getProductsById };

import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductsById,
} from '../controllers/productController.js';

// Fetch all products
router.route('/').get(getProducts);

// Fetch single product
router.route('/:id').get(getProductsById);

export default router;

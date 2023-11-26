import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    // This is the user that created the review.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    comment: { type: String, required: true },
  },
  {
    // This automatically creates fields for when the document was created and when it was last updated.
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    // This is the user that created the product.
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
  },
  {
    // This automatically creates fields for when the document was created and when it was last updated.
    timestamps: true,
  }
);

// This is a sub-document of productSchema.
const Product = mongoose.model('Product', productSchema);

export default Product;

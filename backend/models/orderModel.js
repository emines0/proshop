import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // This is the reference to the User model.
      ref: 'User',
    },
    // This is the array of order items.
    orderItems: [
      {
        name: { type: String, required: true },
        // This is the reference to the Product model.
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    // This is the shipping address.
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      // This is the postal code.
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    // This is the payment method.
    paymentMethod: {
      type: String,
      required: true,
    },
    // This is the payment result.
    paymentResult: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      // This is the email address of the payer.
      email_address: { type: String },
    },
    // Items price.
    itemsPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // This is the tax price.
    taxPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // This is the shipping price.
    shippingPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // This is the total price.
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    // This is the order status.
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    // This is the paid at date.
    paidAt: {
      type: Date,
    },
    // This is the order status.
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    // This is the delivered at date.
    deliveredAt: {
      type: Date,
    },
  },
  {
    // This automatically creates fields for when the document was created and when it was last updated.
    timestamps: true,
  }
);

// This is a sub-document of orderSchema.
const Order = mongoose.model('Order', orderSchema);

export default Order;

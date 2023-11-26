import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';

// Importing the models
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';

// Importing the database connection
import connectDB from './config/db.js';

// Configuring dotenv
dotenv.config();

// Connecting to the database
connectDB();

// Importing the data
const importData = async () => {
  try {
    // Clearing the database
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Inserting the users
    const createdUsers = await User.insertMany(users);

    // Getting the admin user
    const adminUser = createdUsers[0]._id;

    // Inserting the products
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);

    // Exiting with success
    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);

    // Exiting with failure
    process.exit(1);
  }
};

// Destroying the data
const destroyData = async () => {
  try {
    // Clearing the database
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // Exiting with success
    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);

    // Exiting with failure
    process.exit(1);
  }
};

// Checking the command line arguments
// If the argument is '-d', destroy the data
// Otherwise, import the data
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}

// Running the seeder
// node backend/seeder -d

// The output should be:
// Data Destroyed!
// Data Imported!

const mongoose = require('mongoose');
const Product = require('../models/product');

mongoose.connect('mongodb+srv://bhanuteja0018:4hWIHqPZ9eQjdCr6@ecommercecluster.0jemu.mongodb.net/?retryWrites=true&w=majority&appName=ecommercecluster', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const products = [
  {
    name: "Smartphone",
    category: "Electronics",
    price: 599,
    imageUrl: "https://example.com/smartphone.jpg",
    description: "A powerful smartphone with the latest features."
  },
  {
    name: "Laptop",
    category: "Electronics",
    price: 999,
    imageUrl: "https://example.com/laptop.jpg",
    description: "A high-performance laptop for all your needs."
  },
  {
    name: "Headphones",
    category: "Electronics",
    price: 199,
    imageUrl: "https://example.com/headphones.jpg",
    description: "Noise-cancelling headphones with superb sound quality."
  },
  {
    name: "Smartwatch",
    category: "Electronics",
    price: 299,
    imageUrl: "https://example.com/smartwatch.jpg",
    description: "A stylish smartwatch with health monitoring features."
  },
  {
    name: "Camera",
    category: "Electronics",
    price: 499,
    imageUrl: "https://example.com/camera.jpg",
    description: "A DSLR camera with stunning image quality."
  },
  {
    name: "T-Shirt",
    category: "Clothing",
    price: 29,
    imageUrl: "https://example.com/tshirt.jpg",
    description: "A comfortable cotton t-shirt."
  },
  {
    name: "Jeans",
    category: "Clothing",
    price: 59,
    imageUrl: "https://example.com/jeans.jpg",
    description: "Stylish denim jeans with a perfect fit."
  },
  {
    name: "Jacket",
    category: "Clothing",
    price: 119,
    imageUrl: "https://example.com/jacket.jpg",
    description: "A warm and cozy winter jacket."
  },
  {
    name: "Sneakers",
    category: "Clothing",
    price: 89,
    imageUrl: "https://example.com/sneakers.jpg",
    description: "Trendy sneakers for everyday wear."
  },
  {
    name: "Hat",
    category: "Clothing",
    price: 19,
    imageUrl: "https://example.com/hat.jpg",
    description: "A stylish hat for sunny days."
  }
];

Product.insertMany(products)
  .then(() => {
    console.log('Products inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => console.error('Failed to insert products:', err));

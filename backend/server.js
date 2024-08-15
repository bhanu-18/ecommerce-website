const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRouter = require('./routes/product'); // Import the products route

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productsRouter); // Use the products route

mongoose.connect('mongodb+srv://bhanuteja0018:4hWIHqPZ9eQjdCr6@ecommercecluster.0jemu.mongodb.net/?retryWrites=true&w=majority&appName=ecommercecluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});

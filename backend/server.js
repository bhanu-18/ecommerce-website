const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/test-db', async (req, res) => {
  try {
    const user = new User({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    });
    await user.save();
    res.send('User saved successfully');
  } catch (error) {
    res.status(500).send('Error saving user: ' + error.message);
  }
});

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

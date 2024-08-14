import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import CartPage from './pages/CartPage'; // Import CartPage
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]); // State for managing cart items

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({ email: currentUser.email, name: currentUser.displayName || "User" });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Router>
      <Navbar user={user} setUser={setUser} cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />
        <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} /> {/* Pass cartItems to CartPage */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

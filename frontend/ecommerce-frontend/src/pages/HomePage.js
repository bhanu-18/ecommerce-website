import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div className="container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our E-Commerce Store</h1>
          <p>Discover amazing products at great prices!</p>
          <a href="/shop" className="btn btn-primary">Shop Now</a>
        </div>
      </header>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list row">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-list">
          <a href="/category/electronics" className="category-item col">
            <h3>Electronics</h3>
          </a>
          <a href="/category/clothing" className="category-item col">
            <h3>Clothing</h3>
          </a>
          {/* Add more categories as needed */}
        </div>
      </section>

      <section className="newsletter-signup">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest updates and offers directly in your inbox.</p>
        <form className="form-inline justify-content-center">
          <input type="email" className="form-control mr-2" placeholder="Enter your email" />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>
    </div>
  );
};

export default HomePage;

import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 99.99, image: '/path/to/image1.jpg' },
    { id: 2, name: 'Product 2', price: 149.99, image: '/path/to/image2.jpg' },
    { id: 3, name: 'Product 3', price: 199.99, image: '/path/to/image3.jpg' },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;


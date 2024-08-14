import React, { useState } from 'react';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';
import productsData from '../products';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const HomePage = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = selectedCategory
    ? productsData[selectedCategory.toLowerCase()]
    : [];

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaArrowLeft style={{ color: 'black', fontSize: '30px' }} />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaArrowRight style={{ color: 'black', fontSize: '30px' }} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <header className="hero-section">
        <div className="hero-content text-center">
          <h1>Welcome to Our E-Commerce Store</h1>
          <p>Discover amazing products at great prices!</p>
          <a href="/shop" className="btn btn-primary">Shop Now</a>
        </div>
      </header>

      <section className="categories mt-5">
        <h2 className="text-center">Shop by Category</h2>
        <div className="category-list d-flex justify-content-center mt-4">
          <button 
            className="category-item btn btn-outline-primary mx-3"
            onClick={() => setSelectedCategory('Electronics')}
          >
            <h3>Electronics</h3>
          </button>
          <button 
            className="category-item btn btn-outline-primary mx-3"
            onClick={() => setSelectedCategory('Clothing')}
          >
            <h3>Clothing</h3>
          </button>
        </div>
      </section>

      {selectedCategory && (
        <section className="featured-products mt-5">
          <h2 className="text-center">{selectedCategory} Products</h2>
          <Slider {...settings} className="mt-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="p-2">
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))}
          </Slider>
        </section>
      )}
    </div>
  );
};

export default HomePage;

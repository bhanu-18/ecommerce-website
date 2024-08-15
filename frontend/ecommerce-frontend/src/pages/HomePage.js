import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';
import productsData from '../products';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Collapse } from 'react-bootstrap';

const HomePage = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [open, setOpen] = useState(false);
  const categorySectionRef = useRef(null);
  const productSectionRef = useRef(null);

  // Ensure the category exists in productsData, otherwise fallback to an empty array
  const filteredProducts = productsData[selectedCategory] || [];

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

  const handleShopNowClick = () => {
    categorySectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryClick = (category) => {
    if (category === selectedCategory) {
      setOpen(!open);
    } else {
      setSelectedCategory(category);
      setOpen(true);
    }
    setTimeout(() => {
      if (productSectionRef.current) {
        productSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <div className="container">
      <motion.header 
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content text-center">
          <h1>Welcome to Our E-Commerce Store</h1>
          <p>Discover amazing products at great prices!</p>
          <button onClick={handleShopNowClick} className="btn btn-primary">
            Shop Now
          </button>
        </div>
      </motion.header>

      <motion.section 
        ref={categorySectionRef}
        className="categories mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-center">Shop by Category</h2>
        <div className="category-list d-flex justify-content-center flex-wrap mt-4">
          {Object.keys(productsData).map((category) => (
            <button 
              key={category}
              className={`category-item btn btn-outline-primary mx-3 ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            </button>
          ))}
        </div>
      </motion.section>

      <Collapse in={open}>
        <motion.section 
          ref={productSectionRef}
          className="featured-products mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-center">{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products</h2>
          <Slider {...settings} className="mt-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="p-2">
                <ProductCard product={product} addToCart={addToCart} />
              </div>
            ))}
          </Slider>
        </motion.section>
      </Collapse>
    </div>
  );
};

export default HomePage;

import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price.toFixed(2)}</p>
        <p className="card-text text-muted">{product.description}</p>
        <button className="btn btn-primary mt-auto" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

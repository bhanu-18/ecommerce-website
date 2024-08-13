import React from 'react';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 99.99, image: '/path/to/image1.jpg', quantity: 1 },
    { id: 2, name: 'Product 2', price: 149.99, image: '/path/to/image2.jpg', quantity: 2 },
  ];

  return (
    <div className="cart-page">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="cart-total">
        <h4>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h4>
        <button className="btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;

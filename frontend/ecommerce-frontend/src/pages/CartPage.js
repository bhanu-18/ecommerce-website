import React from 'react';

const CartPage = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          <div className="col-md-8">
            <ul className="list-group">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{item.name}</h5>
                    <p className="mb-1">${item.price.toFixed(2)}</p>
                  </div>
                  <img src={item.imageUrl} alt={item.name} style={{ width: '50px' }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4>Total: ${totalAmount.toFixed(2)}</h4>
                <button className="btn btn-primary btn-block">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

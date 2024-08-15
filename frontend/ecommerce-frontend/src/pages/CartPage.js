import React from 'react';

const CartPage = ({ cartItems, removeFromCart, updateCartQuantity, emptyCart }) => {

  const handleQuantityChange = (productId, event) => {
    const quantity = parseInt(event.target.value);
    if (!isNaN(quantity) && quantity > 0) {
      updateCartQuantity(productId, quantity);
    }
  };

  const handleIncreaseQuantity = (productId, quantity) => {
    updateCartQuantity(productId, quantity + 1);
  };

  const handleDecreaseQuantity = (productId, quantity) => {
    if (quantity > 1) {
      updateCartQuantity(productId, quantity - 1);
    }
  };

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Shopping Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul className="list-group mb-3">
                {cartItems.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div className="cart-item-details d-flex align-items-center" style={{ flex: 1 }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '80px', height: '80px', objectFit: 'cover', marginRight: '20px' }}
                      />
                      <div style={{ flex: 1 }}>
                        <h5>{item.name}</h5>
                        <p>${item.price.toFixed(2)}</p> 
                      </div>
                    </div>
                    <div className="cart-item-actions d-flex align-items-center">
                      <button
                        onClick={() => handleDecreaseQuantity(item.id, item.quantity)}
                        className="btn btn-secondary mr-2"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e)}
                        className="form-control mr-2"
                        style={{ width: '60px' }}
                      />
                      <button
                        onClick={() => handleIncreaseQuantity(item.id, item.quantity)}
                        className="btn btn-secondary mr-2"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemove(item.id)}
                        className="btn btn-danger"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button onClick={emptyCart} className="btn btn-danger mb-4">
                Empty Cart
              </button>
            </>
          )}
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4>Total: ${totalPrice}</h4>
              <button className="btn btn-primary btn-block">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

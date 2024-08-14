import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = ({ user, setUser, cartItems }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        alert('Logged out successfully');
        navigate('/');
      })
      .catch((error) => {
        alert('Logout failed: ' + error.message);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className="navbar-brand">E-Commerce</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link">
              Cart
              {cartItems.length > 0 && (
                <span className="badge badge-pill badge-light ml-2">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-link">Welcome, {user.name}</span>
              </li>
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

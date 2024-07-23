import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/authSlice";

const PrivateNavbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav>
      <div>
        <Link to="/dashboard">Logo</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/payment">Payment</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default PrivateNavbar;

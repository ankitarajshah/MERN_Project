import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/payment">Payment</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default Navbar;

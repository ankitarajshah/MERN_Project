import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default PublicNavbar;

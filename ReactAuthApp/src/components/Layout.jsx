import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; // Assuming you have a Navbar component

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Renders nested routes */}
      </main>
    </div>
  );
};

export default Layout;

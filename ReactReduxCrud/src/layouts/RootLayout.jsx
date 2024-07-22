import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <h1>RootLayout</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;

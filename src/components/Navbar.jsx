import React from "react";

import { Link } from "react-router-dom";
import {Home} from "./Home"
import {About} from "./About"
import { Products } from "./Products.jsx";
export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20, display: "flex", paddingRight: "50px" }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}

      <div><Link to="/" element={<Home />} >Home</Link></div>


      <div> <Link to="/About" element={<About />} >About</Link></div>
      <div><Link to="/Products" element={<Products />} >Products</Link></div>


      <div><Link to="/Products/Men">Men</Link></div>
      <div><Link to="/Women">Women</Link></div>
      <div><Link to="/Products/Kids">Kids</Link></div>
      <div><Link to="Products/Homedecor">Homedecor</Link></div>

    </nav>
  );
};
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Home } from "../components/Home"
import {About} from "../components/About"
import { Products } from "../components/Products";
import { ProductCard } from "../components/ProductCard";

const MainRoutes = () => {
  return <>
    {/* Navbar and all the routes */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/ProductCard" element={<ProductCard />} />
    </Routes>
  </>;
};
export { MainRoutes };

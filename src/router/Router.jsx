import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Studio from "../Ui/Components/Studio";
import Order from "../Ui/Pages/Admin/Order/Order";
import Product from "../Ui/Pages/Admin/Product/Product";
import User from "../Ui/Pages/Admin/User/User";
import Header from "../Ui/Components/Header";
import Shop from "../Ui/Pages/Shop";
import Home from "../Ui/Pages/Home";
import Login from "../Ui/Pages/Login";
import Reg from "../Ui/Pages/Reg";
import Profile from "../Ui/Pages/Profile";
import ProductForm from "../Ui/Pages/Admin/Product/ProductForm";
import Footer from "../Ui/Components/Footer";
import About from "../Ui/Pages/About";
import OurStore from "../Ui/Pages/OurStore";
import Cart from "../Ui/Pages/Cart";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* ---------------User page------------- */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/store" element={<OurStore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Reg />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />

          {/* ------------ admin page ----------- */}
          <Route path="/admin-product" element={<Product />} />
          <Route path="/admin-product-form" element={<ProductForm />} />
          <Route path="/admin-user" element={<User />} />
          <Route path="/admin-order" element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

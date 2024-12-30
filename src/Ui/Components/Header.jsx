import React, { useEffect, useState } from "react";
import logo from "/src/assets/Logo.png";
import { Navbar, NavbarBrand, NavbarCollapse } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Heart, LogIn, Search, ShoppingCart } from "react-feather";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Header() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  let [cookie] = useCookies(["token", "user"]);
  console.log("-----------  cookie----------->", cookie?.user?.userType);

  console.log("Cookie:", cookie);
  console.log("User Type:", cookie?.user?.userType);

  return (
    <div className="relative w-[1400px]">
      {/* Page content */}
      <Navbar fluid rounded className="m-0 py-4 border-b">
        <NavbarBrand className="pl-10">
          <Link to="/">
            <img
              src={logo}
              className="mr-3 h-[70px]"
              alt="Flowbite React Logo"
            />
          </Link>
        </NavbarBrand>

        <NavbarCollapse>
          <div className="w-[500px] ">
            <div className="flex justify-center focus-within:border-black text-black border-2 border-black items-center p-0 m-0 bg-white rounded-3xl px-3 overflow-hidden mb-3 ">
              <input
                type="text"
                placeholder="Search your fragrance here"
                className="mt-[1px] placeholder-grey focus:ring-0 border-none w-full p-1 rounded-l-3xl "
              />
              <Search className="text-black rounded-r-3xl" />
            </div>
            <div className="flex justify-between [&_*]:font-bold [&_*]:text-black ">
              {cookie?.user?.userType === "admin" ? (
                <div className="flex gap-40 ">
                  <NavLink to="/admin-product">PRODUCT</NavLink>
                  <NavLink to="/admin-user">USER</NavLink>
                  <NavLink to="/admin-order">ORDER</NavLink>
                </div>
              ) : (
                <>
                  <NavLink to="/">HOME</NavLink>
                  <NavLink to="/shop">SHOP</NavLink>
                  <NavLink to="/Studio">STUDIO</NavLink>
                  <NavLink to="/store">STORES</NavLink>
                  <NavLink to="about">ABOUT</NavLink>
                </>
              )}
            </div>
          </div>
        </NavbarCollapse>
        <div className="flex items-center [&_*]:mr-5 text-gray-400">
          {cookie?.token ? (
            <img
              src="/src/assets/aroma.png"
              className="h-[30px]"
              onClick={() => navigate("/profile")}
              role="button"
            />
          ) : (
            <LogIn
              className="text-black"
              role="button"
              onClick={() => navigate("/login")}
            />
          )}

          {cookie?.user?.userType !== "admin" && (
            <>
              <ShoppingCart className="text-black" role="button" />
              <Heart
                className="text-black"
                role="button"
                onClick={toggleSidebar}
              />
            </>
          )}
        </div>
      </Navbar>

      {/* Sidebar */}

      <div
        div
        className={`fixed inset-y-0 right-0 w-80 bg-gray-200 text-balck transition-transform duration-300 transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 5555, top: 119 }}
      >
        <div className="p-4 flex justify-center items-center gap-3 ">
          <h2 className="text-[23px] title">My Wishlist</h2>
        </div>

        <hr />

        <div className="overflow-y-auto max-h-96">Wishlist</div>
      </div>
    </div>
  );
}

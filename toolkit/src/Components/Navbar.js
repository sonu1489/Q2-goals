import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const item = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItem: "center",
        justifyContent: "space-between",
      }}
    >
      <div>REDUX STORE</div>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart item: {item.length}</span>
      </div>
    </div>
  );
};

export default Navbar;

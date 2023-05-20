import React from "react";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { UseAsideContext } from "./Context/AsideContext";
import { UseProductContext } from "./Context/ProductsContext";

const BottomNav = () => {
  const { asideCartFunc } = UseAsideContext();
  const { cartProducts } = UseProductContext();

  return (
    <div className="bottom-nav">
      <div className="container">
        <div className="nav">
          <button>
            <Link to={"wishlist"}>
              <BiHeart />
              <span>Wishlist</span>
            </Link>
          </button>
          <button>
            <Link to={"compare"}>
              <IoIosGitCompare />
              <span>Compare</span>
            </Link>
          </button>
          <button>
            <Link to={"/"}>
              <AiOutlineHome />
              <span>Home</span>
            </Link>
          </button>
          <button className="bottom-cart-button" onClick={asideCartFunc}>
            <Link>
              <BiShoppingBag />
              <span>Cart</span>
              <span>{cartProducts.length}</span>
            </Link>
          </button>
          <button>
            <Link to={"account"}>
              <IoPersonOutline />
              <span>Account</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;

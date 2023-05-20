import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { BsArrowsFullscreen } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { UseProductContext } from "./Context/ProductsContext";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductItem = ({
  imageUrls,
  id,
  discount,
  name,
  oldPrize,
  prize,
  stock,
  isCartAdded,
  isWishAdded,
  option,
}) => {
  const { showModal, addToCart, animated, UnAnimated, addToWish } =
    UseProductContext();

  const img = imageUrls.length ? imageUrls[0] : null;

  return (
    <div className="products-item">
      <figure>
        <Link to={`/product/${id}`}>
          <div className="imgUrls">
            <img src={img} alt="products" />
          </div>
        </Link>
        <div className="action-buttons">
          <div className="button-action">
            <span className="tooltip">
              {isWishAdded ? "remove from wishlist" : "add to wishlist"}
            </span>
            <button
              type="button"
              onClick={() => {
                addToWish(id, name, imageUrls, prize, stock);
              }}
            >
              {isWishAdded ? <RiDeleteBin6Line /> : <AiOutlineHeart />}
            </button>
          </div>
          <div className="button-action">
            <span className="tooltip">Quick view</span>
            <button
              type="button"
              onClick={() => {
                showModal(id);
              }}
            >
              <BsArrowsFullscreen />
            </button>
          </div>
          <div className="button-action">
            <span className="tooltip">add to compare</span>
            <button type="button">
              <IoIosGitCompare />
            </button>
          </div>
        </div>
        <Link
          className={isCartAdded ? "options isDisabled" : "options"}
          onClick={() => {
            if (!option) {
              addToCart(id, name, imageUrls, prize, stock);
            }
            animated();

            setTimeout(() => {
              UnAnimated();
            }, 1000);
          }}
        >
          <HiShoppingCart />
          {option ? option : isCartAdded ? "Already Added" : "Add to cart"}
        </Link>
        {discount && <span className="discount">{discount}%</span>}
      </figure>
      <div className="content">
        <h4>
          <Link to={`product/${id}`}>{name.slice(0, 20)}...</Link>
        </h4>
        <span className="prize">
          {oldPrize && <del className="old-prize">${oldPrize}</del>}
          <span className="normal-prize">${prize}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductItem;

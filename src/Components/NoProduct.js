import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const NoProduct = () => {
  return (
    <div className="no-product">
      <HiOutlineShoppingBag />
      <p>There is no product available</p>
    </div>
  );
};

export default NoProduct;

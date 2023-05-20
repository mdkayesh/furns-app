import React from "react";
import { Link } from "react-router-dom";
import { UseProductContext } from "../Context/ProductsContext";
import SectionHero from "../SectionHero";
import NoProduct from "../NoProduct";
import { TiDeleteOutline } from "react-icons/ti";

const WishList = () => {
  const { addToCart, wishList, addToWish, Products, addToSinglePro } =
    UseProductContext();

  return (
    <div className="wish-list">
      <SectionHero heading={"wishlist"} />

      {wishList.length === 0 ? (
        <div className="noproduct container">
          <NoProduct />
        </div>
      ) : (
        <div className="wish-table container">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Until Prize</th>
                <th>Add to cart</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {wishList.map((item) => (
                <tr key={item.wishId}>
                  <td>
                    <Link
                      to={`/product/${item.wishInfo}`}
                      onClick={() => {
                        addToSinglePro(item.wishId);
                      }}
                    >
                      <img src={item.wishImg} alt="product-img" />
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/product/${item.wishInfo}`}
                      onClick={() => {
                        addToSinglePro(item.wishId);
                      }}
                    >
                      {item.wishInfo.slice(0, 20)}...
                    </Link>
                  </td>
                  <td>${item.wishPrize}</td>
                  <td>
                    <button
                      type="button"
                      className={
                        Products.find((curElem) => {
                          if (curElem.id === item.wishId) {
                            return curElem.isCartAdded;
                          }
                          return null;
                        })
                          ? "add-to-cart-button disabled"
                          : "add-to-cart-button"
                      }
                      onClick={() =>
                        addToCart(
                          item.wishId,
                          item.wishInfo,
                          item.wishImg,
                          null,
                          item.wishPrize,
                          item.wishStock
                        )
                      }
                    >
                      {Products.find((curElem) => {
                        if (curElem.id === item.wishId) {
                          return curElem.isCartAdded;
                        }
                        return null;
                      })
                        ? "Already Added"
                        : "Add To Cart"}
                    </button>
                  </td>
                  <td>
                    <span
                      className="delete-icon"
                      onClick={() => {
                        addToWish(
                          item.wishId,
                          item.wishInfo,
                          item.wishImg,
                          item.wishPrize,
                          item.wishStock
                        );
                      }}
                    >
                      <TiDeleteOutline />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WishList;

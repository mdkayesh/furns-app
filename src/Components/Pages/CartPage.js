import React from "react";
import { Link } from "react-router-dom";
import { UseProductContext } from "../Context/ProductsContext";
import Counter from "../Counter";
import NoProduct from "../NoProduct";
import SectionHero from "../SectionHero";

const CartPage = () => {
  const { cartProducts, increment, decrement } = UseProductContext();

  return (
    <div className="cart-page">
      <SectionHero heading={"cart"} />

      {cartProducts.length === 0 ? (
        <div className="noproduct container">
          <NoProduct />
        </div>
      ) : (
        <div className="cart-table container">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Until Prize</th>
                <th>Oty</th>
                <th>Subtotal</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link to={"/"}>
                      <img src={item.img} alt="product-img" />
                    </Link>
                  </td>
                  <td>
                    <Link to={"/"}>{item.info}</Link>
                  </td>
                  <td>${item.prize}</td>
                  <td>
                    <Counter
                      amount={item.amount}
                      increment={() => increment(item.id)}
                      decrement={() => decrement(item.id)}
                    />
                  </td>
                  <td>${item.prize * item.amount}</td>
                  <td>action</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CartPage;

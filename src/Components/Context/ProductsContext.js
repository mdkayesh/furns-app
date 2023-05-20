import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from "../Reducer/ProductReducer";
import { onSnapshot } from "firebase/firestore";
import { colRef } from "../../Data/firebase";

const ProductContext = createContext();

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  Products: [],
  modalProduct: [],
  singleProduct: [],
  ID: null,
  cartProducts: cart && cart?.length > 0 ? cart : [],
  wishList: [],
  overflow: false,
  isCartAdded: false,
  isWishAdded: false,
  isAnimated: false,
  modal: false,
  counter: 1,
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  // document load and get products

  useEffect(() => {
    onSnapshot(
      colRef,
      (snapshot) => {
        let products = [];
        snapshot.docs.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: "GET_PRODUCTS", payload: products });
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const showModal = (id) => {
    dispatch({ type: "MODAL", productId: id });
  };

  const modalInc = (id) => {
    dispatch({ type: "MODAL_AMOUNT_INC", productId: id });
  };

  const modalDec = (id) => {
    dispatch({ type: "MODAL_AMOUNT_DEC", productId: id });
  };

  const addToSinglePro = (product) => {
    dispatch({ type: "ADD_TO_SINGLE", payload: product });
  };

  const singleInc = (id) => {
    dispatch({ type: "SINGLE_INC", productId: id });
  };

  const singleDec = (id) => {
    dispatch({ type: "SINGLE_DEC", productId: id });
  };

  const closeModal = () => {
    dispatch({ type: "FADE" });
  };

  const addToCart = (id, info, img, prize, stock) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, info, img, prize, stock },
    });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", productId: id });
  };

  const addToWish = (wishId, wishInfo, wishImg, wishPrize, wishStock) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: { wishId, wishInfo, wishImg, wishPrize, wishStock },
    });
  };

  const animated = () => {
    dispatch({ type: "ANIMATED" });
  };

  const UnAnimated = () => {
    dispatch({ type: "UNANIMATED" });
  };

  const increment = (id) => {
    dispatch({ type: "INCREMENT", productId: id });
  };

  const decrement = (id) => {
    dispatch({ type: "DECREMENT", productId: id });
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        showModal,
        closeModal,
        addToCart,
        removeItem,
        animated,
        UnAnimated,
        increment,
        decrement,
        addToSinglePro,
        addToWish,
        modalInc,
        modalDec,
        singleInc,
        singleDec,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// custom hook

const UseProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, UseProductContext };

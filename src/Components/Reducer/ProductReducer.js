import { counterDec, counterInc } from "./helperFunctions";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      action.payload.forEach((curItem) => {
        curItem.isCartAdded = false;
      });

      return { ...state, Products: [...action.payload] };
    case "MODAL":
      const modalProduct = state.Products.find(
        (item) => item.id === action.productId
      );
      modalProduct.amount = 1;
      return {
        ...state,
        modal: true,
        modalProduct: [modalProduct],
        overflow: true,
      };

    case "MODAL_AMOUNT_INC":
      const updateModal = counterInc(state.modalProduct, action.productId);
      return { ...state, modalProduct: updateModal };

    case "MODAL_AMOUNT_DEC":
      const updateModalDec = counterDec(state.modalProduct, action.productId);
      return { ...state, modalProduct: updateModalDec };

    case "ADD_TO_SINGLE":
      return { ...state, singleProduct: [action.payload] };
    case "SINGLE_INC":
      const updateSingleInc = counterInc(state.singleProduct, action.productId);

      return { ...state, singleProduct: updateSingleInc };
    case "SINGLE_DEC":
      const updateSingleDec = counterDec(state.singleProduct, action.productId);

      return { ...state, singleProduct: updateSingleDec };

    case "FADE":
      return { ...state, modal: false, overflow: false };

    case "ADD_TO_CART":
      const { id, info, img, prize, stock } = action.payload;

      const existingItem = state.cartProducts.find((item) => item.id === id);

      if (existingItem) {
        return { ...state };
      } else {
        let newAmount = 1;
        let singleAmount = 1;
        if (state.modalProduct[0]) {
          state.modalProduct[0].isCartAdded = true;
          newAmount = state.modalProduct[0].amount;
        }

        if (state.singleProduct[0]) {
          singleAmount = state.singleProduct[0].amount;
        }

        const cart = {
          id,
          info,
          img,
          prize,
          amount: 1 + (newAmount - 1) + (singleAmount - 1),
          stock,
        };
        const productItem = state.Products.find((item) => item.id === id);
        productItem.isCartAdded = true;

        const isCartAdded = productItem.isCartAdded;

        localStorage.setItem(
          "cart",
          JSON.stringify([cart, ...state.cartProducts])
        );

        return {
          ...state,
          cartProducts: [cart, ...state.cartProducts],
          isCartAdded,
        };
      }
    case "REMOVE_FROM_CART":
      const updateCart = state.cartProducts.filter(
        (item) => item.id !== action.productId
      );

      const productItem = state.Products.find(
        (item) => item.id === action.productId
      );

      productItem.isCartAdded = false;

      const isCartAdded = productItem.isCartAdded;

      localStorage.setItem("cart", JSON.stringify(updateCart));

      return { ...state, cartProducts: updateCart, isCartAdded };

    case "ADD_TO_WISHLIST":
      const { wishId, wishInfo, wishImg, wishPrize, wishStock } =
        action.payload;

      const existingWish = state.wishList.find(
        (item) => item.wishId === wishId
      );

      // if existing product have then toggle and remove the wishtList

      if (existingWish) {
        const updadeWishList = state.wishList.filter(
          (item) => item.wishId !== existingWish.wishId
        );

        const productItem = state.Products.find((item) => item.id === wishId);

        productItem.isWishAdded = false;

        const isWishAdded = productItem.isWishAdded;

        return {
          ...state,
          wishList: updadeWishList,
          isWishAdded,
        };
      } else {
        const wishItem = {
          wishId,
          wishImg,
          wishInfo,
          wishPrize,
          wishStock,
        };

        const productItem = state.Products.find((item) => item.id === wishId);

        // add an object property

        productItem.isWishAdded = true;

        const isWishAdded = productItem.isWishAdded;

        return {
          ...state,
          wishList: [wishItem, ...state.wishList],
          isWishAdded,
        };
      }

    case "ANIMATED":
      return { ...state, isAnimated: true };

    case "UNANIMATED":
      return { ...state, isAnimated: false };

    case "INCREMENT":
      let updateInc = counterInc(state.cartProducts, action.productId);

      localStorage.setItem("cart", JSON.stringify(updateInc));

      return { ...state, cartProducts: updateInc };

    case "DECREMENT":
      let updateDec = counterDec(state.cartProducts, action.productId);

      localStorage.setItem("cart", JSON.stringify(updateDec));
      return { ...state, cartProducts: updateDec };

    default:
      return state;
  }
};

export default ProductReducer;

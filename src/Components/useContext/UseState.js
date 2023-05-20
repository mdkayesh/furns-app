// import React, { useReducer } from "react";
// import Context from "./UseContext";

// const UseState = ({ children }) => {
//   const initialValues = {
//     // for aside nav
//     asideNav: false,
//     asideSearch: false,
//     asideSetting: false,

//     // for modal

//     modal: false,
//   };

//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "asideNav":
//         return { ...state, asideNav: !state.asideNav };
//       case "asideSearch":
//         return { ...state, asideSearch: !state.asideSearch };
//       case "asideSetting":
//         return { ...state, asideSetting: !state.asideSetting };
//       case "modal":
//         return { ...state, modal: !state.modal };
//       default:
//         return state;
//     }
//   };

//   const [state, dispatch] = useReducer(reducer, initialValues);

//   return (
//     <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
//   );
// };

// export default UseState;

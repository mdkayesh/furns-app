import { createContext, useContext, useReducer } from "react";
import AsideReducer from "../Reducer/AsideReducer";

const AsideContext = createContext();

const initialState = {
  asideNav: false,
  asideSearch: false,
  asideSetting: false,
  asideCart: false,
  // for dropdown

  home: false,
  office: false,
  hospital: false,
};

const AsideProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AsideReducer, initialState);

  const asideCartFunc = () => {
    dispatch({ type: "ASIDE_CART" });
  };

  const asideNavFunc = () => {
    dispatch({ type: "ASIDE_NAV" });
  };

  const asideNavCloseFunc = () => {
    dispatch({ type: "ASIDE_NAV_CLOSE" });
  };

  const asideSearchFunc = () => {
    dispatch({ type: "ASIDE_SEARCH" });
  };

  const asideSettingFunc = () => {
    dispatch({ type: "ASIDE_SETTING" });
  };

  const homeFunc = () => {
    dispatch({ type: "HOME" });
  };

  const officeFunc = () => {
    dispatch({ type: "OFFICE" });
  };

  const hospitalFunc = () => {
    dispatch({ type: "HOSPITAL" });
  };

  return (
    <AsideContext.Provider
      value={{
        ...state,
        asideCartFunc,
        asideNavFunc,
        asideNavCloseFunc,
        asideSearchFunc,
        asideSettingFunc,
        homeFunc,
        officeFunc,
        hospitalFunc,
      }}
    >
      {children}
    </AsideContext.Provider>
  );
};

// custom hook

const UseAsideContext = () => {
  return useContext(AsideContext);
};

export { AsideContext, AsideProvider, UseAsideContext };

import { createContext, useContext, useReducer, useEffect } from "react";
import FilterReducer from "../Reducer/FilterReducer";
import { UseProductContext } from "./ProductsContext";

const FilterContext = createContext();

//  initial state

const initialState = {
  filterProducts: [],
};

const FilterProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);
  const { Products } = UseProductContext();

  useEffect(() => {
    dispatch({ type: "GET_FILTER_PRODUCTS", payload: Products });

    return () => {
      return null;
    };
  }, [Products]);

  const sortBy = (event) => {
    let value = event.target.value;
    dispatch({ type: value });
  };

  return (
    <FilterContext.Provider value={{ ...state, sortBy }}>
      {children}
    </FilterContext.Provider>
  );
};

//  custom hook

const UseFilterProvider = () => {
  return useContext(FilterContext);
};

export { FilterContext, FilterProductProvider, UseFilterProvider };

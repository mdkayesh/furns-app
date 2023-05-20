const FilterReducer = (state, action) => {
  if (action.type === "GET_FILTER_PRODUCTS") {
    return { ...state, filterProducts: [...action.payload] };
  }

  if (action.type === "A-Z") {
    const ascendingProduct = state.filterProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    return { ...state, filterProducts: ascendingProduct };
  }
  if (action.type === "Z-A") {
    const descendingProduct = state.filterProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    );

    return { ...state, filterProducts: descendingProduct };
  }

  if (action.type === "low-high") {
    const lowest = state.filterProducts.sort((a, b) => a.prize - b.prize);

    return { ...state, filterProducts: lowest };
  }

  if (action.type === "high-low") {
    const highest = state.filterProducts.sort((a, b) => b.prize - a.prize);

    return { ...state, filterProducts: highest };
  }

  return { ...state };
};

export default FilterReducer;

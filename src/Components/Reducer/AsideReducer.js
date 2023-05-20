const AsideReducer = (state, action) => {
  switch (action.type) {
    case "ASIDE_CART":
      return {
        ...state,
        asideCart: !state.asideCart,
        overflow2: !state.asideCart,
      };
    case "ASIDE_NAV":
      return { ...state, asideNav: !state.asideNav };
    case "ASIDE_NAV_CLOSE":
      return { ...state, asideNav: false };
    case "ASIDE_SEARCH":
      return { ...state, asideSearch: !state.asideSearch };
    case "ASIDE_SETTING":
      return { ...state, asideSetting: !state.asideSetting };
    case "HOME":
      return { ...state, home: !state.home, office: false, hospital: false };
    case "OFFICE":
      return { ...state, home: false, office: !state.office, hospital: false };
    case "HOSPITAL":
      return {
        ...state,
        home: false,
        office: false,
        hospital: !state.hospital,
      };
    default:
      return state;
  }
};

export default AsideReducer;

import { createStore } from "redux";

const initialState = {
  isMobile: window.innerWidth >= 1024,
  isTab: window.innerWidth >= 768,
  isSideBarOpen: true,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_MOBILE":
      return {
        ...state,
        isMobile: action.isMobile,
        isTab : action.isTab
      };
    
    case "SET_SIDEBAR":
      return {
        ...state,
        isSideBarOpen: action.isSideBarOpen,
      }

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
import { createStore } from "redux";

const initialState = {
  isMobile: window.innerWidth >= 1024,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_MOBILE":
      return {
        ...state,
        isMobile: action.isMobile,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
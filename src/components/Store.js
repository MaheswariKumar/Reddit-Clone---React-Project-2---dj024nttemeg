import { createStore } from "redux";

const initialState = {
  isMobile: window.innerWidth >= 1024,
  isTab: window.innerWidth >= 768,
  isMob: window.innerWidth >= 500,
  isSideBarOpen: true,
  isQrOpen: false,
  isLogin: false,
  isSignUp: false,
  isMenu: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_MOBILE":
      return {
        ...state,
        isMobile: action.isMobile,
        isTab : action.isTab,
      };

    case "SET_IS_MOB":
      return {
        ...state,
        isMob : action.isMob,
      }
    
    case "SET_SIDEBAR":
      return {
        ...state,
        isSideBarOpen: action.isSideBarOpen,
      }
    
    case "OPEN_QR":
      return {
        ...state,
        isQrOpen: !state.isQrOpen
      }

    case "OPEN_LOGIN":
      return {
        ...state,
        isLogin: !state.isLogin
      }

    case "SHOW_SIGNUP":
      return {
        ...state,
        isSignUp: !state.isSignUp
      }

    case "SHOW_MENUBAR":
      return {
        ...state,
        isMenu: !state.isMenu
      }

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
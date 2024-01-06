import { createStore } from "redux";

const initialState = {
  isMobile: window.innerWidth >= 1024,
  isTab: window.innerWidth >= 768,
  isMob: window.innerWidth >= 500,
  isSideBarOpen: true,
  isQrOpen: false,
  isLogin: false,
  isSignUp: false,
  isUserName: false,
  isMenu: false,
  signUpForm: { 
    username:'', 
    email: '',
    password:''
  },
  isUserLoggedin: true,
  checkedStatus: true,
  checkedTheme: false,
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

    case "SHOW_SET_USERNAME":
      return {
        ...state,
        isUserName: !state.isUserName
      }

    case "SHOW_MENUBAR":
      return {
        ...state,
        isMenu: action.isMenu
      }

    case 'SET_USER_AUTH':
      return {
        ...state,
        user: action.user,
      };

    case 'SET_SIGNUP':
      return {
        ...state,
        signUpForm: { 
          username: action.username,
          email: action.email, 
          password: action.password
        }
      };

    case 'IS_USER_LOGGEDIN':
      return {
        ...state,
        isUserLoggedin: !state.isUserLoggedin,
      };

    case 'SHOW_STATUS':
      return {
        ...state,
        checkedStatus: !state.checkedStatus,
      };

    case 'CHANGE_THEME':
      return {
        ...state,
        checkedTheme: !state.checkedTheme,
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
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
  isUserLoggedin: false,
  checkedStatus: true,
  checkedTheme: false,
  searchTerm: '',
  searchVal: "",
  searchPostResults: [],
  searchComutyResults: [],
  searchPplResults: [],
  showDropOption: false,
  getId:"",
  postTime: "",
  showCommunity: false,
  createdChannelName: "",
  showDate: "",
  msg: "",
  showMsg: false,
  logginUserName: "",
  logginUserToken: "",
  authorName: "",
  userId: "",
  navOptions: { 
    icon:'', 
    val: '',
  },
  openNotification: false
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
        checkedTheme: action.checkedTheme,
      };

    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.searchTerm,
      };

    case 'SET_SEARCH_VAL':
      return {
        ...state,
        searchVal: action.searchVal,
      };

    case 'SET_POST_RESULTS':
      return {
        ...state,
        searchPostResults: action.searchPostResults,
      };

    case 'SET_COMUTY_RESULTS':
      return {
        ...state,
        searchComutyResults: action.searchComutyResults,
      };

    case 'SET_PPL_RESULTS':
      return {
        ...state,
        searchPplResults: action.searchPplResults
      };

    case 'SET_DROP_OPTION':
      return {
        ...state,
        showDropOption: action.showDropOption,
      };

    case 'SET_ID':
      return {
        ...state,
        getId: action.getId,
      };

      case 'SET_TIME':
        return {
          ...state,
          postTime: action.postTime,
        };

      case 'SET_COMMUNITY':
        return {
          ...state,
          showCommunity: !state.showCommunity,
        };

      case 'SET_CREATED_NAME':
        return {
          ...state,
          createdChannelName: action.createdChannelName
        };

      case 'SET_DATE':
        return {
          ...state,
          showDate: action.showDate
        };

      case 'SET_MSG':
        return {
          ...state,
          msg: action.msg
        };
  
      case 'SET_SHOW_MSG':
        return {
          ...state,
          showMsg: !state.showMsg
        };

      case 'SET_LOGIN_USERNAME':
        return {
          ...state,
          logginUserName: action.logginUserName
        };

      case 'SET_LOGIN_USERTOKEN':
        return {
          ...state,
          logginUserToken: action.logginUserToken
        };

      case 'SET_AUTHOR_NAME':
        return {
          ...state,
          authorName: action.authorName
        };

      case 'SET_USERID':
        return {
          ...state,
          userId: action.userId
        };

      case 'SET_NAVOPT':
        return {
          ...state,
          navOptions: { 
            icon: action.icon,
            val: action.val, 
          }
        };

      case 'SET_SHOWNOTIFI':
        return {
          ...state,
          openNotification: action.openNotification
        };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
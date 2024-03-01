export const setIsMobile = (isMobile, isTab) => ({
    type: "SET_IS_MOBILE",
    isMobile,
    isTab,
  });

export const setIsMob = (isMob) => ({
    type: "SET_IS_MOB",
    isMob,
})

export const setSideBar = (isSideBarOpen) => ({
  type:"SET_SIDEBAR",
  isSideBarOpen,
})

export const openQR = () => ({
  type: "OPEN_QR",
})

export const openLogin = () => ({
  type: "OPEN_LOGIN",
})

export const showSignUp = () => ({
  type: "SHOW_SIGNUP",
})

export const showSetUsername = () => ({
  type: "SHOW_SET_USERNAME",
})

export const showMenuBar = (isMenu) => ({
  type: "SHOW_MENUBAR",
  isMenu,
})
  
export const setUserAuth = (user) => ({
  type: 'SET_USER_AUTH',
  user,
});

export const setSignUp = (username, email, password)=> ({
  type: 'SET_SIGNUP',
  username, 
  email,
  password
})

export const isLoggedIn = () => ({
  type: 'IS_USER_LOGGEDIN',
});

export const showStatus = () => ({
  type: 'SHOW_STATUS',
});

export const changeTheme = (checkedTheme) => ({
  type: 'CHANGE_THEME',
  checkedTheme
});

export const setSearchTerm = (searchTerm) => ({
  type: 'SET_SEARCH_TERM',
  searchTerm
});

export const setSearchVal = (searchVal) => ({
  type: 'SET_SEARCH_VAL',
  searchVal
});

export const setPostResults = (searchPostResults) => ({
  type: 'SET_POST_RESULTS',
  searchPostResults,
});

export const setComutyResults = (searchComutyResults) => ({
  type: 'SET_COMUTY_RESULTS',
  searchComutyResults,
});

export const setPplResults = (searchPplResults) => ({
  type: 'SET_PPL_RESULTS',
  searchPplResults
});

export const setDropOption = (showDropOption) => ({
  type: 'SET_DROP_OPTION',
  showDropOption
});

export const setID = (getId) => ({
  type: 'SET_ID',
  getId
});

export const setTime = (postTime) => ({
  type: 'SET_TIME',
  postTime
});

export const setCommunity = () => ({
  type: 'SET_COMMUNITY',
});

export const setCreatedName = (createdChannelName) => ({
  type: 'SET_CREATED_NAME',
  createdChannelName
});

export const setDate = (showDate) => ({
  type: 'SET_DATE',
  showDate
});

export const setMsg = (msg) => ({
  type: 'SET_MSG',
  msg
});

export const setShowMsg = () => ({
  type: 'SET_SHOW_MSG',
});

export const setLoginUserName = (logginUserName) => ({
  type: 'SET_LOGIN_USERNAME',
  logginUserName
});

export const setLoginUserToken = (logginUserToken) => ({
  type: 'SET_LOGIN_USERTOKEN',
  logginUserToken
});

export const setAuthorName = (authorName) => ({
  type: 'SET_AUTHOR_NAME',
  authorName
});

export const setUserId = (userId) => ({
  type: 'SET_USERID',
  userId
});

export const setNavOpt = (icon, val)=> ({
  type: 'SET_NAVOPT',
  icon, 
  val,
})

export const setShowNotifi = (openNotification) => ({
  type: 'SET_SHOWNOTIFI',
  openNotification
});
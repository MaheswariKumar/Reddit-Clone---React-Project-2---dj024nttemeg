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

export const changeTheme = () => ({
  type: 'CHANGE_THEME',
});

export const setSearchTerm = (searchTerm) => ({
  type: 'SET_SEARCH_TERM',
  searchTerm
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
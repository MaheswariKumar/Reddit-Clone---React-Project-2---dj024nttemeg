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

export const showMenuBar = () => ({
  type: "SHOW_MENUBAR",
})
  
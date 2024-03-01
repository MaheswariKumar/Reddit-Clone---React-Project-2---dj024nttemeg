import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsMob,
  openLogin,
  showSignUp,
  isLoggedIn,
  setLoginUserName,
  setLoginUserToken,
} from "../state/Action";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGitHub,
  signInWithGoogle,
} from "../firebase";
import CloseIcon from "../icons/CloseIcon";
import GoogleIcon from "../icons/GoogleIcon";

export default function Login() {
  const dispatch = useDispatch();
  const isMob = useSelector((state) => state.isMob);
  const logginUserName = useSelector((state) => state.logginUserName);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isPassInputFocused, setIsPassInputFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [showErr, setShowErr] = useState(false);

  const signin = async () => {
    const newtonLoginRes = await fetch(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: "dj024nttemeg",
        },
        body: JSON.stringify({
          email: email,
          password: pass,
          appType: "reddit",
        }),
      }
    );

    if (newtonLoginRes.status === 401) {
      setShowErr(true);
      return;
    }

    const newtonLoginData = await newtonLoginRes.json();

    dispatch(setLoginUserName(newtonLoginData.data.name));
    dispatch(setLoginUserToken(newtonLoginData.token));

    dispatch(isLoggedIn());
    dispatch(openLogin());
    setEmail("");
    setPass("");
  };

  const handleGoogleSign = async () => {
    await signInWithGoogle();
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserInfo(user);
        dispatch(setLoginUserName(user.reloadUserInfo.displayName));
        await performSignupOrLogin();
      } else {
        console.log("No user is signed in.");
      }
    });

    const performSignupOrLogin = async () => {
      if (logginUserName) {
        const newtonSignUpRes = await fetch(
          "https://academics.newtonschool.co/api/v1/user/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              projectID: "dj024nttemeg",
            },
            body: JSON.stringify({
              name: logginUserName,
              email: `${userInfo.uid}@gmail.com`,
              password: `${userInfo.uid}`,
              appType: "reddit",
            }),
          }
        );

        const newtonSignUpData = await newtonSignUpRes.json();
        dispatch(setLoginUserToken(newtonSignUpData.token));

        if (newtonSignUpRes.status === 403) {
          const newtonLoginRes = await fetch(
            "https://academics.newtonschool.co/api/v1/user/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                projectID: "dj024nttemeg",
              },
              body: JSON.stringify({
                email: `${userInfo.uid}@gmail.com`,
                password: `${userInfo.uid}`,
                appType: "reddit",
              }),
            }
          );
          const newtonLoginData = await newtonLoginRes.json();
          dispatch(setLoginUserToken(newtonLoginData.token));

          dispatch(isLoggedIn());
          dispatch(openLogin());
          return;
        }
        dispatch(isLoggedIn());
        dispatch(openLogin());
      }
    };
  };

  const handleGitHubSign = async () => {
    await signInWithGitHub();
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserInfo(user);
        dispatch(setLoginUserName(user.reloadUserInfo.displayName));
        await performSignupOrLogin();
      } else {
        console.log("No user is signed in.");
      }
    });

    const performSignupOrLogin = async () => {
      if (logginUserName) {
        const newtonSignUpRes = await fetch(
          "https://academics.newtonschool.co/api/v1/user/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              projectID: "dj024nttemeg",
            },
            body: JSON.stringify({
              name: logginUserName,
              email: `${userInfo.uid}@gmail.com`,
              password: `${userInfo.uid}`,
              appType: "reddit",
            }),
          }
        );

        const newtonSignUpData = await newtonSignUpRes.json();
        dispatch(setLoginUserToken(newtonSignUpData.token));

        if (newtonSignUpRes.status === 403) {
          const newtonLoginRes = await fetch(
            "https://academics.newtonschool.co/api/v1/user/login",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                projectID: "dj024nttemeg",
              },
              body: JSON.stringify({
                email: `${userInfo.uid}@gmail.com`,
                password: `${userInfo.uid}`,
                appType: "reddit",
              }),
            }
          );
          const newtonLoginData = await newtonLoginRes.json();
          dispatch(setLoginUserToken(newtonLoginData.token));

          dispatch(isLoggedIn());
          dispatch(openLogin());
          return;
        }

        dispatch(isLoggedIn());
        dispatch(openLogin());
      }
    };
  };

  useEffect(() => {
    const handleReSize = () => {
      dispatch(setIsMob(window.innerWidth >= 500));
    };

    window.addEventListener("resize", handleReSize);

    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, []);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handlePassInputFocus = () => {
    setIsPassInputFocused(true);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePassInput = (e) => {
    setPass(e.target.value);
  };

  useEffect(() => {
    if (email === "") {
      setIsInputFocused(false);
    }
    if (pass === "") {
      setIsPassInputFocused(false);
    }
  }, [email, pass]);

  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center rounded-[15px] bg-white mx-6 w-full max-w-[540px] h-auto ${
        isMob ? "px-10" : null
      } py-6`}
    >
      <div
        className={`flex justify-end items-center w-full ${
          isMob ? null : "pr-3"
        }`}
        onClick={() => dispatch(openLogin())}
      >
        <div className="cursor-pointer flex items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300">
          <CloseIcon
            style={{ height: "16px", width: "16px", color: "black" }}
          />
        </div>
      </div>
      <div className="px-8 w-full">
        <nav className="font-bold text-2xl">Log In</nav>
        <p className="text-sm my-3 pb-2">
          By continuing, you agree to our{" "}
          <a
            href="https://www.redditinc.com/policies/user-agreement"
            target="_blank"
            className="text-blue-700"
          >
            User Agreement
          </a>{" "}
          and acknowledge that you understand the{" "}
          <a
            className="text-blue-700"
            href="https://www.reddit.com/policies/privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </a>
          .
        </p>
        <div
          onClick={handleGoogleSign}
          className="cursor-pointer flex mt-2 gap-16 items-center justify-center border-r border-t border-l rounded-full p-2 mb-2 w-full"
        >
          <GoogleIcon style={{ height: "18px", width: "18px" }} />
          <nav className="flex-1 text-sm font-semibold">
            Continue with Google
          </nav>
        </div>
        <div
          onClick={handleGitHubSign}
          className="cursor-pointer flex gap-16 items-center justify-center border rounded-full p-2 w-full"
        >
          <img
            className="w-5 h-5"
            src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
          ></img>
          <nav className="flex-1 text-sm font-normal">Continue with GitHub</nav>
        </div>
        <div className="flex justify-center p-6">
          <nav className="text-xs font-normal">OR</nav>
        </div>
        <div className="flex flex-col w-full relative">
          <label
            className={`${
              isInputFocused || email
                ? "absolute text-xs top-0 left-5 text-[#576f76] transition-top duration-300 ease-in-out delay-0 cursor-pointer"
                : "text-[#576f76] absolute top-3 left-5"
            }`}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleEmailInput(e)}
            onFocus={handleInputFocus}
            autoComplete="off"
            className="outline-0 indent-2 rounded-[18px] p-3 bg-[#eaedef] mb-4"
          ></input>
        </div>
        <div className="flex flex-col w-full relative">
          <label
            className={`${
              isPassInputFocused || pass
                ? "absolute text-xs top-0 left-5 text-[#576f76] transition-top duration-300 ease-in-out delay-0 cursor-pointer"
                : "text-[#576f76] absolute top-3 left-5"
            }`}
          >
            Password
          </label>
          <input
            type="password"
            value={pass}
            onChange={(e) => handlePassInput(e)}
            onFocus={handlePassInputFocus}
            autocomplete="off"
            className="outline-0 indent-2 rounded-[18px] p-3 bg-[#eaedef] mb-4"
          ></input>
        </div>
        {showErr && (
          <nav className="text-sm text-red-600 font-semibold">
            Incorrect Email Id or Password
          </nav>
        )}
        <div className="mb-4 text-sm pl-2 pb-4 flex gap-1 w-full">
          <nav>New to Reddit?</nav>
          <nav
            onClick={() => {
              dispatch(showSignUp()), dispatch(openLogin());
            }}
            className="text-blue-700 cursor-pointer"
          >
            Sign Up
          </nav>
        </div>
        <div
          onClick={signin}
          className="flex justify-center bg-D93A00 hover:bg-962900 rounded-full p-3 cursor-pointer"
        >
          <button className="text-white text-sm font-bold">Log In</button>
        </div>
      </div>
    </div>
  );
}
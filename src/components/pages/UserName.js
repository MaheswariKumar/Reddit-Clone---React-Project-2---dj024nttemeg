import React from "react";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setIsMob,
  showSignUp,
  showSetUsername,
  openLogin,
  setSignUp,
  isLoggedIn,
} from "../state/Action";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, registerWithEmailAndPassword } from "../firebase";
import BackIcon from "../icons/BackIcon";

export default function UserName() {
  const dispatch = useDispatch();
  const isMob = useSelector((state) => state.isMob);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isPassInputFocused, setIsPassInputFocused] = useState(false);
  const signUpForm = useSelector((state) => state.signUpForm);
  const [user] = useAuthState(auth);
  const [showErr, setShowErr] = useState(false);

  const register = async () => {
    const newtonSignUpRes = await fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: "dj024nttemeg",
        },
        body: JSON.stringify({
          name: signUpForm.username,
          email: signUpForm.email,
          password: signUpForm.password,
          appType: "reddit",
        }),
      }
    );

    if (newtonSignUpRes.status === 403) {
      setShowErr(true);
      return;
    }

    const newtonSignUpData = await newtonSignUpRes.json();
    dispatch(setSignUp("", "", ""));
    dispatch(showSetUsername());
    dispatch(showSignUp());
    dispatch(openLogin());
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      dispatch(isLoggedIn());
    } else {
      console.log("No user is signed in.");
    }
  });

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

  const handleUserNameInput = (e) => {
    dispatch(setSignUp(e.target.value, signUpForm.email, signUpForm.password));
  };

  const handlePassInput = (e) => {
    dispatch(setSignUp(signUpForm.username, signUpForm.email, e.target.value));
  };

  useEffect(() => {
    if (signUpForm.username === "") {
      setIsInputFocused(false);
    }
    if (signUpForm.password === "") {
      setIsPassInputFocused(false);
    }
  }, [signUpForm.username, signUpForm.password]);

  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center rounded-[15px] bg-white mx-6 w-full max-w-[535px] h-auto ${
        isMob ? "px-10" : null
      } py-6`}
    >
      <div
        className={`flex justify-start items-center w-full ${
          isMob ? null : "pr-3"
        }`}
        onClick={() => dispatch(showSetUsername())}
      >
        <div className="cursor-pointer flex items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300">
          <BackIcon />
        </div>
      </div>
      <div className="px-8 w-full min-h-[470px]">
        <nav className="font-bold text-2xl">
          Create your username and password
        </nav>
        <p className="text-sm my-3 pb-2">
          Reddit is anonymous, so your username is what you’ll go by here.
          Choose wisely—because once you get a name, you can’t change it.
        </p>
        <div className="flex flex-col w-full relative">
          <label
            className={`${
              isInputFocused || signUpForm.username
                ? "absolute text-xs top-0 left-5 text-[#576f76] transition-top duration-300 ease-in-out delay-0 cursor-pointer"
                : "text-[#576f76] absolute top-3 left-5"
            }`}
          >
            Username
          </label>
          <input
            required
            type="email"
            value={signUpForm.username}
            onChange={(e) => handleUserNameInput(e)}
            onFocus={handleInputFocus}
            className="outline-0 indent-2 rounded-[18px] p-3 bg-[#eaedef] mb-4"
          ></input>
        </div>
        <div className="flex flex-col w-full relative">
          <label
            className={`${
              isPassInputFocused || signUpForm.password
                ? "absolute text-xs top-0 left-5 text-[#576f76] transition-top duration-300 ease-in-out delay-0 cursor-pointer"
                : "text-[#576f76] absolute top-3 left-5"
            }`}
          >
            Password
          </label>
          <input
            required
            type="password"
            value={signUpForm.password}
            onChange={(e) => handlePassInput(e)}
            onFocus={handlePassInputFocus}
            className="outline-0 indent-2 rounded-[18px] p-3 bg-[#eaedef] mb-4"
          ></input>
        </div>
        {showErr && (
          <nav className="text-sm text-red-600 font-semibold">
            User already Exits
          </nav>
        )}
      </div>
      <div
        onClick={register}
        className={`flex w-full justify-center ${
          signUpForm.password && signUpForm.username
            ? "bg-D93A00 hover:bg-962900 text-white"
            : "bg-slate-50"
        } rounded-full p-3 cursor-pointer`}
      >
        <button className="text-sm font-medium">Continue</button>
      </div>
    </div>
  );
}
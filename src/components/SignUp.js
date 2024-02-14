import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMob, showSignUp, openLogin, setSignUp, showSetUsername} from "./Action";
import { signInWithGoogle, signInWithGitHub } from "./firebase";
import CloseIcon from "./icons/CloseIcon";
import GoogleIcon from "./icons/GoogleIcon";

export default function SignUp() {
    const dispatch = useDispatch();
    const isMob = useSelector((state) => state.isMob);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const signUpForm = useSelector((state) => state.signUpForm);

    useEffect(()=>{
        const handleReSize = () => {
            dispatch(setIsMob(window.innerWidth>=500));
        }

        window.addEventListener("resize", handleReSize);

        return () => {
            window.removeEventListener("resize", handleReSize);
        }
    }, [])

    const handleInputFocus = () => {
        setIsInputFocused(true);
    };

    const handleEmailInput = (e) => {
        dispatch(setSignUp(signUpForm.username, e.target.value, signUpForm.password))
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(e.target.value));
    }

    useEffect(()=>{
        console.log(signUpForm.email)
    }, [signUpForm.email])

    return (
        <div className={`flex flex-col gap-3 items-center justify-center rounded-[15px] bg-white mx-6 w-full max-w-[535px] h-auto ${isMob ? "px-12" : null} py-6`}>
            <div className={`flex justify-end items-center w-full ${isMob ? null : "pr-3"}`} onClick={()=> dispatch(showSignUp())}>
                <div className="cursor-pointer flex items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300">
                    <CloseIcon style={{ height: '16px', width: '16px', color: 'black' }}/>
                </div>  
            </div>
            <div className="px-8 w-full">
                <nav className="font-bold text-2xl">Sign Up</nav>
                <p className="text-sm my-3 pb-2">By continuing, you agree to our <a href="https://www.redditinc.com/policies/user-agreement" target="_blank" className="text-blue-700">User Agreement</a> and acknowledge that you understand the <a className="text-blue-700" href="https://www.reddit.com/policies/privacy-policy" target="_blank">Privacy Policy</a>.</p>
                <div onClick={signInWithGoogle} className="cursor-pointer flex mt-2 gap-16 items-center justify-center border-r border-t border-l rounded-full p-2 mb-2 w-full">
                    <GoogleIcon style={{ height: '18px', width: '18px' }}/>
                    <nav className="flex-1 text-sm font-semibold">Continue with Google</nav>
                </div>
                <div onClick={signInWithGitHub} className="cursor-pointer flex gap-16 items-center justify-center border rounded-full p-2 w-full">
                    <img className="w-5 h-5" src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"></img>
                    <nav className="flex-1 text-sm font-normal">Continue with GitHub</nav>
                </div>
                <div className="flex justify-center p-6">
                    <nav className="text-xs font-normal">OR</nav>
                </div>
                <div className="flex flex-col w-full relative">
                    <label className={`${isInputFocused || signUpForm.email ? "absolute text-xs top-0 left-5 text-[#576f76] transition-top duration-300 ease-in-out delay-0 cursor-pointer" : "text-[#576f76] absolute top-3 left-5" }`}>Email</label>
                    <input required type="email" value={signUpForm.email} onChange={(e)=> handleEmailInput(e)} onFocus={handleInputFocus} className="outline-0 indent-2 rounded-[18px] p-3 bg-[#eaedef] mb-4"></input>
                </div>
                <div className="mb-20 text-sm pl-2 pb-4 flex gap-1 w-full">
                    <nav>Already a redditor?</nav>
                    <nav onClick={()=> {dispatch(openLogin()), dispatch(showSignUp())}} className="text-blue-700 cursor-pointer">Log In</nav>
                </div>
                <div onClick={()=> {dispatch(showSetUsername())}} className={`flex justify-center rounded-full p-3 cursor-pointer ${signUpForm.email ? "bg-D93A00 hover:bg-962900 text-white" : "bg-slate-50 text-slate-400"}`}>
                    <button className="text-sm font-medium">Continue</button>
                </div>
            </div>
        </div>
    )
}
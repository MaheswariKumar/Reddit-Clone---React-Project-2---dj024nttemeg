import React from "react";
import CloseIcon from "./icons/CloseIcon";
import GoogleIcon from "./icons/GoogleIcon";

export default function Login() {
    return (
        <div className="flex flex-col gap-3 items-center justify-center rounded bg-white mx-6 w-full max-w-[450px] h-auto px-4 py-6">
            <div className="flex justify-end items-center w-full">
                <div className="cursor-pointer flex items-center rounded-full bg-gray-200 p-2 hover:bg-gray-300" onClick={()=> dispatch(openQR())}>
                    <CloseIcon style={{ height: '16px', width: '16px', color: 'black' }}/>
                </div>  
            </div>
            <div className="px-8 w-full">
                <nav className="font-bold text-2xl">Log In</nav>
                <p className="text-sm my-1">By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.</p>
                <div className="flex gap-14 items-center justify-center w-[368px] m-w-[400px] border-r border-t border-l rounded-full p-2 mb-2">
                    <GoogleIcon style={{ height: '18px', width: '18px' }}/>
                    <nav className="flex-1">Continue with Google</nav>
                </div>
                <div className="flex gap-14 items-center justify-center w-[368px] m-w-[400px] border rounded-full p-2">
                    <img className="w-5 h-5" src="https://reddit-clone-jishnu.vercel.app/static/media/GitHub_logo.6fc94f867c0f26e5c48b.png"></img>
                    <nav className="flex-1">Continue with Apple</nav>
                </div>
                <div className="flex justify-center">
                    <nav className="border-r border-l">OR</nav>
                </div>
                <div className="flex flex-col">
                    <input placeholder="Email"></input>
                    <input placeholder="Password"></input>
                    <button>Log In</button>
                </div>
                <div>
                    <nav>New to Reddit? Sign Up</nav>
                </div>
            </div>
        </div>
    )
}
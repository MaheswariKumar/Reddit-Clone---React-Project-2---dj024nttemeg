import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    auth,
  } from "./firebase";
import SideBar from "./SideBar";
import CustomPlusIcon from "./icons/CustomPlusIcon";

// text-[#818384] 

export default function CreatePost() {
    const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const isMobile = useSelector((state) => state.isMobile);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
    const [post, setPost] = useState(true);
    const [img, setImg] = useState(false);
    const [link, setLink] = useState(false);
    const [inputTitle, setInputTitle] = useState("");
    const [inputText, setInputText] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const navigate = useNavigate();

    function handlePost() {
        setPost(true);
        setImg(false);
        setLink(false);
    }

    function handleImg() {
        setPost(false);
        setImg(true);
        setLink(false);
    }

    function handleLink() {
        setPost(false);
        setImg(false);
        setLink(true);
    }

    const handleTitle = (e) => {
        setInputTitle(e.target.value);
    }

    const handleInput = (e) => {
        setInputText(e.target.value)
        setButtonDisabled(true);
    }


// Assuming the user is already authenticated
// const [user] = useAuthState(auth);
// console.log(user);
// console.log(user.email);
// const [user] = useAuthState(auth);
// console.log(user)

const handleCreatePost = async () => {
    // try {
    //   const formData = new FormData();
    //   formData.append('title', `${inputTitle}`);
    //   formData.append('content', `${inputText}`);
    //   formData.append('images', 'https://images.indianexpress.com/2022/12/NewtonSchool_LEAD.jpg?w=414');
  
    //   const response = await fetch('https://academics.newtonschool.co/api/v1/reddit/post/', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmY4ZWI0Yjk5NzNhZDlkYTg0YTBiYSIsImlhdCI6MTcwNzA1MjgwNCwiZXhwIjoxNzM4NTg4ODA0fQ.IrP0kNt3UaHKqg4QXG7EpypG7K6BggcrzDyn3b46OaM`,
    //       'projectID': 'dj024nttemeg',
    //     },
    //     body: formData,
    //   });
  
    //   if (!response.ok) {
    //     throw new Error(`HTTP error! Status: ${response.status}`);
    //   }
  
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error('Error in handleCreatePost:', error);
    // }
  
  };
  

// const handleCreatePost = () => {
//     if (user) {
//         user.getIdToken()
//         .then((idToken) => {
//           console.log('ID Token:', idToken);
    
//           const formData = new FormData();
//           formData.append('title', `${inputTitle}`);
//           formData.append('content', `${inputText}`);
//           formData.append('images', 'https://images.indianexpress.com/2022/12/NewtonSchool_LEAD.jpg?w=414');
    
    
//       fetch('https://academics.newtonschool.co/api/v1/reddit/post/', {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmY4ZWI0Yjk5NzNhZDlkYTg0YTBiYSIsImlhdCI6MTcwNzA1MjgwNCwiZXhwIjoxNzM4NTg4ODA0fQ.IrP0kNt3UaHKqg4QXG7EpypG7K6BggcrzDyn3b46OaM`,
//           'projectID': 'dj024nttemeg',
//         },
//         body: formData
//       })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => console.log(data))
//       .catch(error => console.error('API Request Error:', error));
//     })
//     .catch((error) => {
//       console.error('Error getting ID token:', error);
//     });
//     } else {
//     // User is not authenticated
//     console.log('User not authenticated');
//     }
//     setInputText("")
//     setInputTitle("")
// }

    return (
        <div className={`${!isUserLoggedin ? "bg-white" : (checkedTheme ? "bg-black" : "bg-gray-300")} py-1 pr-1 flex justify-between w-full max-w-full min-h-screen mt-12`}>
        {isMobile && isSideBarOpen  && <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />}
            <div className="flex justify-center w-full mt-5">
                <div className={`flex w-full max-w-[45rem] flex-col m-2 ${checkedTheme ? "text-[#d7dadc]" : null}`}>
                    <div className={`flex justify-between items-center px-2`}>
                        <nav className={`text-lg font-semibold`}>Create a post</nav>
                        <div className={`flex gap-1 items-center justify-center cursor-pointer rounded-full ${checkedTheme ? "hover:bg-[#1A1A1B]" : "hover:bg-zinc-200"} px-3 p-2`}>
                            <nav className={`text-xs font-bold ${checkedTheme ? "text-[#d7dadc]" : "text-[#0079d3]"}`}>DRAFTS</nav>
                            <nav className={`text-xs rounded px-1 font-semibold ${checkedTheme ? "all" : "text-white bg-gray-500"}`}>0</nav>
                        </div>
                    </div>
                    <nav className={`mt-3 ${checkedTheme ? "border-[#343536] border" : "border"}`}></nav>
                    <div className="flex justify-start mt-4">
                        <div className={`flex gap-1 items-center py-1 px-3 pr-44 rounded ${checkedTheme ? "all" : "bg-white"}`}>
                            <img className="h-8 w-8" src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png"></img>
                            <nav className="text-sm font-normal">Nandi</nav>
                        </div>
                    </div>
                    <div className={`rounded mt-3 ${checkedTheme ? "all" : "bg-white"}`}>
                        <div className={`flex justify-evenly h-14 mb-5 ${checkedTheme ? "border-[#343536] border-b" : "border-b"}`}>
                            <div onClick={handlePost} className={`cursor-pointer flex gap-2 items-center justify-center text-sm font-bold ${checkedTheme && post ? "all" : !checkedTheme && post ? "text-[#0079d3]" : checkedTheme && !post ? "text-zinc-400" : "text-zinc-700"}`}> 
                                {!checkedTheme && post ? <img width="25" height="25" src="https://img.icons8.com/ios/50/228BE6/add-list.png" alt="add-list"/> :
                                checkedTheme && post ? <img width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/add-list.png" alt="add-list"/> : 
                                <img width="25" height="25" src="https://img.icons8.com/ios/50/737373/add-list.png" alt="add-list"/>}                            
                                <nav>Post</nav>
                            </div>
                            <nav className={`${checkedTheme ? "border-[#343536] border" : "border"}`}></nav>
                            <div onClick={handleImg} className={`cursor-pointer flex gap-2 items-center justify-center  text-sm font-bold ${checkedTheme && img ? "all" : !checkedTheme && img ? "text-[#0079d3]" : checkedTheme && !img ? "text-zinc-400" : "text-zinc-700"}`}>                              
                                {!checkedTheme && img ? <img width="25" height="25" src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/228BE6/external-image-interface-anggara-basic-outline-anggara-putra-2.png" alt="external-image-interface-anggara-basic-outline-anggara-putra-2"/> :
                                checkedTheme && img ? <img width="24" height="24" src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/FFFFFF/external-image-user-interface-anggara-basic-outline-anggara-putra-3.png" alt="external-image-user-interface-anggara-basic-outline-anggara-putra-3"/> :
                                <img width="25" height="25" src="https://img.icons8.com/external-basicons-line-edtgraphics/50/737373/external-Picture-images-basicons-line-edtgraphics.png"></img>}
                                <nav>Image</nav>
                            </div>
                            <nav className={`${checkedTheme ? "border-[#343536] border" : "border"}`}></nav>
                            <div onClick={handleLink} className={`cursor-pointer flex gap-2 items-center justify-center   text-sm font-bold ${checkedTheme && link ? "all" : !checkedTheme && link ? "text-[#0079d3]" : checkedTheme && !link ? "text-zinc-400" : "text-zinc-700"}`}>                               
                                {!checkedTheme && link ? <img width="25" height="25" src="https://img.icons8.com/sf-regular-filled/48/228BE6/link.png" alt="link"/> :
                                checkedTheme && link ? <img width="25" height="25" src="https://img.icons8.com/sf-regular/48/FFFFFF/link.png" alt="link"/> : 
                                <img width="25" height="25" src="https://img.icons8.com/sf-regular-filled/48/737373/link.png"></img>}
                                <nav>Link</nav>
                            </div>
                            <nav className={`${checkedTheme ? "border-[#343536] border" : "border"}`}></nav>
                            <div className={`flex gap-2 items-center justify-center cursor-not-allowed  text-sm font-bold ${checkedTheme ? "" : ""}`}>
                                <img width="25" height="25" src="https://img.icons8.com/dotty/80/737373/form.png" alt="form"/>
                                {/* <img width="25" height="25" src="https://img.icons8.com/dotty/80/228BE6/form.png" alt="form"/> */}
                                <nav className={`${checkedTheme ? "text-zinc-700" : "text-zinc-300"}`}>Poll</nav>
                            </div>
                        </div>
                        <div className={`mx-2 mb-3 p-1.5 ${checkedTheme ? "" : ""}`}>
                            <input value={inputTitle} onChange={(e) => handleTitle(e)} style={{width: "100%"}} type="text" placeholder="Title" className={`outline-1 h-11 indent-2 ${checkedTheme ? "all all border-[#343536] border" : "border"}`}></input>
                        </div>
                        {img ? <div className={`h-40 mx-3 mb-5 ${checkedTheme ? "border-[#343536] border" : "border"} ${img ? "placehold" : null }`}>
                            <nav className={`${checkedTheme ? "text-[#d7dadc] border border-[#d7dadc]" : "text-[#0079d3] border border-[#0079d3]"} font-bold p-1.5 px-3.5 rounded-full`}>Upload</nav> 
                        </div> :
                        <div className="h-40 box-border resize-y mx-3 mb-5"><textarea value={inputText} style={{width: "100%", boxSizing: "border-box"}} className={`h-40 outline-1 indent-3 ${checkedTheme ? "all border-[#343536] border" : "border"}`} onChange={(e)=> handleInput(e)} placeholder={post ? "Text (Optional)" : (link ? "Enter URL" : null)}></textarea></div> }
                        <div className="flex justify-start gap-3 pl-2 mb-4">
                            <div className={`cursor-not-allowed font-semibold flex gap-2 rounded-full items-center justify-center p-2 px-4  ${checkedTheme ? "border-[#343536] border text-zinc-700" : "border text-zinc-300"}`}>
                                <CustomPlusIcon />
                                <nav>OC</nav>
                            </div>
                            <div className={`cursor-not-allowed font-semibold flex gap-2 rounded-full items-center justify-center p-2 px-4  ${checkedTheme ? "border-[#343536] border text-zinc-700" : "border text-zinc-300"}`}>
                                <CustomPlusIcon />
                                <nav>Spoiler</nav>
                            </div>
                            <div className={`cursor-not-allowed font-semibold flex gap-2 rounded-full items-center justify-center p-2 px-4  ${checkedTheme ? "border-[#343536] border text-zinc-700" : "border text-zinc-300"}`}>
                                <CustomPlusIcon />
                                <nav>NSFW</nav>
                            </div>
                            <div className={`cursor-not-allowed font-semibold flex gap-2 rounded-full items-center justify-center p-2 px-4  ${checkedTheme ? "border-[#343536] border text-zinc-700" : "border text-zinc-300"}`}>
                                <CustomPlusIcon />
                                <nav>Flair</nav>
                            </div>
                        </div>
                        <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} mb-4 mx-3`}></nav>
                        <div className="flex justify-end pr-2 mb-4 pr-3 gap-2 font-semibold">
                            <nav className={`cursor-not-allowed ${checkedTheme ? "border-[#343536] border text-zinc-700" : "border text-zinc-300"} px-4 rounded-full p-1`}>Save Draft</nav>
                            <button onClick={() => {handleCreatePost(); navigate(`/user/${inputTitle}`)}} className={`${!checkedTheme && buttonDisabled ? "bg-[#0079d3] text-[#d7dadc]" : checkedTheme && buttonDisabled ? "bg-[#d7dadc] text-[#1A1A1B]" : checkedTheme && !buttonDisabled ? "bg-zinc-700 text-[#d7dadc]" : "bg-zinc-400 text-[#d7dadc]"} px-4 rounded-full p-1`}>Post</button>
                        </div>
                        <nav className={`${checkedTheme ? "border-[#343536] border" : "border"}`}></nav>
                        <div className={`flex flex-col pt-4 pl-2 gap-2 pb-5 ${checkedTheme ? "text-[#d7dadc] bg-[#272729]" : "bg-[#f6f7f8]"}`}>
                            <div className="flex gap-1">
                                <input type="checkbox"></input>
                                <nav className="text-sm font-bold">Send me post reply notifications</nav>
                            </div>
                            <div className="flex gap-1">
                                <nav className="text-sm font-bold text-[#0079d3]">Connect accounts to share your post</nav>
                                <img width="20" height="18" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1"/>
                            </div>
                        </div>
                    </div>
                </div>
             {isMobile &&                 <div className={`flex flex-col gap-4 w-full max-w-[20rem] flex-col m-2 mb-5 mt-8`}>
                    <div className={`flex flex-col rounded pb-3 ${checkedTheme ? "all" : "bg-white"}`}>
                        <div className="flex items-center pt-3 pl-2 p-1">
                            <img className="w-10 h-10" src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png" alt="Prof_Img"></img>
                            <nav className="font-semibold">Posting to Reddit</nav>
                        </div>
                        <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} mx-3`}></nav>
                        <nav className="p-2 pl-5 text-sm font-semibold">1.Remember the human</nav>
                        <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} mx-3`}></nav>
                        <nav className="p-2 pl-5 text-sm font-semibold">2.Behave like you would in real life</nav>
                        <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} mx-3`}></nav>
                        <nav className="p-2 pl-5 text-sm font-semibold">3.Look for the original source of content</nav>
                        <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} mx-3`}></nav>
                        <nav className="p-2 pl-5 text-sm font-semibold">4.Search for duplicates before posting</nav>
                        <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} mx-3`}></nav>
                        <nav className="p-2 pl-5 text-sm font-semibold">5.Read the community’s rules</nav>
                        <nav className={`${checkedTheme ? "border-[#343536] border" : "border"} mx-3`}></nav>
                    </div>
                    <div className="flex">
                        <nav className="text-xs font-bold text-[#7c7c7c]">Please be mindful of reddit's <a href="https://www.redditinc.com/policies/content-policy" className="text-[#0079d3]">content policy</a> and practice <a className="cursor-pointer text-[#0079d3]">good reddiquette.</a></nav>
                    </div>
                </div>}   
            </div>
        </div>
    )
}
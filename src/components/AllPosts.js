import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeTheme, setID, setMsg, setShowMsg } from "./Action";
import ViewCardOutlineIcon from "./icons/ViewCardOutlineIcon";
import ViewClassicFillIcon from "./icons/ViewClassicFillIcon";
import ViewCardFillIcon from "./icons/ViewCardFillIcon";
import ViewClassicOutlineIcon from "./icons/ViewClassicOutlineIcon";
import CaretDownOutlineIcon from "./icons/CaretDownOutlineIcon";
import SideBar from "./SideBar";

export default function AllPosts() {
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const checkedStatus = useSelector((state) => state.checkedStatus);
    const isTab = useSelector((state) => state.isTab);
    const isMobile = useSelector((state) => state.isMobile);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
    const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
    const logginUserToken = useSelector((state) => state.logginUserToken);
    const logginUserName = useSelector((state) => state.logginUserName);
    const postTime = useSelector((state) => state.postTime);
    const authorName = useSelector((state) => state.authorName);
    const [best, setBest] = useState(true)
    const [hot, setHot] = useState(false)
    const [newopt, setNewOpt] = useState(false)
    const [info, setInfo] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getId = useSelector((state) => state.getId);
    const [isLoading, setIsLoading] = useState(true);
    const [inputTitle, setInputTitle] = useState("");
    const [inputText, setInputText] = useState("");
    const [edited, setedited] = useState(false);
    const [dropdownPosition, setDropdownPosition] = useState({
        top: "120px",
        left: "1000px",
      });
      const [dropdownMaxPosition, setDropdownMaxPosition] = useState({
        top: "120px",
        left: "975px",
      });

      const handleResize = () => {
        const rect = document
          .getElementById("dropdown-button")
          ?.getBoundingClientRect();
        if (rect) {
          setDropdownPosition({
            top: `${rect.bottom + 7}px`,
            left: `${rect.left - 35}px`,
          });
          setDropdownMaxPosition({
            top: `${rect.bottom + 7}px`,
            left: `${rect.left - 35}px`,
          });
        }
      };

      const IntialState = {
        showDropDown: false,
        showMin: true,
        showMax: false,
        isLoading: true,
      };
    
      function StateReducer(state, action) {
        switch (action.type) {
          case "showoption":
            return {
              ...state,
              showDropDown: !state.showDropDown,
            };
    
          case "showminoption":
            return {
              ...state,
              showMin: true,
              showMax: false,
              showDropDown: false,
            };
    
          case "showmaxoption":
            return {
              ...state,
              showMax: true,
              showMin: false,
              showDropDown: false,
            };
    
          case "loaded":
            return {
              ...state,
              isLoading: false,
            };
    
          default:
            return state;
        }
      }
    
      const [state, StateDisptch] = useReducer(StateReducer, IntialState);

    function handleBest() {
      setBest(true)
      setHot(false)
      setNewOpt(false)
    }

    function handleHot() {
      setBest(false)
      setHot(true)
      setNewOpt(false)
    }

    function handleNew() {
      setBest(false)
      setHot(false)
      setNewOpt(true)
    }

    function handlePost() {
      navigate("/submit")
    }

    // const handleComment = (data, id) => {
    //   dispatch(setID(id))
    //   navigate(`/r/${data}/comments`);
    // };

    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    
      async function getData() {
        try {
          const rs = await axios.get(
            `https://academics.newtonschool.co/api/v1/reddit/user/${getId}/posts`,
            {
              headers: {
                projectID: "dj024nttemeg",
              },
            }
          );
          if (Array.isArray(rs.data.data)) {
            setInfo(rs.data.data);
        } 
        else if (typeof rs.data.data === 'object' && rs.data.data !== null) {
            setInfo([rs.data.data]);
        }
          console.log(rs.data.data);
          console.log(rs.data.data.content);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }

    useEffect(() => {
      getData()
      console.log(postTime)
    }, [])

    const handleDeletePost = async (id) => {
      try {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/reddit/post/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${logginUserToken}`,
            'projectID': 'dj024nttemeg',
          },

        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (response.status === 204) {
          console.log('Post deleted successfully');
          setInfo(info.filter(post => post._id !== id));
        }
    
        const data = await response.json();

        console.log(data);
      } catch (error) {
        console.error('Error in handleDeletePost:', error);
      }

      getData();
    
    };

    const handleTitle = (e) => {
      setInputTitle(e.target.value);
  }

  const handleInput = (e) => {
      setInputText(e.target.value)
  }

  const handleEditPost = async (id) => {
    try {
      const formData = new FormData();
      if (inputTitle) {
        formData.append('title', inputTitle);
      }
      if (inputText) {
        formData.append('content', inputText);
      }

  
      const response = await fetch(`https://academics.newtonschool.co/api/v1/reddit/post/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${logginUserToken}`,
          'projectID': 'dj024nttemeg',
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      
      if (data.data && data.data._id) {
        console.log(data.data._id)
        dispatch(setID(data.data._id));
        navigate(`/user/${inputTitle}/${data.data._id}`);
        console.log(data);
    } else {
        console.error('Data or _id property is missing in the response:', data);
    }
    //   console.log(data._id);
    //   dispatch(setID(data._id))
    //   navigate(`/user/${inputTitle}/${data._id}`)
    //   console.log(data);
    } catch (error) {
      console.error('Error in handleCreatePost:', error);
    }  

    setedited(false);
    getData()
  };


    return (
        <>
        <div className={`${!isUserLoggedin ? "bg-white" : (checkedTheme ? "bg-black" : "bg-gray-300")} py-1 pr-1 flex justify-between w-full min-h-[100vh] max-w-full ${state.isLoading ? null : "mt-12"}`}>
          {isMobile && isSideBarOpen  && <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />}
          {isLoading ? 
                <div className="flex items-center justify-center h-screen flex-1">
                <img
                  src="https://www.svgrepo.com/show/452094/reddit.svg"
                  alt="Reddit Logo"
                  className="w-12 h-12 transition ease-in-out duration-300 animate-ping"
                />
              </div> : 
          <div className="flex justify-center w-full mt-16">
        <div className={`flex w-full ${state.showMax ? "max-w-[52rem]" : "max-w-[40rem]"} flex-col m-2`}>
            <div onClick={()=> navigate("/submit")} className={`flex h-14 items-center gap-3 px-2 rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <div className="cursor-pointer">
                    <div className="w-12 h-12">
                        <img src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png" alt="Prof_Img"></img>
                    </div>
                    {/* {checkedStatus && <nav className="w-4 h-4 rounded-full bg-[#46d160] relative left-6 bottom-3 border-inherit border-2"></nav>} */}
                </div>
                <div onClick={handlePost} className={`w-full flex items-center ${checkedTheme ? "bg-[#272729]" : "bg-gray-100"} max-w-2xl mt-0.5`}>
                    <input className={`${checkedTheme ? "bg-[#272729]" : "bg-gray-100"} outline-0 indent-4 p-2 rounded-full w-3/6 font-sans placeholder-gray-500`} type="text" placeholder="Create Post"></input>
                </div>              
                <div className={`${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"} h-8 w-10 rounded-lg flex items-center justify-center cursor-pointer`}>
                    <img width="23" height="23" src="https://img.icons8.com/external-basicons-line-edtgraphics/50/737373/external-Picture-images-basicons-line-edtgraphics.png" alt="external-Picture-images-basicons-line-edtgraphics"/>
                </div>
                <div className={`${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"} h-8 w-10 rounded-lg flex items-center justify-center cursor-pointer`}>
                    <img width="25" height="25" src="https://img.icons8.com/sf-regular-filled/48/737373/link.png" alt="link"/>
                </div>
            </div>  
            <div className={`mt-4 h-14 flex justify-between items-center gap-3 px-2 rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <div className="flex items-center gap-3 px-1">
                    <div onClick={handleBest} className={`${best && checkedTheme ? "bg-[#272729]" : !best && checkedTheme ? null : best && !checkedTheme ? "bg-gray-100" : null} flex items-center gap-2 p-1 px-2 rounded-full cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200"}`}>
                        <img width="24" height="24" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/737373/external-rocket-transportation-tanah-basah-basic-outline-tanah-basah.png" alt="external-rocket-transportation-tanah-basah-basic-outline-tanah-basah"/>
                        <nav className="font-semibold">Best</nav>
                    </div>
                    <div onClick={handleHot} className={`${hot && checkedTheme ? "bg-[#272729]" : !hot && checkedTheme ? null : hot && !checkedTheme ? "bg-gray-100" : null} flex items-center gap-2 p-1 px-2 rounded-full cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200"}`}>
                        <img width="24" height="24" src="https://img.icons8.com/sf-regular/48/737373/fire-element.png" alt="fire-element"/>
                        <nav className="font-semibold">Hot</nav>
                    </div>
                    <div onClick={handleNew} className={`${newopt && checkedTheme ? "bg-[#272729]" : !newopt && checkedTheme ? null : newopt && !checkedTheme ? "bg-gray-100" : null} flex items-center gap-2 p-1 px-2 rounded-full cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200"}`}>
                        <img width="28" height="24" src="https://img.icons8.com/parakeet-line/48/737373/new.png" alt="new"/>
                        <nav className="font-semibold">New</nav>
                    </div>
                </div>
                <>
                {isTab && (
                <div
                  onClick={() => {StateDisptch({ type: "showoption" }), handleResize()}}
                  id="dropdown-button"
                  className={`flex items-center gap-1 max-w-2xl rounded-full p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" :(
                    state.showDropDown ? "bg-gray-300" : "hover:bg-gray-200"
                )}`}
                >
                  {state.showMin ? (
                    <ViewCardOutlineIcon />
                  ) : (
                    <ViewClassicOutlineIcon />
                  )}
                  <CaretDownOutlineIcon />
                </div>
              )}
              {isTab && state.showDropDown && (
                <>
                  <div
                    style={
                      state.showMax ? dropdownMaxPosition : dropdownPosition
                    }
                    className={`z-10 fixed shadow ${checkedTheme ? "all" : "bg-white"} w-32 rounded-sm`}
                  >
                    <nav className="p-3 pl-4 pb-2">View</nav>
                    <div>
                      <div
                        onClick={() => StateDisptch({ type: "showminoption" })}
                        className={`flex items-center gap-2 p-2 pl-6 h-12 cursor-pointer ${
                            checkedTheme && state.showMin
                              ? "bg-[#272729]"
                              : checkedTheme
                              ? "hover:bg-[#272729]"
                              : state.showMin
                              ? "bg-gray-300"
                              : "hover:bg-gray-200"
                          }`}
                      >
                        {state.showMin ? (
                          <ViewCardFillIcon />
                        ) : (
                          <ViewCardOutlineIcon />
                        )}
                        <nav>Card</nav>
                      </div>
                      <div
                        onClick={() => StateDisptch({ type: "showmaxoption" })}
                        className={`flex items-center gap-2 p-2 pl-6 h-12 cursor-pointer ${
                            checkedTheme && state.showMax
                              ? "bg-[#272729]"
                              : checkedTheme
                              ? "hover:bg-[#272729]"
                              : state.showMax
                              ? "bg-gray-300"
                              : "hover:bg-gray-200"
                          }`}
                      >
                        {state.showMax ? (
                          <ViewClassicFillIcon />
                        ) : (
                          <ViewClassicOutlineIcon />
                        )}
                        <nav>Classic</nav>
                      </div>
                    </div>
                  </div>
                </>
              )}
                </>
            </div> 
            {Array.isArray(info) ? info.map((data, idx) => (
              <div key={idx} className={`cursor-pointer flex mt-4 h-auto gap-3 pl-2 rounded ${checkedTheme ? "border border-[#343536]" : "border bg-white"}`}>
              <div className={`flex flex-col w-full px-3 pt-2 pb-1 gap-3 ${checkedTheme ? "all" : null}`}>
                <div className="flex items-center gap-2">
                  <img className="rounded-full w-10 h-10"></img>
                  <div className="text-gray-500 text-xs pl-2 flex gap-1">
                    <nav >Posted by</nav>
                    <nav className="hover:underline cursor-pointer">u/{authorName}</nav>
                  </div>
                  <nav className="text-gray-500 text-xs">{postTime}</nav>
                </div>
                <div className={`${state.showMax ? "w-32 h-32 rounded-lg" : null }`}>
                  {data.images.length > 0 ? <img src={data.images[0]} alt="Image"></img> :
                  null}
                </div>
                <div>
                  {data.content && <p>{data.content}</p>}
                </div>
                {edited &&                 <div className="flex flex-col">
            <div className={`mx-2 mb-3 p-1.5 ${checkedTheme ? "" : ""}`}>
                            <input value={inputTitle} onChange={(e) => handleTitle(e)} style={{width: "100%"}} type="text" placeholder="Title" className={`outline-1 h-11 indent-2 ${checkedTheme ? "all all border-[#343536] border" : "border"}`}></input>
            </div>
            <div className="h-40 box-border resize-y mx-3 mb-5"><textarea value={inputText} style={{width: "100%", boxSizing: "border-box"}} className={`h-40 outline-1 indent-3 ${checkedTheme ? "all border-[#343536] border" : "border"}`} onChange={(e)=> handleInput(e)} placeholder="Text (Optional)"></textarea></div>
            </div>}
                <div className="flex">
                <div className={`flex item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <img width="20" height="20" src="https://img.icons8.com/small/16/737373/forward-arrow.png" alt="forward-arrow"/>
                  <nav className="text-xs text-gray-500 font-bold">Share</nav>
                </div>
                {edited ? <div onClick={() => handleEditPost(data._id)} className={`flex text-gray-500 item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <img width="20" height="20" src="https://img.icons8.com/pastel-glyph/64/737373/create-new--v1.png" alt="create-new--v1"/>
                  <nav className="text-xs font-bold">Save</nav>
                </div> :
                <div onClick={() => setedited(true)} className={`flex text-gray-500 item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <img width="20" height="20" src="https://img.icons8.com/pastel-glyph/64/737373/create-new--v1.png" alt="create-new--v1"/>
                  <nav className="text-xs font-bold">Edit</nav>
                </div> }
                <div onClick={() => handleDeletePost(data._id)} className={`flex item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <img width="20" height="20" src="https://img.icons8.com/ios/50/737373/minus.png" alt="minus"/>
                  <nav className="text-xs text-gray-500 font-bold">Remove</nav>
                </div>
              </div>
              </div>
            </div> 
            ))
            :  <div className={`cursor-pointer flex h-auto gap-3 pl-2 rounded ${checkedTheme ? "border border-[#343536]" : "border bg-white"}`}>
            <div className={`flex flex-col px-3 pt-2 pb-3 gap-3 ${checkedTheme ? "all" : null}`}>
              <div className="flex items-center gap-2">
                <div className="text-gray-500 text-xs pl-2 flex gap-1">
                  <nav >Posted by</nav>
                  {info.author ? <nav className="hover:underline cursor-pointer">u/{info.author.name}</nav> : null }
                </div>
              </div>
              <div className="flex justify-center gap-2">
                <img className="w-72 h-72" src={info.images[0]} alt="Image"></img>
              </div>
              {info.content && <p className="pt-4">{info.content}</p>}
              
              <div className="flex">
                <div className={`flex item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <img width="20" height="20" src="https://img.icons8.com/small/16/737373/forward-arrow.png" alt="forward-arrow"/>
                  <nav className="text-xs text-gray-500 font-bold">Share</nav>
                </div>
                <div className={`flex text-gray-500 item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <img width="20" height="20" src="https://img.icons8.com/pastel-glyph/64/737373/create-new--v1.png" alt="create-new--v1"/>
                  <nav className="text-xs font-bold">Edit</nav>
                </div>
                <div onClick={() => handleDeletePost(info._id)} className={`flex item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <img width="20" height="20" src="https://img.icons8.com/ios/50/737373/minus.png" alt="minus"/>
                  <nav className="text-xs text-gray-500 font-bold">Remove</nav>
                </div>
            </div>
          </div>                                  
        </div> }
        <nav className="font-semibold text-gray-500 flex items-center justify-center pt-2">All you can get here</nav>
        </div>
        {isMobile && 
        <>
        <div className={`flex w-full max-w-[20rem] flex-col m-2`}>
            <div className={`flex flex-col rounded px-3 py-2 gap-3 ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                <div className="flex flex-col items-center justify-start gap-2 pt-3">
                    <div className="w-20 h-20">
                        <img src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png"></img>
                    </div>
                    <div className="flex flex-col">
                        <nav className="text-xs font-semibold">{logginUserName}</nav>
                        <nav className="text-gray-400 text-sm">u/{logginUserName}</nav>
                    </div>
                    <div className="flex justify-between gap-3">
                    <div className="flex items-center gap-1">
                            <img className="h-4 w-4 rounded-full" src="https://styles.redditmedia.com/t5_2qhhz/styles/communityIcon_6wrax3ocfar41.png"></img>
                            <nav className="text-gray-400 text-sm">1 Karma</nav>
                        </div>
                        <div className="flex items-center gap-1">
                            <img className="h-4 w-4 rounded-full" src="https://www.drawhipo.com/wp-content/uploads/2023/04/Birthday-Color-1-Birthday-Cake.png"></img>
                            <nav className="text-gray-400 text-sm">Jan 5 2024</nav>
                        </div>
                    </div>
                </div>
                <button onClick={()=> navigate("/submit")} className="rounded-full p-1 bg-[#ff4500] text-white font-semibold mb-3">New Post</button>
            </div>
            <button onClick={scrollToTop} className={`rounded-full mt-10 mx-24 fixed bottom-2 px-4 p-1 ${checkedTheme ? "text-[#1A1A1B] bg-[#d7dadc]" : "bg-[#0079d3] text-white"} font-semibold`}>Back to Top</button>
        </div>
        </>}
        </div>
        }
        </div>
        </>
    )
}
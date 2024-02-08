import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsMobile, setIsMob, setSideBar, openQR, openLogin, showMenuBar, setSearchTerm, setPostResults, setComutyResults, setPplResults, setDropOption, setCommunity } from "./Action";
import CustomLogo from "./icons/CustomLogo";
import MenuIcon from "./icons/MenuIcon";
import SearchIcon from "./icons/SearchIcon";
import QrCodeOutlineIcon from "./icons/QrCodeOutlineIcon";
import OverflowHorizontalOutlineIcon from "./icons/OverflowHorizontalOutlineIcon";
import CaretDownBigOutlineIcon from "./icons/CaretDownBigOutlineIcon";
import HomeFillIcon from "./icons/HomeFillIcon";
import PopularOutlineIcon from "./icons/PopularOutlineIcon";
import TopicActivismOutlineIcon from "./icons/TopicActivismOutlineIcon";
import NavBarMoreIcon from "./icons/NavBarMoreIcon";
import CustomSvgIcon from "./icons/CustomSvgIcon";
import CustomPlusIcon from "./icons/CustomPlusIcon";


export default function NavBar({toggleRef}){
    const isMobile = useSelector((state) => state.isMobile);
    const isTab = useSelector((state) => state.isTab);
    const isMob = useSelector((state) => state.isMob);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
    const isMenu = useSelector((state) => state.isMenu);
    const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
    const checkedStatus = useSelector((state) => state.checkedStatus);
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const searchTerm = useSelector((state) => state.searchTerm);
    const searchComutyResults = useSelector((state) => state.searchComutyResults);
    const showDropOption = useSelector((state) => state.showDropOption);
    const [searchBox, setSearchBox] = useState({
      top: "48px",
      left: "210px",
    });
    const dispatch = useDispatch();
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate(); 
    const dropDownRef = useRef(null)

    const handleOutsideClick = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        dispatch(setDropOption(false));
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);
    
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);
    
  //user:name => people , comment :content => comments, channel:name => community post:content=> posts
  const handlePostSearch = async () => {
    try {
        const encodedSearchTerm = encodeURIComponent(searchTerm);
        
        const response = await axios.get(
            `https://academics.newtonschool.co/api/v1/reddit/post?search={"content":"${encodedSearchTerm}"}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'projectID': 'dj024nttemeg',
                },
            }
        );

        const data = response.data;
        dispatch(setPostResults(data.data))
        console.log("post", data);
    } catch (error) {
        console.error('Error fetching song list:', error);
    }
};

const handleComutySearch = async () => {
  try {
      const encodedSearchTerm = encodeURIComponent(searchTerm);

      // Using Axios for the API call
      const response = await axios.get(
          `https://academics.newtonschool.co/api/v1/reddit/post?search={"channel.name":"${encodedSearchTerm}"}`,
          {
              headers: {
                  'Content-Type': 'application/json',
                  'projectID': 'dj024nttemeg',
              },
          }
      );

      const data = response.data;
      dispatch(setComutyResults(data.data))
      console.log("com", data);
  } catch (error) {
      console.error('Error fetching song list:', error);
  }
};

const handlePplSearch = async () => {
  try {
      const encodedSearchTerm = encodeURIComponent(searchTerm);

      // Using Axios for the API call
      const response = await axios.get(
          `https://academics.newtonschool.co/api/v1/reddit/post?search={"author.name":"${encodedSearchTerm}"}`,
          {
              headers: {
                  'Content-Type': 'application/json',
                  'projectID': 'dj024nttemeg',
              },
          }
      );

      const data = response.data;
      dispatch(setPplResults(data.data))
      console.log("ppl", data);
  } catch (error) {
      console.error('Error fetching song list:', error);
  }
};

  
    useEffect(() => {
      if (searchTerm) {
        handlePostSearch();
        handleComutySearch();
        handlePplSearch();
        console.log(searchTerm)
      } 
    }, [searchTerm]);

    const handleResize = () => {
      const rect = document
        .getElementById("search-box")
        ?.getBoundingClientRect();
      if (rect) {
        setSearchBox({
          top: `${rect.bottom}px`,
          left: `${rect.left - 1}px`,
        });
      }
    };

    useEffect(() => {
      handleResize();
      
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    useEffect(()=>{
        const handleReSize = () => {
            dispatch(setIsMobile(window.innerWidth>=1024, window.innerWidth>=768));
        }

        window.addEventListener("resize", handleReSize);

        return () => {
            window.removeEventListener("resize", handleReSize);
        }

    }, [])

    const togggleMenu = () => {
      dispatch(showMenuBar(!isMenu))
    }

    useEffect(()=>{
      const handleReSize = () => {
          dispatch(setIsMob(window.innerWidth>=500));
      }

      window.addEventListener("resize", handleReSize);

      return () => {
          window.removeEventListener("resize", handleReSize);
      }
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?${searchTerm}`);
    }
    dispatch(setSearchTerm(""))
  };

  const handleDropOption = () => {
    navigate(`/search?${searchTerm}`);
    dispatch(setSearchTerm(""))
  };

    // bg-[#272729, #343536] 
    return (
      <>
        <div className={`${checkedTheme ? "all" : null} p-1 pb-2 pl-4 pr-7 flex items-center justify-between ${checkedTheme ? "border-b border-[#343536]" : "border-b"} w-full bg-white fixed top-0 z-5 ${isMobile ? "gap-4" : "gap-6"}`}>
          <div className="flex items-center gap-2 pr-4 mr-1">
            {!isUserLoggedin && <div className="cursor-pointer" onClick={()=> dispatch(setSideBar(!isSideBarOpen))}>
              <MenuIcon />
            </div>}
            <img
              src="https://www.svgrepo.com/show/452094/reddit.svg"
              className="w-9 h-9"
            ></img>
            {isMobile && <CustomLogo />}
            {isUserLoggedin && <div onClick={()=> dispatch(setSideBar(!isSideBarOpen))} className={`flex justify-between items-center h-[45px] ${isMobile ? "w-[260px]" : null} hover:border cursor-pointer`}>
            <div className={`flex justify-start gap-2 rounded-sm cursor-pointer w-ful ${isMobile ? "p-3" : null}`}>
              <HomeFillIcon />
              {isMobile && <nav className="text-sm">Home</nav>}
            </div>
            <div>
            <CaretDownBigOutlineIcon />
            </div>
            </div>}
          </div>
          <div id="search-box" className={`w-full ${showDropOption ? "rounded-t-[1.2rem]" : "rounded-full"} flex items-center ${checkedTheme ? "bg-[#272729] hover:border-[white] hover:border" : "bg-gray-100 hover:border-[#0079d3] hover:border"} max-w-3xl`}>
            <div className="pl-4">
              <SearchIcon />
            </div>
            <input
              placeholder="Search Reddit"
              className={`${checkedTheme ? "bg-[#272729]" : "bg-gray-100"} p-2 rounded-full w-3/6 font-sans placeholder-gray-500 outline-0`}
              onChange={(e)=> dispatch(setSearchTerm(e.target.value))}
              onKeyDown={handleKeyDown}
              onClick={()=> dispatch(setDropOption(true))}
            />
          </div>
          {showDropOption && searchTerm &&           <div ref={dropDownRef} style={{ boxShadow: '0 2px 4px 0 rgba(28, 28, 28, 0.2)', ...(!isMob ? { top: "48px", left: "0px", width: "100%" } : searchBox),}} className={`${checkedTheme ? "all" : "bg-white"} flex flex-col text-[#1A1A1B] text-xs font-semibold bg-white h-10 max-w-60 w-[31rem] fixed`}>
            <h1 className="p-1">TRENDING TODAY</h1>
            {searchComutyResults.length > 0 && searchComutyResults.slice(0, 5).map((data, idx)=> (
              <div onClick={handleDropOption} key={idx} className={`cursor-pointer flex items-center gap-3 pl-3 p-2 ${checkedTheme ? "all hover:bg-[#343536]" : "bg-white hover:bg-gray-200"} `}>
                <img src={data.channel.image} className="w-8 h-8 rounded-full"></img>
                <nav>r/{data.channel.name}</nav>
              </div>
            ))}
          </div>}
          <div className="flex items-center gap-3" >
            {!isUserLoggedin ? <> {isMobile && (
              <div onClick={()=> dispatch(openQR())} className="flex items-center bg-gray-200 hover:bg-gray-300 max-w-2xl rounded-full p-2 pl-3 pr-3 gap-2 cursor-pointer">
                <QrCodeOutlineIcon />
                <nav className="text-sm font-semibold whitespace-nowrap">
                  Get app
                </nav>
              </div>
            )}
            <div onClick={()=> dispatch(openLogin())} className="bg-D93A00 hover:bg-962900 max-w-xl rounded-full p-3 gap-2 cursor-pointer">
              <nav className="text-sm font-semibold text-white whitespace-nowrap">
                Log In
              </nav>
            </div>
            <div onClick={togggleMenu}  className="cursor-pointer rounded-full hover:bg-gray-200 w-10 h-10 flex items-center justify-center">
              <OverflowHorizontalOutlineIcon />
            </div> </> :
            <>
            {isTab && <> <div className={`cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"} h-8 w-8 flex items-center justify-center`}>
            <PopularOutlineIcon />
            </div>
            <div className={`cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"} h-8 w-8 flex items-center justify-center`}>
              <NavBarMoreIcon />
            </div>
            <div className={`cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"} h-8 w-8 flex items-center justify-center`}>
              <CustomSvgIcon />
            </div>
            <div onClick={()=> dispatch(setCommunity())} className={`cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-300"} h-8 w-8 flex items-center justify-center`}>
              <CustomPlusIcon />
            </div>
            <div className={`cursor-pointer flex gap-1 items-center justify-center text-sm font-semibold ${checkedTheme ? "bg-[#272729]" : "bg-gray-200 hover:bg-gray-300"}  max-w-xl rounded-full py-1 px-2`}>
            <TopicActivismOutlineIcon />
            <nav>Advertise</nav>
            </div> </>}
            <div onClick={()=> dispatch(showMenuBar(!isMenu))}  className={`flex justify-between items-center h-[45px] ${isMobile ? "w-[280px]" : null} flex-1 border cursor-pointer`}>
            <div className="flex items-center">
              <div className="rounded-full bg=gray-400 w-10 h-10">
              <img src="https://i.redd.it/snoovatar/avatars/a23dbde1-4832-4cc6-b528-8e3637c03984-headshot.png" alt="Prof_Img"></img>
              {checkedStatus && <nav className="w-3 h-3 rounded-full bg-[#46d160] relative left-6 bottom-3 border-inherit border-2"></nav>}
              </div>
              {isMobile && <div className="flex flex-col">
                <nav className="font-semibold text-sm">Profile Name</nav>
                <div className="flex items-center gap-1">
                  <img className="h-4 w-4 rounded-full" src="https://styles.redditmedia.com/t5_2qhhz/styles/communityIcon_6wrax3ocfar41.png"></img>
                  <nav className="text-gray-400 text-sm">1 Karma</nav>
                </div>
              </div>}
            </div>
            <div>
            <CaretDownBigOutlineIcon />
            </div>
            </div>
            </>}
          </div>
        </div>
      </>
    );
}
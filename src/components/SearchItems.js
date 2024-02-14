import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { setID } from "./Action";
import { useSelector, useDispatch } from "react-redux";
import UpvoteOutlineIcon from "./icons/UpvoteOutlineIcon";
import DownvoteOutlineIcon from "./icons/DownvoteOutlineIcon";
import CommentOutlineIcon from "./icons/CommentOutlineIcon";
import PostPpl from "./PostPpl";
import Comments from "./Comments";
import SideBar from "./SideBar";

export default function SearchItems() {
    const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const isMobile = useSelector((state) => state.isMobile);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
    const searchPostResults = useSelector((state) => state.searchPostResults);
    const searchComutyResults = useSelector((state) => state.searchComutyResults);
    const searchPplResults = useSelector((state) => state.searchPplResults);
    const searchVal = useSelector((state) => state.searchVal);
    const navigate = useNavigate(); 
    const [post, setpost] = useState(true)
    const [cmt, setCmt] = useState(false)
    const [comuty, setComuty] = useState(false)
    const [ppl, setPpl] = useState(false)
    const dispatch = useDispatch()


    function handlePost() {
        setpost(true)
        setCmt(false)
        setComuty(false)
        setPpl(false)
    }

    function handleCmt() {
        setpost(false)
        setCmt(true)
        setComuty(false)
        setPpl(false)
    }

    function handleComuty() {
        setpost(false)
        setCmt(false)
        setComuty(true)
        setPpl(false)
    }

    function handlePpl() {
        setpost(false)
        setCmt(false)
        setComuty(false)
        setPpl(true)
    }

    const handleComment = (data, id) => {
      dispatch(setID(id))
      navigate(`/r/${data}/comments`);
    };

    return (
        <>
        <div className={`${!isUserLoggedin ? "bg-white" : (checkedTheme ? "bg-black" : "bg-gray-300")} py-1 pr-1 flex justify-between w-full max-w-full min-h-screen mt-12`}>
        {isMobile && isSideBarOpen  && <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />}
            <div className="flex justify-center w-full mt-5">
                <div className={`flex w-full ${post ? "max-w-[41rem]" : "max-w-[46rem]"} flex-col m-2`}>
                    <div className={`flex flex-wrap h-auto items-center gap-6 px-2 rounded opacity-100 mb-6`}>
                        <nav onClick={handlePost} className={`font-bold cursor-pointer rounded-full text-base px-4 py-2  ${post && !checkedTheme ? "bg-[#f6f7f8] hover:bg-gray-200" : !post && !checkedTheme ? "hover:bg-gray-200" : !post && checkedTheme ? "hover:bg-[#1A1A1B] text-[#d7dadc]" : "bg-[#1A1A1B] text-[#d7dadc]"}`}>Posts</nav>
                        <nav onClick={handleCmt} className={`font-bold cursor-pointer rounded-full text-base px-4 py-2 ${cmt && !checkedTheme ? "bg-[#f6f7f8] hover:bg-gray-200" : !cmt && !checkedTheme ? "hover:bg-gray-200" : !cmt && checkedTheme ? "hover:bg-[#1A1A1B] text-[#d7dadc]" : "bg-[#1A1A1B] text-[#d7dadc]"}`}>Comments</nav>
                        <nav onClick={handleComuty} className={`font-bold cursor-pointer rounded-full text-base px-4 py-2 ${comuty && !checkedTheme ? "bg-[#f6f7f8] hover:bg-gray-200" : !comuty && !checkedTheme ? "hover:bg-gray-200" : !comuty && checkedTheme ? "hover:bg-[#1A1A1B] text-[#d7dadc]" : "bg-[#1A1A1B] text-[#d7dadc]"}`}>Communities</nav>
                        <nav onClick={handlePpl} className={`font-bold cursor-pointer rounded-full text-base px-4 py-2 ${ppl && !checkedTheme ? "bg-[#f6f7f8] hover:bg-gray-200" : !ppl && !checkedTheme ? "hover:bg-gray-200" : !ppl && checkedTheme ? "hover:bg-[#1A1A1B] text-[#d7dadc]" : "bg-[#1A1A1B] text-[#d7dadc]"}`}>People</nav>
                    </div>
                    {/* <div className={`mt-4 flex justify-between items-center gap-3 px-2 rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}> */}
            {cmt && <Comments />}
            {post && searchPostResults.length > 0 ? (searchPostResults.map((data, idx) => ( <div onClick={() => handleComment(data.channel.name, data._id)} key={idx} className={`cursor-pointer flex h-auto gap-3 pl-2 rounded ${checkedTheme ? "border border-[#343536]" : "border bg-white"}`}>
              <div className={`flex flex-col items-center pt-2 ${checkedTheme ? "bg-black text-white" : null } `}>
                <div className="hover:text-orange-500 text-gray-500 cursor-pointer">
                  <UpvoteOutlineIcon height="20" width="20"/>
                </div>
                <nav className="text-sm font-bold">{data.likeCount}</nav>
                <div className="hover:text-blue-500 text-gray-500 cursor-pointer">
                  <DownvoteOutlineIcon height="20" width="20" />
                </div>
              </div>
              <div className={`flex flex-col px-3 pt-2 pb-1 gap-3 ${checkedTheme ? "all" : null}`}>
                <div className="flex items-center gap-2">
                  {data.channel ? <>  <img className="rounded-full w-6 h-6" src={data.channel.image} alt="Prof_Img"></img>
                  <nav className="text-xs font-semibold hover:underline cursor-pointer">r/{data.channel.name}</nav></> : null}
                  <div className="text-gray-500 text-xs pl-2 flex gap-1">
                    <nav >Posted by</nav>
                    <nav className="hover:underline cursor-pointer">u/{data.author.name}</nav>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                {/* <div className={`rounded-lg`}> */}
                  {data.images.length > 0 ? <img className="w-32 h-32" src={data.images[0]} alt="Image"></img> : null}
                {/* </div> */}
                <p>{data.content}</p>
                </div>
                <div className="flex">
                <div className={`flex text-gray-500 item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <CommentOutlineIcon />
                  <nav className="text-xs font-bold">{data.commentCount} Comments</nav>
                </div>
                <div className={`flex item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                  <img width="20" height="20" src="https://img.icons8.com/small/16/737373/forward-arrow.png" alt="forward-arrow"/>
                  <nav className="text-xs text-gray-500 font-bold">Share</nav>
                </div>
              </div>
              </div>
            </div> ))) : comuty &&  searchComutyResults.length > 0 ? ( searchComutyResults.map((data, idx) => (  <div key={idx} className={`cursor-pointer flex h-auto justify-between gap-3 p-3 pl-2 rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                    <div className="flex gap-2">
                        <img className="rounded-full w-10 h-10" src={data.channel.image}></img>
                        <div className="flex flex-col gap-1">
                            <nav className="text-xs font-bold hover:underline">r/{data.channel.name}</nav>
                            <nav className="text-xs text-[#7c7c7c]">10.9k Members</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Join</button>
        </div>))) : ppl && searchPplResults.length > 0 ? (searchPplResults.map((data, idx) => (  <div key={idx} className={`cursor-pointer flex h-auto justify-between gap-3 p-3 pl-2 rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
                    <div className="flex gap-2">
                        {data.author.profileImage ? <img className="rounded-full w-10 h-10" src={data.author.profileImage}></img> : 
                        <><img className="rounded-full w-10 h-10"></img></>}
                        <div className="flex flex-col gap-1">
                            <nav className="text-xs font-bold hover:underline">u/{data.author.name}</nav>
                            <nav className="text-xs text-[#7c7c7c]">14k Karma</nav>
                        </div>
                    </div>
                    <button className={`font-bold  px-4  rounded-full ${checkedTheme ? "bg-[#343536]" : "bg-[#f6f7f8] hover:bg-[#e9f5fd] text-[#0079d3]"}`}>Follow</button>
        </div>))) :(<div className={`cursor-pointer flex h-auto justify-center gap-3 p-3 pl-2 rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
          <div className="flex flex-col justify-center items-center gap-1">
            <img className="w-20 h-20" src="https://th.bing.com/th/id/R.9bba8f4e17f0f100605c909ba6015c75?rik=Dx8UzWlXRYahwQ&riu=http%3a%2f%2fwww.sporcle.com%2fblog%2fwp-content%2fuploads%2f2013%2f06%2freddit-open-source1.jpg&ehk=gISPrkBqmwrlrPY0PlsPkst4%2bIAn6zriJNriOEsXbts%3d&risl=&pid=ImgRaw&r=0"></img>
            <nav className="text-base font-semibold">{`We couldn't locate any results for your search query "${searchVal}"`}</nav>
            <nav className="text-base text-[#7c7c7c] font-semibold">Please explore using different keywords to refine your search</nav>
          </div>
          </div>)}
            {/* </div> */}
            
                </div>
                {isMobile && post && <PostPpl />}
            </div>
                   </div>
        </>
    )
}
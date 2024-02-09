import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";
import UpvoteOutlineIcon from "./icons/UpvoteOutlineIcon";
import DownvoteOutlineIcon from "./icons/DownvoteOutlineIcon";
import CommentOutlineIcon from "./icons/CommentOutlineIcon";

export default function DropComment(){
    const isUserLoggedin = useSelector((state) => state.isUserLoggedin);
    const checkedTheme = useSelector((state) => state.checkedTheme);
    const isMobile = useSelector((state) => state.isMobile);
    const isSideBarOpen = useSelector((state) => state.isSideBarOpen);
    const getId = useSelector((state) => state.getId);
    const [info, setInfo] = useState({});
    const [comment, setComment] = useState([]);
    const [commentLine, setCommentLine] = useState("");
    const [showComment, setShowComment] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    async function getData() {
        try {
          const rs = await axios.get(
            `https://academics.newtonschool.co/api/v1/reddit/post/${getId}`,
            {
              headers: {
                projectID: "dj024nttemeg",
              },
            }
          );
        setInfo(rs.data.data);
        setIsLoading(false);
        //   console.log(rs);
        //   console.log(rs.data);
          console.log(info.channel.image);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      }
    
      useEffect(() => {
        getData()
        // console.log(info.channel.image);
        console.log(info);
      }, []);

      function handleComment() {
        setComment([...comment, commentLine]);
        setShowComment(true);
        setCommentLine("");
      }

      const handleCommentBox = (e) => {
        setCommentLine(e.target.value);
      }

    return (
        <>
        <div className={`${!isUserLoggedin ? "bg-white" : (checkedTheme ? "bg-black" : "bg-gray-300")} py-1 pr-1 flex justify-between w-full max-w-full min-h-screen mt-12`}>
        {isMobile && isSideBarOpen  && <SideBar isMobile={isMobile} isSideBarOpen={isSideBarOpen} />}
        {isLoading ? 
                <div className="flex items-center justify-center h-screen flex-1">
                <img
                  src="https://www.svgrepo.com/show/452094/reddit.svg"
                  alt="Reddit Logo"
                  className="w-12 h-12 transition ease-in-out duration-300 animate-ping"
                />
              </div> : 
            <div className="flex justify-center w-full mt-5">
                <div className={`flex w-full max-w-[58rem] flex-col m-2`}>
                  {info && <div className={`cursor-pointer flex h-auto gap-3 pl-2 rounded ${checkedTheme ? "border border-[#343536]" : "border bg-white"}`}>
                                        <div className={`flex flex-col items-center pt-2 ${checkedTheme ? "bg-black text-white" : null } `}>
                                          <div className="hover:text-orange-500 text-gray-500 cursor-pointer">
                                            <UpvoteOutlineIcon height="20" width="20"/>
                                          </div>
                                          <nav className="text-sm font-bold">{info.likeCount}</nav>
                                          <div className="hover:text-blue-500 text-gray-500 cursor-pointer">
                                            <DownvoteOutlineIcon height="20" width="20" />
                                          </div>
                                        </div>
                                        <div className={`flex w-full flex-col px-3 pt-2 pb-3 gap-3 ${checkedTheme ? "all" : null}`}>
                                          <div className="flex items-center gap-2">
                                          {info.channel ? <><img className="rounded-full w-6 h-6" src={info.channel.image} alt="Prof_Img"></img>
                                            <nav className="text-xs font-semibold hover:underline cursor-pointer">r/{info.channel.name}</nav></> : null}
                                            <div className="text-gray-500 text-xs pl-2 flex gap-1">
                                              <nav >Posted by</nav>
                                              {info.author ? <nav className="hover:underline cursor-pointer">u/{info.author.name}</nav> : null }
                                            </div>
                                          </div>
                                          {/* <div className="flex justify-center gap-2"> */}
                                            {/* <img className="w-72 h-72" src={info.images[0]} alt="Image"></img> */}
                                          {/* </div> */}
                                          <p className="pt-4">{info.content}</p>
                                          
                                          <div className="flex">
                                          <div className={`flex text-gray-500 item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                                            <CommentOutlineIcon />
                                            <nav className="text-xs font-bold">{info.commentCount} Comments</nav>
                                          </div>
                                          <div className={`flex item-center justify-center gap-2 p-2 cursor-pointer ${checkedTheme ? "hover:bg-[#272729]" : "hover:bg-gray-200 "}`}>
                                            <img width="20" height="20" src="https://img.icons8.com/small/16/737373/forward-arrow.png" alt="forward-arrow"/>
                                            <nav className="text-xs text-gray-500 font-bold">Share</nav>
                                          </div>
                                        </div>
                                        <nav className="font-bold">Comment as</nav>
                                        <div className="flex flex-col gap-2">
              
                                            <textarea value={commentLine} onChange={(e) => handleCommentBox(e)} className="indent-2 outline-0 border h-40 text-sm" placeholder="Explore your comments here"></textarea>
                                            </div>
                                            <div className="flex justify-end">
                                                <button onClick={handleComment} className=" bg-blue-600 p-2 rounded-full">Comment</button>
                                            </div>
                                       
                                        <div className="flex flex-col">
                                            <nav className="text-base font-bold pb-3">Top Comments</nav>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-3">
                                                    <img src="https://th.bing.com/th/id/OIP.YwYifrU1D8N7m5T5YJxt0wHaJf?rs=1&pid=ImgDetMain" className="w-10 h-10 rounded-full"></img>
                                                    <nav className="text-sm font-semibold">Virat</nav>
                                                </div>
                                                <nav className="text-sm pl-12">Good one</nav>
                                            </div> 
                                            {showComment && comment.map((data, idx) => (
                                            <div key={idx} className="flex flex-col gap-1">
                                            <div className="flex items-center gap-3">
                                                <img src="https://th.bing.com/th/id/OIP.YwYifrU1D8N7m5T5YJxt0wHaJf?rs=1&pid=ImgDetMain" className="w-10 h-10 rounded-full"></img>
                                                <nav className="text-sm font-semibold">Nandi</nav>
                                            </div>
                                            <nav className="text-sm pl-12">{data}</nav>
                                        </div>                                             
                                            ))}                                          
                                        </div>
                                        </div>
                                      </div>
                                      }
                </div>
            </div>
            }
        </div>
                
        </>
    )
}
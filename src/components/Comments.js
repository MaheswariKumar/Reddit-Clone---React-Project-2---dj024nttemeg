import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Comments() {
    const checkedTheme = useSelector((state) => state.checkedTheme);

    return (
        <>
        <div className={`flex h-auto gap-3 pl-2 rounded ${checkedTheme ? "border border-[#343536] all" : "border bg-white"}`}>
            <div className={`flex flex-col items-center pt-2 `}>
                <nav>Commented 168 days ago</nav>
                <nav>Data out five year be wonder.</nav>
            </div>
        </div>
        </>
    )
}
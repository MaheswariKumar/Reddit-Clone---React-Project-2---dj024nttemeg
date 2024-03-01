import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Comments() {
  const checkedTheme = useSelector((state) => state.checkedTheme);
  const [quote, setQuote] = useState([]);

  async function getRandomQuote() {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
      return null;
    }
  }

  useEffect(() => {
    getRandomQuote();
  }, []);
  return (
    <>
      {quote.map((data, idx) => (
        <div
          key={idx}
          className={`flex h-auto gap-3 pl-2 rounded ${
            checkedTheme ? "border border-[#343536] all" : "border bg-white"
          }`}
        >
          <div className={`flex flex-col pt-2 gap-2 `}>
            <nav className="font-semibold text-xs text-[#878a8c]">
              Commented 168 days ago
            </nav>
            <nav
              className={`${
                checkedTheme ? "bg-[#17232d]" : "bg-[#e9f5fd] "
              } p-2 rounded `}
            >
              {data.text}
            </nav>
          </div>
        </div>
      ))}
    </>
  );
}
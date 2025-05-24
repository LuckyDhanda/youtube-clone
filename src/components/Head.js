import React, { useState, useEffect } from "react";
import hamburgerIcon from "../assets/header/hamburger-menu.png";
import youtubeLogo from "../assets/header/youtube-logo.jpg";
import userIcon from "../assets/header/user-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        if (searchQuery && searchQuery.length > 0) {
          getSearchSuggestions();
        }
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("API call - " + searchQuery);
    if (!searchQuery) {
      return;
    }
    if (searchCache[searchQuery]) {
      return;
    }
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // update the cache
    if (searchQuery && Array.isArray(json[1]) && json[1].length > 0) {
      dispatch(cacheResults({ [searchQuery]: json[1] }));
    } else {
      console.warn(
        "Skipping dispatch due to invalid data",
        searchQuery,
        json[1]
      );
    }

    // dispatch(cacheResults({ iPhone: "1, 2, 3" }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="flex items-center justify-between px-4  shadow-md bg-white sticky top-[0px] z-10">
      {/* Left section: hamburger + logo */}
      <div className="flex items-center gap-4">
        <img
          onClick={() => toggleMenuHandler()}
          src={hamburgerIcon}
          alt="hamburger-menu"
          className="w-6 h-6 cursor-pointer"
        />
        <a href="/">
          <img src={youtubeLogo} alt="youtube-logo" className="w-24 h-auto" />
        </a>
      </div>

      {/* Middle section: search */}
      <div className=" w-1/2">
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden max-w-xl">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 outline-none"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setTimeout(() => setShowSuggestions(false), 100);
            }}
          />
          <button className="bg-gray-200 px-5 py-2 hover:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
              />
            </svg>
          </button>
        </div>
        {showSuggestions && (
          <div>
            <ul className="absolute bg-white w-[32rem] shadow-lg rounded-lg  z-10">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="flex px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                    />
                  </svg>
                  <span className="pl-2">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Right section: user icon */}
      <div>
        <img
          src={userIcon}
          alt="user-icon"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Head;

import React from "react";
import hamburgerIcon from "../assets/header/hamburger-menu.png";
import youtubeLogo from "../assets/header/youtube-logo.jpg";
import userIcon from "../assets/header/user-icon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 shadow-md bg-white">
      {/* Left section: hamburger + logo */}
      <div className="flex items-center gap-4">
        <img
          onClick={() => toggleMenuHandler()}
          src={hamburgerIcon}
          alt="hamburger-menu"
          className="w-6 h-6 cursor-pointer"
        />
        <img src={youtubeLogo} alt="youtube-logo" className="w-24 h-auto" />
      </div>

      {/* Middle section: search */}
      <div className="flex items-center border border-gray-300 rounded-full overflow-hidden w-1/2 max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 outline-none"
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

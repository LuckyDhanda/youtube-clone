import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return method
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="p-4 w-64 bg-white shadow-md h-screen overflow-y-auto border-r ">
      {/* Primary Menu */}
      <ul className="space-y-2 mb-6">
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Home</li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Shorts</li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
          Subscriptions
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
          YouTube Music
        </li>
      </ul>

      {/* Explore Section */}
      <h1 className="font-bold text-lg px-2 mb-3 text-gray-700">Explore</h1>
      <ul className="space-y-2">
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
          Trending
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
          Shopping
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Music</li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Movies</li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Live</li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Gaming</li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">News</li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Sports</li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
          Courses
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
          Fashion & Beauty
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
          Podcasts
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

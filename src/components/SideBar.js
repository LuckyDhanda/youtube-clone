import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaFire,
  FaShoppingBag,
  FaMusic,
  FaFilm,
  FaBroadcastTower,
  FaGamepad,
  FaNewspaper,
  FaFutbol,
  FaBookOpen,
  FaTshirt,
  FaPodcast,
} from "react-icons/fa";
import {
  MdSubscriptions,
  MdOutlineShortText,
  MdLibraryMusic,
} from "react-icons/md";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-4 w-60 bg-white shadow-md h-screen overflow-y-auto border-r sticky top-[68px]">
      {/* Primary Menu */}
      <ul className="space-y-2 mb-6">
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">
          <Link to="/" className="flex items-center gap-2 text-gray-700">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2 text-gray-700">
          <MdOutlineShortText />
          <span>Shorts</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2 text-gray-700">
          <MdSubscriptions />
          <span>Subscriptions</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2 text-gray-700">
          <MdLibraryMusic />
          <span>YouTube Music</span>
        </li>
      </ul>

      <hr className="border-b-1 border-solid border-gray-300" />

      {/* Explore Section */}
      <h1 className="font-bold text-lg px-2 mb-3 text-gray-700 pt-4">
        Explore
      </h1>
      <ul className="space-y-2 text-gray-700">
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaFire />
          <span>Trending</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaShoppingBag />
          <span>Shopping</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaMusic />
          <span>Music</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaFilm />
          <span>Movies</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaBroadcastTower />
          <span>Live</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaGamepad />
          <span>Gaming</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaNewspaper />
          <span>News</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaFutbol />
          <span>Sports</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaBookOpen />
          <span>Courses</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaTshirt />
          <span>Fashion & Beauty</span>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded cursor-pointer flex items-center gap-2">
          <FaPodcast />
          <span>Podcasts</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;

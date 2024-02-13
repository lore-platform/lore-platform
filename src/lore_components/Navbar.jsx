/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import LoreLogo from "../assets/logo.png";
import NavigationLink from "./NagivationLink";
import { FaBars, FaSearch } from "react-icons/fa";

export const Navbar = ({ responsiveMode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, []);

  useEffect(() => {
    setShowMenu(false); // Reset showMenu on URL change
  }, [location]);

  const handleLinkClick = () => {
    setShowMenu(false); // Hide the menu when a link is clicked
  };

  //
  return (
    <>
      {responsiveMode === "small" ? (
        <nav className={`flex mb-3 justify-between items-center relative `}>
          <Link to="/">
            <img
              className="max-w-20"
              src={LoreLogo}
              alt="LORE Company Logo"
              id="loreLogo"
            />
          </Link>
          <div className="flex gap-6 text-2xl">
            <FaSearch />
            <FaBars onClick={toggleMenu} />
          </div>
          {/* The popup nav menu */}
          <div
            className={`lorebg-n800 rounded-l-[1.5rem] absolute pt-8 pl-8 h-dvh top-10 -right-[60%] navMenuShd nav-menu w-[200px] z-[100] ${
              showMenu ? "nav-menu-exit" : "nav-menu-enter"
            }`}
          >
            <ul className="flex flex-col gap-5 place-content-center text-base">
              <NavigationLink
                to="/login"
                label="Login"
                onClick={handleLinkClick}
              />
              <NavigationLink
                to="/signup"
                label="Sign Up"
                onClick={handleLinkClick}
              />
              <NavigationLink
                to="/finder"
                label="Finder Feature"
                onClick={handleLinkClick}
              />
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="grid grid-cols-3 mb-3 justify-between items-center">
          <Link to="/">
            <img
              className="min-w-0.5"
              src={LoreLogo}
              alt="LORE Company Logo"
              id="loreLogo"
            />
          </Link>
          <SearchBar />
          <ul className="flex justify-end gap-4 place-content-center">
            <NavigationLink to="/login" label="Login" />
            <NavigationLink to="/signup" label="Sign Up" />
            <NavigationLink to="/finder" label="Finder Feature" />
          </ul>
        </nav>
      )}
    </>
  );
};

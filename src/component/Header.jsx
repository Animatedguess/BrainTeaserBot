import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Manu from "./Manu";
import AvatarLayout from "../component/Avatar/AvatarLayout";

const navLinks = [
  { name: "About", to: "/about" },
  { name: "AI", to: "/ai" },
  { name: "Trivia", to: "/trivia" },
  { name: "Contact", to: "/contact" },
];

function Header({ isAuthenticated }) {
  // State to control avatar layout visibility
  const [isAvatarVisible, setAvatarVisible] = useState(false);

  const activeClass = ({ isActive }) =>
    `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-gray-700/75`;

  const renderNavLinks = () => (
    <nav aria-label="Global" className="hidden lg:block">
      <ul className="flex items-center gap-6 text-sm">
        {navLinks.map((link) => (
          <li key={link.to} className="bg-white bg-opacity-40 p-1 text-center transition rounded-md hover:p-2">
            <NavLink className={activeClass} to={link.to}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );

  const renderAuthButtons = () => (
    <>
      <Link className="rounded-md bg-landing-color px-5 py-2.5 text-sm font-medium text-white shadow" to="/login">
        Login
      </Link>
      <Link className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-landing-color" to="/register">
        Register
      </Link>
    </>
  );

  // Modify renderMenuButton to toggle AvatarLayout visibility
  const renderMenuButton = () => (
    <button
      onClick={() => setAvatarVisible(!isAvatarVisible)} // Toggle visibility of AvatarLayout
      className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );

  return (
    <header className="bg-transparent">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-start">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <div className="w-52 lg:w-64">
              <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/logo-transparent-png.png`} alt="Website logo" />
              </Link>
            </div>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <>
                  {renderNavLinks()}
                  <div className="flex items-center gap-4">
                    {/* Manu Button - toggles the AvatarLayout */}
                    <Manu onClick={() => setAvatarVisible(!isAvatarVisible)} />
                    {/* Menu Button for mobile view - also toggles AvatarLayout */}
                    <div className="block md:hidden">{renderMenuButton()}</div>
                  </div>
                </>
              ) : (
                <div className="hidden md:flex sm:gap-4">
                  {renderAuthButtons()}
                  <div className="block md:hidden">{renderMenuButton()}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the AvatarLayout component */}
      {isAvatarVisible && <AvatarLayout visible={isAvatarVisible} setVisible={setAvatarVisible} />}
    </header>
  );
}

export default Header;

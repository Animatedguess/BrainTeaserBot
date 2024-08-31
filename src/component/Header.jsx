import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-transparent">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-start">
          
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <div className="w-52 lg:w-64">
                <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/logo-transparent-png.png`}
                  alt=""
                />
                </Link>
              </div>
            </div>
          

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className={({isActive}) =>`text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-gray-700/75`}
                    to="/about"
                  >
                    {" "}
                    About{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({isActive}) =>`text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-gray-700/75`}
                    to="/ai"
                  >
                    {" "}
                    AI{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({isActive}) =>`text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-gray-700/75`}
                    to="/trivia"
                  >
                    {" "}
                    Trivia{" "}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({isActive}) =>`text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-gray-700/75`}
                    to="/contact"
                  >
                    {" "}
                    Contact{" "}
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex sm:gap-4">
                <Link
                  className="rounded-md bg-landing-color px-5 py-2.5 text-sm font-medium text-white shadow"
                  to="/login"
                >
                  Login
                </Link>

                <div className="hidden md:flex">
                  <Link
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-landing-color"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button to="/manu" className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

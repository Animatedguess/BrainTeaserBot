import React from 'react'
import Manu from './Manu.js'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <header className="bg-transparent">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-start">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link to="/">
                            <div className="w-52 lg:w-64">
                                <img src={`${process.env.PUBLIC_URL}/logo-transparent-png.png`} alt="" />
                            </div>
                        </Link>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden lg:block">
                            <div className="flex items-center gap-6 text-sm">
                                <NavLink
                                    className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-gray-700/75`}
                                    to="/about"
                                >
                                    {" "}
                                    About{" "}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-gray-700/75`}
                                    to="/ai"
                                >
                                    {" "}
                                    AI{" "}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-gray-700/75`}
                                    to="/trivia"
                                >
                                    {" "}
                                    Trivia{" "}
                                </NavLink>
                                <NavLink
                                    className={({ isActive }) => `text-gray-900 ${isActive ? "text-orange-700" : "text-gray-700"} transition hover:text-gray-700/75`}
                                    to="/contact"
                                >
                                    {" "}
                                    Contact{" "}
                                </NavLink>
                            </div>
                        </nav>

                        <div className="flex items-center gap-4">
                            <Manu />
                            <div className="block md:hidden">
                                <button className="rounded bg-gray-100 p-2 text-landing-color transition hover:text-gray-600/75">
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
    )
}

export default NavBar

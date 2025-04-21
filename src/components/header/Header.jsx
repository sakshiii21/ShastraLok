import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImage from '../../assets/logo.webp';
export default function Header() {

    return (
        <header className="shadow sticky z-50 top-0 bg-[#1E1006] dark:bg-gray-900 w-full">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5 w-full">
                <div className="flex flex-wrap justify-between items-center max-w-screen-xl max-w-full">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logoImage}
                            className="mr-9 h-20"
                            alt="Logo"
                        />
                        <h1 className='font-serif text-4xl text-[#F4E4BA] '>ShastraLok</h1>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-[#F4E4BA] dark:text-white hover:bg-[#FED141] dark:hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-[#F4E4BA] bg-[#B86F25] hover:bg-[#FED141] focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#B86F25]" : "text-[#F4E4BA] dark:text-white"} border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-[#FED141] lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/scriptures"
                                    className={({ isActive }) =>
                                       `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#B86F25]" : "text-[#F4E4BA] dark:text-white"} border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-[#FED141] lg:p-0`
                                    }
                                >
                                    Scriptures
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/maps"
                                    className={({ isActive }) =>
                                       `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#B86F25]" : "text-[#F4E4BA] dark:text-white"} border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-[#FED141] lg:p-0`
                                    }
                                >
                                    Map
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/quiz"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#B86F25]" : "text-[#F4E4BA] dark:text-white"} border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-[#FED141] lg:p-0`
                                    }
                                >
                                    Quiz
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/ai"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#B86F25]" : "text-[#F4E4BA] dark:text-white"} border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 lg:hover:bg-transparent lg:border-0 hover:text-[#FED141] lg:p-0`
                                    }
                                >
                                    AI
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

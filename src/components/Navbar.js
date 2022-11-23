import React from "react";
import Logo from '../images/logo.jpg';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="bg-white shadow-lg p-4  top-0 w-full block z-10">
            <div className="container-xl flex flex-wrap justify-between items-center mx-auto">
                <ul>
                    {/* <Link to="/"> */}
                    <div className="flex items-center">
                        {/* <Link to="/"> */}
                            <img href="/" src={Logo} alt="Logo" />
                        {/* </Link> */}
                        <div className="shadow-none ml-8 w-full border-none border border-l-gray h-full m-auto">
                            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                                <div className="md:flex">
                                    <div className="w-full">
                                        <div className="flex">
                                            <svg t="1666673936870" className="icon mt-4 " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3633" width="20" height="20"><path d="M614.87477 818.285935a406.893278 406.893278 0 0 1-250.148304-85.869623L73.142779 1024l-73.142779-73.142779 291.583688-291.583687a406.893278 406.893278 0 0 1-85.869623-250.148304A415.048698 415.048698 0 0 1 621.71362 0.001097a403.345854 403.345854 0 0 1 402.285283 409.160705 409.160704 409.160704 0 0 1-409.124133 409.124133zM621.71362 73.143876a315.06252 315.06252 0 0 0-329.142505 329.142504 315.06252 315.06252 0 0 0 329.142505 329.142505 315.06252 315.06252 0 0 0 329.142504-329.142505 315.06252 315.06252 0 0 0-329.142504-329.142504z" p-id="3634" fill="#1296db"></path></svg>
                                            <input type="text" className="bg-white h-12 w-full  px-2 focus:outline-none hover:cursor-pointer ml-2" name="" placeholder="Search Event..." />
                                            <span className="absolute top-4 right-5 border-l pl-4"><i className="fa fa-microphone text-gray-500 hover:text-green-500 hover:cursor-pointer"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </Link> */}
                </ul>
                
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            {/* <div class="hs-dropdown mt-1" data-hs-dropdown-placement="bottom-right" data-hs-dropdown-offset="30">
                                <a class="hs-dropdown-toggle hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500" href="javascript:;">
                                    <svg class="hs-dark-mode-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                                    </svg>
                                    <svg class="hs-dark-mode-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                    </svg>
                                </a>

                                <div id="selectThemeDropdown" class="hs-dropdown-menu hs-dropdown-open:opacity-100 mt-2 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 origin-bottom-left bg-white shadow-md rounded-lg p-2 space-y-1 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
                                    <a class="hs-auto-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="auto">
                                        Auto (system default)
                                    </a>
                                    <a class="hs-default-mode-active:bg-gray-100 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="default">
                                        Default (light mode)
                                    </a>
                                    <a class="hs-dark-mode-active:bg-gray-700 flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="javascript:;" data-hs-theme-click-value="dark">
                                        Dark
                                    </a>
                                </div>
                            </div> */}
                        </li>
                        <Link to="/register">
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Sign in</a>
                        </Link>
                        <Link to="/login">
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Login</a>
                        </Link>
                    </ul>
                </div>
            </div>
            {/* {props.children} */}
        </nav>

    )
}


export default Navbar;
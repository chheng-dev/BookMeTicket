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
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
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
                {/* <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button> */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Sign in</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* {props.children} */}
        </nav>

    )
}


export default Navbar;
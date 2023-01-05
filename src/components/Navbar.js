import React, { useEffect, useState } from "react";
import Logo from '../images/logo.png';
import { Link, Outlet } from "react-router-dom";
import { Space, Button, Menu, Dropdown } from "antd";
import { CiUser, CiLogout, CiHardDrive } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";


function Navbar() {

    const [theme, setCurrentTheme] = useState("");

    const loadTheme = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        // loadTheme();
    }, []);

    const menuContent = (
        <div className='w-64'>
            <div id="dropdownBottom" className=" w-full box-shadow bg-white rounded-md">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-700" aria-labelledby="dropdownBottomButton">
                    <Link to={'/account'}>
                        <li className='block px-4 py-2 text-gray-700 font-medium border-b border-lightGray-600 hover:bg-lightGra'>
                            <Space>
                                <CiUser className='text-xl' />
                                My Account
                            </Space>
                        </li>
                    </Link>
                    <Link>
                        <li className='block px-4 py-2 text-gray-700 font-medium border-b border-lightGray-600 hover:bg-lightGra'>
                            <Space>
                                <CiHardDrive className='text-xl' />
                                Ticket
                            </Space>
                        </li>
                    </Link>
                    <Link>
                        <li className='block px-4 py-2 text-gray-700 font-medium hover:bg-lightGray hover:text-red-600 hover:font-semibold'>
                            <Space>
                                <CiLogout className='text-xl' />
                                Log out
                            </Space>

                        </li>
                    </Link>

                </ul>
            </div>
        </div>
    );



    const changeTheme = (theme) => {
        if (theme == "light") {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark")
            setCurrentTheme("light")
        }
        else {
            localStorage.theme = "dark"
            document.documentElement.classList.add("dark")
            setCurrentTheme("dark")
        }
    }

    return (
        <>
            <div className="w-full bg-white dark:bg-gray-900">
                <nav
                    className="flex items-center justify-between flex-wrap py-3 lg:px-12 shadow">
                    <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                            <span className="font-semibold text-xl tracking-tight">
                                <Link to="/">
                                    <img src={Logo} alt="Logo" className="w-28" />
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="w-full flex-grow justify-start lg:flex lg:w-auto ">
                        <div className=" text-gray-700 lg:flex-grow">
                            <div className='max-w-sm'>
                                <div className="relative flex items-center w-full h-8 rounded-l-full rounded-r-full shadow-sm bg-secondary overflow-hidden">
                                    <div className="grid place-items-center h-full w-12 font-bold text-gray-300">
                                        <svg t="1669707201284" className="icon w-4 h-4" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4400"><path d="M640 768a382.24 382.24 0 0 1-247.808-90.912L45.248 1024 0 978.752l346.912-346.944A383.84 383.84 0 1 1 640 768z m0-704a320 320 0 1 0 320 320A320 320 0 0 0 640 64z" p-id="4401" fill="#2EBAE2"></path></svg>
                                    </div>

                                    <input
                                        className="px-2 h-full w-full outline-none text-sm text-gray-700 pr-2 bg-secondary"
                                        type="text"
                                        id="search"
                                        placeholder="Search Event,Name,Anything..." />
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <Space size={'large'}>
                                <Link to={`/register`}>
                                    <span className="text-gray-700 font-meduim">
                                        Sign in
                                    </span>
                                </Link>
                                <Link to={`/login`}>
                                    <button className="btn-primary px-5 rounded-sm">Login</button>
                                </Link>

                                <Dropdown overlay={menuContent} trigger={['click']}>
                                <svg t="1672727161293" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5778" width="32" height="32"><path d="M512.00128 1008.84864c-273.96992 0-496.84608-222.8736-496.84608-496.84352s222.87616-496.8448 496.84608-496.8448S1008.8448 238.03776 1008.8448 512.00512 785.96864 1008.84864 512.00128 1008.84864z m248.4224-166.4v-9.93408a83.03104 83.03104 0 0 0-41.73568-71.91808l-113.4016-64.79744c-28.19584 14.368-59.58272 23.22944-93.28512 23.22944s-65.088-8.86144-93.24288-23.22944l-113.4464 64.79744a83.03872 83.03872 0 0 0-41.728 71.91936v9.93408c69.31072 52.2112 155.1808 83.59808 248.42368 83.59808s179.11424-31.34208 248.4224-83.59808zM636.2112 512.00512v-82.80064a124.2112 124.2112 0 0 0-248.42112 0v82.80704a124.2112 124.2112 0 1 0 248.42112 0zM512.00128 97.96864c-228.29952 0-414.03648 185.73824-414.03648 414.03648a412.0512 412.0512 0 0 0 94.52288 263.04c13.37344-35.6928 37.71904-66.86976 71.75552-86.32832l85.99424-49.152c-27.904-35.2768-45.25696-79.20256-45.25696-127.56352v-82.7968c0-114.14784 92.87296-207.0208 207.0208-207.0208s207.01568 92.86656 207.01568 207.0208v82.80704c0 48.36096-17.34784 92.288-45.25056 127.56352l85.9904 49.152c34.03648 19.456 58.38208 50.63552 71.7568 86.32832a412.06016 412.06016 0 0 0 94.52544-263.04c0-228.29824-185.7408-414.03648-414.03776-414.03648z" fill="#8a8a8a" p-id="5779"></path></svg>
                                </Dropdown>

                            </Space>
                        </div>
                    </div>

                </nav>
            </div >
            {/* <Outlet /> */}
        </>

    )
}


export default Navbar;
import React from "react";
import { Link } from "react-router-dom"

function Cart({ title, description, image, price, id,location,avatar,username,slug }) {
    return (
        <>
            <Link to={`/event/${id}`}>
                <img
                    className="rounded-t-md rounded-b-md h-32 md:h-48 w-full object-cover"
                    src={image}
                    alt="thumbnail"
                    loading="lazy"
                />

                <div className="py-2 px-2 md:px-4">
                    <h1
                        className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                    >
                        <Link to={`/event/${id}`}>
                            <span className="text-gray-700 dark:text-white md:text-sm line-clamp-2">
                                {title}
                            </span>
                        </Link>
                    </h1>
                    <div className="text-xs text-gray-500 my-1">
                        <span className="flex items-center">
                            <span className="flex">
                                <svg t="1669090505682" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="15" height="15"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                            </span>
                            <span className="flex w-2/3 ml-1 line-clamp-1 dark:text-white">{location}</span>
                        </span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-meduim md:text-lg text-gray-700">${price}</span> <span className="font-normal text-gray-500 dark:text-white ml-0.25"> <span className="ml-2">/ Per Ticket</span></span>
                    </div>
                    <div className="flex mt-3 mb-1">
                        <div className="flex items-center">
                            <img className="w-8 h-8 rounded-full" src={avatar} />
                            <span className="text-gray-500 ml-2 dark:text-white text-sm line-clamp-1">{username}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>


    )
}

export default Cart;
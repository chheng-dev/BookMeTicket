import React, { useState, useEffect } from "react";
import Footer from "../../Footer"
import { Link, useParams } from "react-router-dom"
import Loading from "../../Loading/Loading";
import { FiShoppingCart, FiNavigation } from "react-icons/fi";
import { Button, Space, Affix } from "antd";
import { BrowserView, MobileView } from "react-device-detect";
import Navbar from "../../Navbar";
import NavbarBottom from "../../NavBarBottom";
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';
import CurrencyFormat from 'react-currency-format';


const EventDetail = (props) => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    console.log("param", id)
    const [product, setProduct] = useState([]);
    const [top, setTop] = useState(10);

    const getProductDetail = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://63b559c858084a7af39162c7.mockapi.io/ticketing/${id}`);
            const data = await respone.json();
            setProduct(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getProductDetail();
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }


    return (
        <>
            <BrowserView>
                <div className="fixed  bg-white dark:bg-gray-900 top-0 z-30 w-full">
                    <Navbar />
                </div>
            </BrowserView>
            <div className=" mx-auto rounded-2xl w-full h-full pt-16 bg-page-deatil">
                <div className="page-detail mx-auto py-8">
                    <img
                        className="content-page-detail object-cover w-full md:rounded-t-xl md:rounded-b-xl"
                        src={product.image}
                        alt="thumbnail"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="page-detail mx-auto mt-4 p-4 md:p-0 dark:text-white bg-lightGray-50">
                <div className="grid grid-cols-1 md:flex lg:flex lg:gap-24">
                    <div className="md:flex md:w-1/2 lg:flex lg:w-2/3 min-h-screen justify-start">
                        <div className="w-full">
                            <h2 className="font-bold md:text-3xl text-xl line-clamp-2 dark:text-white">
                                {product.title}
                            </h2>
                            <div className="w-full">
                                <Space>
                                    <FiNavigation className="text-xl text-gray-400" />
                                    <p className="ml-1 mt-2 text-md text-gray-400 dark:text-white">{product.location}</p>
                                </Space>
                            </div>
                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl dark:text-white">
                                    About Event
                                </h2>
                                <div className="flex gap-6">
                                    <div className="flex-block">
                                        <p className="flex items-center text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <g id="Group_226" data-name="Group 226" transform="translate(-181 -761)">
                                                    <rect id="Rectangle_164" data-name="Rectangle 164" width="32" height="32" rx="16" transform="translate(181 761)" fill="#2ebae2" />
                                                    <path id="calendar" d="M12.138,14.94H2.8a2.8,2.8,0,0,1-2.8-2.8V2.8A2.793,2.793,0,0,1,1.867.172V1.4a1.4,1.4,0,0,0,2.8,0V0h5.6V1.4a1.4,1.4,0,0,0,2.8,0V.172A2.793,2.793,0,0,1,14.94,2.8v9.337A2.8,2.8,0,0,1,12.138,14.94Zm.934-10.271H1.867v7.47a.933.933,0,0,0,.934.934h9.337a.933.933,0,0,0,.934-.934ZM9.337,9.337H11.2V11.2H9.337Zm0-2.8H11.2V8.4H9.337Zm-2.8,2.8H8.4V11.2H6.536Zm0-2.8H8.4V8.4H6.536Zm-2.8,2.8H5.6V11.2H3.735Zm0-2.8H5.6V8.4H3.735Zm7.937-4.669A.467.467,0,0,1,11.2,1.4V0h.934V1.4A.467.467,0,0,1,11.672,1.867Zm-8.4,0A.467.467,0,0,1,2.8,1.4V0h.934V1.4A.467.467,0,0,1,3.268,1.867Z" transform="translate(189.53 769.53)" fill="#fff" />
                                                </g>
                                            </svg>

                                            <span className="ml-2 dark:text-white">Date</span>
                                        </p>
                                        <p>From 11 Sep - 12 rd Oct 2022</p>
                                    </div>
                                    <div className="flex-block">
                                        <p className="flex items-center text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                                <g id="Group_225" data-name="Group 225" transform="translate(-436 -761)">
                                                    <rect id="Rectangle_165" data-name="Rectangle 165" width="32" height="32" rx="16" transform="translate(436 761)" fill="#2ebae2" />
                                                    <path id="time" d="M71.47,64a7.47,7.47,0,1,0,7.47,7.47A7.479,7.479,0,0,0,71.47,64Zm3.1,10.219a.769.769,0,0,1-.469.392.639.639,0,0,1-.168.022.738.738,0,0,1-.382-.112l-2.491-1.6a1.01,1.01,0,0,1-.26-.2c-.343-.217-.51-.439-.51-.679V67.62a.783.783,0,1,1,1.564,0v4.028l2.378,1.461A.857.857,0,0,1,74.568,74.219Z" transform="translate(380.533 705.53)" fill="#fff" />
                                                </g>
                                            </svg>

                                            <span className="ml-2  dark:text-white"> Start Time</span>
                                        </p>
                                        <p>9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl dark:text-white">
                                    Event Locaton
                                </h2>
                                <div className="flex">
                                    <div className="rounded-md w-full" style={{ height: '300px', width: '100%', position: "relative" }}>
                                        <Map
                                            google={props.google}
                                            zoom={8}
                                            initialCenter={{ lat: 47.444, lng: -122.176 }}
                                        >
                                            <Marker
                                                key={product.id}
                                                id={product.id}
                                                lat={product.lat}
                                                lng={product.lng}
                                                onClick={() => console.log(product.lat, product.lng)}
                                            />
                                        </Map>
                                    </div>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl dark:text-white">
                                    Description
                                </h2>
                                <div className="flex">
                                    <p>{product.description}</p>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl dark:text-white">
                                    What we offer
                                </h2>
                                <div className="flex gap-12">
                                    <div className="flex w-1/3">
                                        <svg t="1669106219486" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">Free lunch</span>
                                    </div>
                                    <div className="flex w-1/3">
                                        <svg t="1669106219486" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">JCI merchandise</span>
                                    </div>
                                </div>
                                <div className="flex gap-12 ">
                                    <div className="flex w-1/3">

                                        <svg t="1669106219486" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">Free lunch</span>

                                    </div>
                                    <div className="flex w-1/3">
                                        <svg t="1669106219486" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">Free lunch</span>
                                    </div>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl dark:text-white">
                                    Event host by
                                </h2>
                                <div className="flex">
                                    <div className="flex items-start py-6">
                                        <img className="w-16 h-16 rounded-full object-cover mr-4 box-shadow" src={product.avatar} alt="avatar" />
                                        <div className="">
                                            <div className="flex items-center justify-between">
                                                <h2 className="text-lg font-semibold text-gray-900 -mt-1 dark:text-white">Techo Startup Center </h2>
                                            </div>
                                            <p className="mt-3 text-gray-700 text-sm dark:text-white">
                                                We are a membership-based nonprofit organization of 200,000 young people ages 18 to 40 in 5,000 communities and more than 100 countries around the world.
                                            </p>
                                            <div className="mt-4 flex items-center">
                                                <div className="flex text-primary dark:text-white cursor-pointer text-sm mr-3">
                                                    <span>View Profile</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="md:flex md:w-1/2 lg:flex lg:w-1/3 justify-end dark:bg-gray-900 h-full">
                        <Affix offsetTop={70} className="w-full">
                            <div className="w-full box-shadow bg-white p-4 rounded-md">

                                <div className="flex gap-4">
                                    <div className="flex w-1/3 justify-start items-center">
                                        <span>Price</span>
                                    </div>
                                    <div className="flex w-2/3 justify-end items-center">
                                        <span >
                                            <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} className="font-bold text-xl" />
                                            <span className="text-sm font-normal">/ Per Ticket</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <div className="flex w-1/2 justify-start items-center">
                                        <span>Quantity</span>
                                    </div>
                                    <div className="flex w-1/2 justify-end items-center">
                                        <div className="custom-number-input h-10 w-32">
                                            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                                <button data-action="decrement" className=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                                    <span className="m-auto text-2xl font-thin">−</span>
                                                </button>
                                                <input type="number" className=" focus:outline-none text-center w-full bg-gray-200 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
                                                <button data-action="increment" className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                                    <span className="m-auto text-2xl font-thin">+</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-6">
                                    <Link to={`/guest-info/${product.id}`}>
                                        <Button type="primary" size="large" block>
                                            <Space>
                                                <FiShoppingCart className="text-lg" />
                                                Buy Ticket
                                            </Space>
                                        </Button>
                                    </Link>
                                </div>

                            </div>
                        </Affix>



                    </div>
                </div>
            </div>
            <div className="pb-16 md:pb-0">
                <Footer />
            </div>
            <MobileView>
                <NavbarBottom />
            </MobileView>
        </>
    )
}



export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(EventDetail);
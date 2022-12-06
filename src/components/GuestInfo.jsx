import React, { useState, useEffect } from "react";
import "../index.css"
import { Link, useParams } from "react-router-dom"
import Loading from "./Loading/Loading";

function GuestInfo() {
    const param = useParams()
    const [loading, setLoading] = useState(false)
    console.log("param", param)
    const [product, setProduct] = useState({})

    const getProductDetail = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://fakestoreapi.com/products/${param.id}`, {});
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
    }, {});

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div>
            <div className="w-full text-black h-full dark:text-white">
                <div className="container mx-auto h-full pb-16 md:pb-0 md:pt-32 px-4 md:px-0 pt-24">
                    <div className="md:flex md:gap-4">
                    <div className="md:flex md:w-1/6 items-center"></div>
                        <div className="md:flex md:w-2/6 box-shadow rounded-lg p-4">
                            <div class="w-full">
                                <div class="">
                                    <h1 class="text-2xl font-medium dark:text-white">{product.title}</h1>
                                    <div className="mt-4">
                                        <span className="dark:text-white text-sm">Hosted by {product.category}</span>
                                    </div>
                                    <form className="mt-16">
                                        <h3 className="text-gray-600 text-lg dark:text-white">Guest Information</h3>
                                        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                                        <div className="relative mt-3 z-0 mb-6 w-full group">

                                            <input type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-black dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " required />
                                            <label for="floating_email" className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your name</label>
                                        </div>
                                        <div className="relative mt-3 z-0 mb-6 w-full group">
                                            <input type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-black dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " required />
                                            <label for="floating_email" className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your phone number</label>
                                        </div>
                                        <div className="relative mt-3 z-0 mb-6 w-full group">
                                            <input type="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-black dark:focus:border-primary-500 focus:outline-none focus:ring-0 focus:border-primary-600 peer" placeholder=" " required />
                                            <label for="floating_email" className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary-600 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter your email</label>
                                        </div>
                                        <div className="mt-6 text-center text-gray-400 text-xs">
                                            <p>By Check out, you have agreed with <span className="text-primaruy-600">terms and condition</span></p>
                                        </div>
                                        <div className="flex space-x-2 justify-center mt-6">
                                            <Link to={`/payment/${product.id}`}>
                                                <button type="button" className="w-full inline-block px-6 py-3 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primary-700 hover:shadow-lg focus:bg-primary-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out">Check out</button>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex mt-4 md:mt-4  h-full items-center box-shadow rounded-lg max-w-sm dark:bg-gray-900">
                            <div className="p-4 box-shadow h-full dark:bg-gray-900">
                                <div className="flex gap-4">
                                    <div className="flex h-full w-1/2 ">
                                        <img className="object-contain h-32 box-shadow rounded-lg w-full" src={product.image} />
                                    </div>
                                    <div className="flex w-1/2">
                                        <h6 className="text-lg line-clamp-2 dark:text-white">{product.title}</h6>
                                    </div>
                                </div>
                                <div className="p-4 dark:text-white">
                                    <h6 className="text-2xl font-bold dark:text-white">Order Summary</h6>
                                    <div className="my-3 border-b pb-3 border-gray-300 items-center">
                                        <span>${product.price} Per Ticket</span>
                                    </div>
                                    <div className="my-3 border-b pb-3 border-gray-300">
                                        <div className="flex gap-2">
                                            <div className="flex w-1/2 justify-start items-center">
                                                <span>${product.price} * 1 Ticket</span>
                                            </div>
                                            <div className="flex w-1/2 justify-end items-center">
                                                <span>${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-3 border-b pb-3 border-gray-300">
                                        <div className="flex gap-2">
                                            <div className="flex w-1/2 justify-start items-center">
                                                <span>Tax</span>
                                            </div>
                                            <div className="flex w-1/2 justify-end items-center">
                                                <span>$0.50</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-3 border-b pb-3 border-gray-300">
                                        <div className="flex gap-2">
                                            <div className="flex w-1/2 justify-start items-center">
                                                <span>Total Price</span>
                                            </div>
                                            <div className="flex w-1/2 justify-end items-center">
                                                <span className="text-2xl font-bold">${product.price + 0.5}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuestInfo

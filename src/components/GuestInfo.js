import React,{useState,useEffect} from "react";
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
        <div className="w-full text-black h-screen m-auto ">
            <div className="container m-auto h-full mb-8 pt-32 px-4 md:px-0">
                <div className="md:flex grid grid-cols-1 gap-4">
                    <div className="md:flex md:w-1/6 "></div>
                    <div className="md:flex md:w-2/6 mx-auto md:shadow-lg md:px-4">
                        <div class="w-full">
                            <div class="">
                                <h1 class="text-3xl font-medium">{product.title}</h1>
                                {/* <p class="mt-3">Email us at help@domain.com or message us here:</p> */}
                                <div className="mt-4">
                                    <span className=" text-sm">Hosted by {product.category}</span>
                                </div>
                                <form className="mt-16">
                                    <h3 className="text-gray-600 text-lg ">Guest Information</h3>
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
                    <div className="md:flex md:w-2/6 md:max-w-sm justify-end ">
                        {/* <div className="max-w-sm mx-auto bg-white"> */}
                            <div className="md:shadow-lg md:w-full md:h-full">
                                <img
                                    className="object-contain h-48 w-full"
                                    src={product.image}
                                    alt="thumbnail"
                                    loading="lazy"
                                />
                                <div className="flex justify-between -mt-4 px-4">
                                    <img
                                        className=" h-16 w-16 rounded-full text-sm font-medium tracking-wide text-gray-100 "
                                        src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                                        alt="profile users"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-8 text-sm ">
                                    <h3 className="text-xl">{product.title}</h3>
                                    <div className="mt-4 border-b border-gray-400 pb-4">
                                        <span className="text-sm text-gray-600">${product.price} PerTicket</span>
                                    </div>
                                    <div className="mt-4 border-b border-gray-600 pb-4">
                                        <div className="flex">
                                            <div className="flex w-1/2 justify-start">
                                                <span className="text-sm text-gray-600">${product.price} * 1 Ticket</span>
                                            </div>
                                            <div className="flex w-1/2 justify-end">
                                                <span className="text-gray-600">${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 pb-4">
                                        <div className="flex">
                                            <div className="flex w-1/2 justify-start">
                                                <span className="text-sm text-gray-600">Total Price</span>
                                            </div>
                                            <div className="flex w-1/2 justify-end">
                                                <span className="text-gray-600">${product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        {/* </div> */}
                    </div>
                    <div className="flex w-1/6"></div>
                </div>
            </div>
        </div>
    )
}

export default GuestInfo
import React, { useEffect, useState } from "react";
import Category from "../Category";
import Cart from "./Cart";
import { Link, Outlet } from "react-router-dom"
import Loading from "../Loading/Loading";
import { Button } from "antd";

function Filter(props) {
    const [openTab, setOpenTab] = useState(1);
    const [products, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)

    const getPosts = async () => {
        try {
            setLoading(true);
            const respone = await fetch("https://63b559c858084a7af39162c7.mockapi.io/ticketing");
            const data = await respone.json();
            setPosts(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="w-full h-full">
            <div className="inline-flex mb-4" role="group">
                <button
                    type="button"
                    className="
                                            rounded
                                            px-4
                                            py-1
                                            md:px-6
                                            md:py-2        
                                            border border-gray-300
                                            text-gray-600
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            hover:bg-black hover:bg-opacity-5
                                            focus:outline-none focus:ring-0
                                            transition
                                            duration-150
                                            ease-in-out
            "
                    onClick={() => setOpenTab(1)}
                >
                    Date
                </button>
                <button
                    type="button"
                    className="
                                        rounded
                                            px-4
                                            py-1
                                            md:px-6
                                            md:py-2    
                                            border border-gray-300
                                            text-gray-600
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            hover:bg-black hover:bg-opacity-5
                                            focus:outline-none focus:ring-0
                                            transition
                                            duration-150
                                            ease-in-out
                                            ml-2
                                        "
                    onClick={() => setOpenTab(2)}
                >
                    Price
                </button>
                <button
                    type="button"
                    className="
                                            rounded
                                            px-4
                                            py-1
                                            md:px-6
                                            md:py-2    
                                            border border-gray-300
                                            text-gray-600
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            hover:bg-black hover:bg-opacity-5
                                            focus:outline-none focus:ring-0
                                            transition
                                            duration-150
                                            ease-in-out
                                            ml-2
                                        "
                    onClick={() => setOpenTab(3)}
                >
                    Keyword
                </button>
                <button
                    type="button"
                    className="
                                            rounded
                                            px-4
                                            py-1
                                            md:px-6
                                            md:py-2    
                                            border border-gray-300
                                            text-gray-600
                                            font-medium
                                            text-xs
                                            leading-tight
                                            uppercase
                                            hover:bg-black hover:bg-opacity-5
                                            focus:outline-none focus:ring-0
                                            transition
                                            duration-150
                                            ease-in-out
                                            ml-2
                                        "
                    onClick={() => setOpenTab(4)}
                >
                    More Filters
                </button>

            </div>
            <div className={openTab === 1 ? "block" : "hidden"}>
                <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 2xl:grid 2xl:grid-cols-5 gap-4">
                    {
                        products.map((product, idx) => {
                            return (
                                <div className=" h-full w-full mx-auto dark:bg-gray-900 dark:text-white box-shadow hover:shadow-2xl rounded-md " key={idx}>
                                    <Cart
                                        id={product.id}
                                        slug={product.slug}
                                        title={product.title}
                                        image={product.image}
                                        description={product.description}
                                        price={product.price}
                                        location={product.location}
                                        avatar={product.avatar}
                                        username={product.username}
                                    />
                                </div>
                            )
                        })
                    }

                </div>

            </div>
            <div className="w-full text-center my-8">
                <Link to="/event">
                    <Button type="primary"size={'large'} className="w-64">More event</Button>
                </Link>
            </div>
            {/* <Outlet /> */}
        </div>

    )
}

export default Filter
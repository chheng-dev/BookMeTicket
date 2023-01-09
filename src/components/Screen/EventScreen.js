import React, { useState, useEffect } from "react";
// import Maps from "../Maps";
// import Filter from "../Filter/button"
import { Link, withRouter } from "react-router-dom"
import Loading from "../Loading/Loading";
import Cart from "../Filter/Cart";
import { BrowserView, MobileView } from "react-device-detect";
import Navbar from "../Navbar";
import NavbarBottom from "../NavBarBottom";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function EventScreen(props) {

    const [openTab, setOpenTab] = useState(1)
    const [loading, setLoading] = useState(false)
    const [products, setProduct] = useState([])

    const getProductList = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://63b559c858084a7af39162c7.mockapi.io/ticketing`);
            const data = await respone.json();
            setProduct(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    function displayMarkers() {
        return products.map((store, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    lat={store.lat}
                    lng={store.lng}

                    onClick={() => console.log("You clicked me!")}
                />
            );
        });
    }

    useEffect(() => {
        getProductList();
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <BrowserView>
                <Navbar />
            </BrowserView>
            <div className="md:overflow-y-hidden md:event-h-screen mt-24 md:pt-0 md:mt-0">
                <div className="container">
                    <div className="p-4 md:p-0 md:overflow-hidden w-screen lg:event-h-screen ">
                        <div className="lg:flex grid grid-cols-1 md:grid md:grid-cols-1 h-full gap-4 event-h-screen">
                            <div className="md:p-4 lg:flex lg:w-2/3 lg:overflow-x-hidden lg:overflow-y-auto pb-16 md:pb-0">
                                <div className="w-full pb-32">
                                    <div className=" inline-flex mb-4" role="group">
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
                                            focus:bg-primary
                                            focus:text-white
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
                                            focus:bg-primary
                                            focus:text-white
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
                                            focus:bg-primary
                                            focus:text-white
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
                                            focus:bg-primary
                                            focus:text-white
                                        "
                                            onClick={() => setOpenTab(4)}
                                        >
                                            More Filters
                                        </button>

                                    </div>
                                    <div className={openTab === 1 ? "block" : "hidden"}>
                                        <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-4 gap-4">
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
                                    <div className={openTab === 2 ? "block" : "hidden"}>
                                        <div className="grid grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-4 gap-4">
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
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:flex hidden">
                                <div className="w-full h-full">
                                    <div className="w-full h-full flex items-center justify-center text-gray-900">
                                        <div className="rounded-md w-full h-screen" style={{ width: '100%', position: "relative" }}>
                                            <Map
                                                google={props.google}
                                                zoom={8}
                                                initialCenter={{ lat: 47.444, lng: -122.176 }}
                                            >
                                                {
                                                    products.map((product, index) => {
                                                        return (
                                                            <Marker
                                                                key={index}
                                                                id={index}
                                                                lat={product.lat}
                                                                lng={product.lng}
                                                                onClick={() => console.log(product.lat, product.lng)}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Map>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileView>
                <NavbarBottom />
            </MobileView>
        </>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(EventScreen);
// export default EventScreen;
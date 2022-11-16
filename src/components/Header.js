import React from 'react';
import { Carousel } from "antd";
import '../index.css'
import bgCover1 from "../images/bg-gd.jpg"
import {Link} from "react-router-dom"

function Header(){
        return (
            <section className="w-full h-full">
                <div className="w-full z-10">
                    <div className="">
                        <Carousel autoplay>
                            <div className="bg-auto sm:bg-cover md:bg-contain lg:bg-auto xl:bg-cover bg-gray-800">
                                <img src={bgCover1} className="w-full height-bg" alt='bg-cover'/>
                            </div>
                        </Carousel>
                    </div>

                    <div className="w-full absolute bottom-80">
                        <div className="container m-auto">
                            <div className="mr-auto place-self-center lg:col-span-7">
                                <h1 className="max-w-2xl md:mb-4 md:text-5xl font-extrabold tracking-tight leading-none xl:text-6xl dark:text-white pt-18 text-2xl p-4">Disph1. Bootstrap headinglay 4</h1>
                                <p className="md:max-w-2xl md:mb-8 font-base text-white lg:mb-8 md:text-lg lg:text-md p-4">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                                <Link to="/events">
                                    <button className="bg-blue-400 hover:bg-blue-700 text-white ml-4 py-2 px-12 rounded">
                                        Browse Event
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    
}


export default Header
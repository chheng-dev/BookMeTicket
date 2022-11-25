import React from 'react';
import { Carousel } from 'antd';
import '../index.css'
import bgCover1 from "../images/bg-banner.png"
import { Link } from "react-router-dom"

function Header() {
    return (
        <section className="w-full h-full scroll-smooth" id='home'>
            <div class="relative height-bg max-h-screen overflow-hidden">
                <div class="absolute flex w-full h-full items-center  bg-gray-900 z-50 opacity-50">
                    <div className='container mx-auto'>
                        <div class="relative z-19 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
                            <div>
                                <h2 class="text-4xl md:text-6xl font-bold text-white">Disph1. Bootstrap headinglay 4</h2>
                                <span>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</span>
                                <div className='mt-4'>
                                    <Link to="/event">
                                        <button className="bg-primary hover:bg-primary-700 text-white  py-2 px-12 rounded">
                                            Browse Event
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="absolute top-0 right-0 block w-full h-screen md:h-full">
                    <Carousel autoplay>
                        <div className='w-full h-screen md:full'>
                            <img alt="Snowy mountain lake" class="object-cover min-w-full h-full" src={bgCover1} />
                        </div>
                        <div className='w-full h-screen md:h-full'>
                            <img alt="Snowy mountain lake" class="object-cover min-w-full h-full" src="https://d3lbfr570u7hdr.cloudfront.net/stadiumastro/media/sa-images/2022/09-september/1/astro-fifa-world-cup-qatar-sports-pack.png?ext=.png" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>


    )

}


export default Header
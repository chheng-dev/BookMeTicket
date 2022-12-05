import React, { useState } from "react";
// import Maps from "../Maps";
// import Filter from "../Filter/button"
import { Link } from "react-router-dom"



function EventScreen() {
    const [openTab, setOpenTab] = useState(1)
    return (
        <div className="md:overflow-y-hidden md:event-h-screen mt-16 md:mt-0">
            <div className="container">
                <div className="p-4 md:p-0 md:overflow-hidden w-screen lg:event-h-screen ">
                    <div className="lg:flex grid grid-cols-1 md:grid md:grid-cols-1 h-full gap-4 event-h-screen ">
                        <div className="md:p-4 md:pb-8 lg:flex lg:w-2/3 lg:overflow-x-hidden lg:overflow-y-auto lg:mb-16 lg:h-screen">
                            <div className="w-full">
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
                                    <div className="md:pb-24 grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 md:gap-4  lg:grid lg:grid-cols-3 2xl:grid 2xl:grid-cols-4 gap-6 mt-3" >
                                        <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                            <img
                                                className="rounded-lg h-48 w-full"
                                                src="https://deviniti.com/app/uploads/2021/10/09-20_DM-8186_EVENTS_01_MAIN-2-1024x682.png"
                                                alt="thumbnail"
                                                loading="lazy"
                                            />

                                            <div className="py-2 px-4">
                                                <span className="text-xs text-gray-400">11 Nov - 12 Nov</span>
                                                <h1
                                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                >
                                                    <Link to="/event-detail">
                                                        <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                    </Link>

                                                </h1>
                                                <p className="text-xs text-gray-500">
                                                    <span className="flex">
                                                        <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                        <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                    </span>
                                                </p>
                                                <div>
                                                    <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-500">/ Per Ticket</span>
                                                </div>
                                                <div className="flex  my-6">
                                                    <div className="flex items-center">
                                                        <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                        <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                            <img
                                                className="rounded-lg h-48 w-full"
                                                src="https://guidebook.com/mobile-guides/wp-content/uploads/2021/01/event-planning6-e1576288302856-edited.jpg"
                                                alt="thumbnail"
                                                loading="lazy"
                                            />

                                            <div className="py-2 px-4">
                                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                                <h1
                                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                >
                                                    <Link to="/event-detail">
                                                        <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                    </Link>
                                                </h1>
                                                <p className="text-xs text-gray-400">
                                                    <span className="flex">
                                                        <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                        <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                    </span>
                                                </p>
                                                <div>
                                                    <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-400">/ Per Ticket</span>
                                                </div>
                                                <div className="flex my-6">
                                                    <div className="flex items-center">
                                                        <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                        <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                            <img
                                                className="rounded-lg h-48 w-full"
                                                src="https://images.squarespace-cdn.com/content/v1/5aadc54285ede1bd72181a3a/1521339647830-LKHTH62ZRY5TCGVCW81P/shutterstock_538256848.jpg?format=1500w"
                                                alt="thumbnail"
                                                loading="lazy"
                                            />

                                            <div className="py-2 px-4">
                                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                                <h1
                                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                >
                                                    <Link to="/event-detail">
                                                        <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                    </Link>
                                                </h1>
                                                <p className="text-xs text-gray-400">
                                                    <span className="flex">
                                                        <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                        <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                    </span>
                                                </p>
                                                <div>
                                                    <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-400">/ Per Ticket</span>
                                                </div>
                                                <div className="flex my-6">
                                                    <div className="flex items-center">
                                                        <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                        <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                            <img
                                                className="rounded-lg h-48 w-full"
                                                src="https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/88A4947%201_2.jpg?itok=CHxwyji-"
                                                alt="thumbnail"
                                                loading="lazy"
                                            />

                                            <div className="py-2 px-4">
                                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                                <h1
                                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                >
                                                    <Link to="/event-detail">
                                                        <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                    </Link>
                                                </h1>
                                                <p className="text-xs text-gray-400">
                                                    <span className="flex">
                                                        <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                        <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                    </span>
                                                </p>
                                                <div>
                                                    <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-400">/ Per Ticket</span>
                                                </div>
                                                <div className="flex my-6">
                                                    <div className="flex items-center">
                                                        <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                        <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"}>
                                    <div className="md:pb-24 grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3  2xl:grid 2xl:grid-cols-4 gap-6 mt-3" >
                                        <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                            <img
                                                className="rounded-lg h-48 w-full"
                                                src="https://i1.wp.com/www.aseanfootball.org/v3/wp-content/uploads/2022/04/The-Look-Company-FIFA.jpeg?resize=900%2C450&ssl=1"
                                                alt="thumbnail"
                                                loading="lazy"
                                            />

                                            <div className="py-2 px-4">
                                                <span className="text-xs text-gray-400">11 Nov - 12 Nov</span>
                                                <h1
                                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                >
                                                    <Link to="/event-detail">
                                                        <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                    </Link>
                                                </h1>
                                                <p className="text-xs text-gray-500">
                                                    <span className="flex">
                                                        <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                        <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                    </span>
                                                </p>
                                                <div>
                                                    <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-500">/ Per Ticket</span>
                                                </div>
                                                <div className="flex my-6">
                                                    <div className="flex items-center">
                                                        <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                        <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                            <img
                                                className="rounded-lg h-48 w-full"
                                                src="https://d12eu00glpdtk2.cloudfront.net/public/images/events/kidzania-football-cup-2022-registration/KidZania-Doha-Football-Cup-2022.jpg"
                                                alt="thumbnail"
                                                loading="lazy"
                                            />

                                            <div className="py-2 px-4">
                                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                                <h1
                                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                >
                                                    <Link to="/event-detail">
                                                        <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                    </Link>
                                                </h1>
                                                <p className="text-xs text-gray-400">
                                                    <span className="flex">
                                                        <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                        <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                    </span>
                                                </p>
                                                <div>
                                                    <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-400">/ Per Ticket</span>
                                                </div>
                                                <div className="flex my-6">
                                                    <div className="flex items-center">
                                                        <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                        <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                            <img
                                                className="rounded-lg h-48 w-full"
                                                src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-02/FIFA%20Club%20World%20Cup%20trophy%20020422.jpg?itok=5pZc3sgR"
                                                alt="thumbnail"
                                                loading="lazy"
                                            />

                                            <div className="py-2 px-4">
                                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                                <h1
                                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                >
                                                    <Link to="/event-detail">
                                                        <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                    </Link>
                                                </h1>
                                                <p className="text-xs text-gray-400">
                                                    <span className="flex">
                                                        <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                        <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                    </span>
                                                </p>
                                                <div>
                                                    <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-400">/ Per Ticket</span>
                                                </div>
                                                <div className="flex my-6">
                                                    <div className="flex items-center">
                                                        <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                        <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="h-full mx-auto bg-white drop-shadow-lg rounded-lg hover:shadow-2xl ">
                                            <img
                                                className="rounded-lg h-48 w-full"
                                                src="https://m.thepeninsulaqatar.com/get/maximage/20221021_1666370619-755.JPG?1666370619"
                                                alt="thumbnail"
                                                loading="lazy"
                                            />

                                            <div className="py-2 px-4">
                                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                                <h1
                                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                                >
                                                    <Link to="/event-detail">
                                                        <span className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</span>
                                                    </Link>
                                                </h1>
                                                <p className="text-xs text-gray-400">
                                                    <span className="flex">
                                                        <svg t="1669090505682" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="17" height="17"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                                        <span className="ml-1">The Desk Flagship - Daun Penh…</span>
                                                    </span>
                                                </p>
                                                <div>
                                                    <span className="font-medium text-lg">$10.00</span> <span className="font-normal text-gray-400">/ Per Ticket</span>
                                                </div>
                                                <div className="flex my-6">
                                                    <div className="flex items-center">
                                                        <img className="w-8 h-8 rounded-full ring ring-gray-800" src="https://image.shutterstock.com/mosaic_250/2780032/1194497215/stock-photo-portrait-of-smiling-african-american-student-looking-at-camera-sitting-in-caf-black-millennial-1194497215.jpg" />
                                                        <span className="text-gray-500 ml-2">Techo Startup Center</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-8 py-4 lg:p-0  lg:w-1/3 md:flex md:h-full h-full">
                            <div className="w-full h-full">
                                <div className="w-full h-full">
                                    <div className="w-full h-full flex items-center justify-center text-gray-900">
                                        <iframe className="w-full h-full md:h-96 lg:h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6386945005797!2d104.90384381533713!3d11.577738247055695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095132315da61b%3A0x3c91a9e3aeb49ae9!2sBookMeBus!5e0!3m2!1sen!2skh!4v1668570367336!5m2!1sen!2skh" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
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


export default EventScreen
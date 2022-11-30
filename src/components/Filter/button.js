import React, { useEffect, useState } from "react";
import Category from "../Category";
import Cart from "./Cart";

function Filter(props) {
    const [openTab, setOpenTab] = useState(1);
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const respone = await fetch("https://fakestoreapi.com/products");
        const data = await respone.json();
        setPosts(data)
    }

    useEffect(() => {
        getPosts();
    });

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
                    All
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
                    Today
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
                    This Week
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
                    This Month
                </button>

            </div>
            {/* <div className={openTab === 1 ? "block" : "hidden"}>
                <div className="lg:flex grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 md:gap-4 gap-6 mt-3" >
                    <div className="lg:flex lg:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://deviniti.com/app/uploads/2021/10/09-20_DM-8186_EVENTS_01_MAIN-2-1024x682.png"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-400">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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
                    </div>

                    <div className="lg:flex lg:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://guidebook.com/mobile-guides/wp-content/uploads/2021/01/event-planning6-e1576288302856-edited.jpg"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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

                    <div className="lg:flex lg:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://images.squarespace-cdn.com/content/v1/5aadc54285ede1bd72181a3a/1521339647830-LKHTH62ZRY5TCGVCW81P/shutterstock_538256848.jpg?format=1500w"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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

                    <div className="lg:flex lg:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/88A4947%201_2.jpg?itok=CHxwyji-"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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
                <div className="lg:flex grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 md:gap-4 gap-6 mt-3" >
                    <div className="lg:flex lg:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://d2evkimvhatqav.cloudfront.net/images/_1440x1080_crop_center-center_none/speaker-training-education-conference-46290858.jpg?v=1658176926,0.5063,0.5188"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-400">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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
                    </div>

                    <div className="lg:flex lg:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://media.slidesgo.com/storage/8857150/leadership-training-event-for-business1626957387.jpg"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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

                    <div className="lg:flex lg:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://www.academyoflearning.com/wp-content/uploads/2021/08/event_marketing.jpg"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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

                    <div className="lg:flex lg:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?w=2000"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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
            </div> */}
            <div className={openTab === 2 ? "block" : "hidden"}>
                <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-4 lg:grid lg:grid-cols-5" >
                    {
                        posts.map((post, idx) => {
                            return (
                                <div className=" h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg " key={idx}>
                                    <Cart title={post.title} image={post.image} description={post.description} price={post.price}/>
                                </div>
                            )
                        })
                    }




                    {/* </div> */}
                </div>
                {/* <div className="md:flex md:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://d12eu00glpdtk2.cloudfront.net/public/images/events/kidzania-football-cup-2022-registration/KidZania-Doha-Football-Cup-2022.jpg"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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

                    <div className="md:flex md:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-02/FIFA%20Club%20World%20Cup%20trophy%20020422.jpg?itok=5pZc3sgR"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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

                    <div className="md:flex md:w-1/4">
                        <div className="h-full mx-auto bg-white shadow-md hover:shadow-2xl rounded-lg ">
                            <img
                                className="rounded-t-lg h-48 w-full"
                                src="https://m.thepeninsulaqatar.com/get/maximage/20221021_1666370619-755.JPG?1666370619"
                                alt="thumbnail"
                                loading="lazy"
                            />

                            <div className="py-2 px-4">
                                <span className="text-xs text-gray-500">11 Nov - 12 Nov</span>
                                <h1
                                    className="text-lg font-medium leading-6 tracking-wide text-gray-300 "
                                >
                                    <a href="/event-detail" className="text-gray-700 md:text-sm">SparkMeet “Deep Learning and Khmer Text Recognit…</a>
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
                    </div> */}

            </div>
            <div className="w-full text-center my-8">
                <button className="py-4 px-28 border border-primary rounded text-primary font-meduim">More event</button>
            </div>
        </div>

    )
}

export default Filter
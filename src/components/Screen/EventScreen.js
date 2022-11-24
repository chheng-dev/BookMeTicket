import React from "react";
// import Maps from "../Maps";
// import Filter from "../Filter/button"
import { Link } from "react-router-dom"
// import "../../index.css"


function EventScreen() {
    return (
        <div className="lg:overflow-y-hidden lg:event-h-screen">
            <div className="container lg:event-h-screen">
                <div className="p-4 md:p-0 md:overflow-hidden w-screen lg:event-h-screen ">
                    <div className="lg:flex grid grid-cols-1 md:grid md:grid-cols-1 h-full gap-4 event-h-screen ">
                        <div className="md:p-4 lg:flex lg:w-2/3 lg:overflow-x-hidden lg:overflow-y-auto lg:mb-16 lg:h-screen">
                            <div className="w-full h-full">
                                <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 md:grid md:grid-cols-3 gap-4">
                                    <div className="items-center justify-center mt-5">
                                        <div className="lg:overflow-hidden bg-white shadow-xl duration-200">
                                            <img src="https://s1.ticketm.net/dam/a/087/d26e3794-731e-478c-b0ba-4b4648bd0087_1772721_RETINA_PORTRAIT_16_9.jpg" alt="plant" className="lg:card-image-event md:md-card-image-even" />
                                            <div className="p-4 md:p-0">
                                                <div className="lg:px-4 lg:pt-2 md:px-2 md:py-0">
                                                    <div className="flex">
                                                        {/* <svg t="1669278973564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2847" width="16" height="16"><path d="M935.385 1024H88.615c-32.63 0-59.077-26.447-59.077-59.077V157.54c0-32.63 26.447-59.077 59.077-59.077h157.539v-78.77C246.154 8.822 254.976 0 265.846 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h334.77v-78.77C679.385 8.822 688.207 0 699.077 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h157.539c32.63 0 59.077 26.446 59.077 59.076v807.385c0 32.63-26.447 59.077-59.077 59.077z m0-846.77c0-10.87-8.823-19.692-19.693-19.692H777.846v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077h-334.77v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077H108.308c-10.87 0-19.693 8.823-19.693 19.693v137.846h846.77V177.23z m0 196.924H88.615V945.23c0 10.87 8.823 19.692 19.693 19.692h807.384c10.87 0 19.693-8.822 19.693-19.692V374.154zM817.23 846.769h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z" p-id="2848" fill="#8a8a8a"></path></svg>                                                        */}
                                                         <span className="text-md ml-1 text-gray-400">11-Mar - 12-Mar</span>
                                                    </div>
                                                    <div className="pt-0.5">
                                                        <Link to="/event/1">
                                                            <h3 className="text-gray-600 md:text-sm text-xl font-semibold">Well, aren't you going uh3</h3>
                                                        </Link>
                                                    </div>
                                                    <div className="flex">
                                                    {/* <svg t="1669279063762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="20" height="20"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="4062" fill="#8a8a8a"></path></svg> */}
                                                        <span className="text-lg -mt-1 md:text-xs text-gray-400 ml-0.5">
                                                            BookMeBus, Phnom Penh
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="lg:text-xl text-lg py-2 md:p-0 md:px-2 lg:px-4 text-red-800">
                                                    <span className="md:text-sm ">$10.00</span>
                                                </div>
                                                <div className="border-t border-gray-300 mt-1  py-3 md:p-3 ">
                                                    <div
                                                        className="flex items-center space-x-3 w-full"
                                                    >
                                                        <img
                                                            className="object-cover w-14 h-14 border-2 border-green-400 rounded-full "
                                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                            alt="profile users"
                                                            loading="lazy"
                                                        />
                                                        <div className="">
                                                            <span className="text-sm font-semibold tracking-wide text-gray-600">
                                                                Author
                                                            </span>
                                                            <p className="text-xs tracking-wider text-gray-600">
                                                                2 Hours ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className=" items-center justify-center mt-5">
                                        <div className=" overflow-hidden bg-white shadow-xl duration-200">
                                            <img src="https://s1.ticketm.net/dam/a/729/c886aac1-6740-4f40-a8fa-86f70d168729_1596801_TABLET_LANDSCAPE_LARGE_16_9.jpg" alt="plant" className="lg:card-image-event md:md-card-image-even" />
                                            <div className="p-4 md:p-0">
                                                <div className="lg:px-4 lg:pt-2 md:px-2 md:py-0">
                                                    <div className="flex">
                                                        {/* <svg t="1669278973564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2847" width="16" height="16"><path d="M935.385 1024H88.615c-32.63 0-59.077-26.447-59.077-59.077V157.54c0-32.63 26.447-59.077 59.077-59.077h157.539v-78.77C246.154 8.822 254.976 0 265.846 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h334.77v-78.77C679.385 8.822 688.207 0 699.077 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h157.539c32.63 0 59.077 26.446 59.077 59.076v807.385c0 32.63-26.447 59.077-59.077 59.077z m0-846.77c0-10.87-8.823-19.692-19.693-19.692H777.846v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077h-334.77v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077H108.308c-10.87 0-19.693 8.823-19.693 19.693v137.846h846.77V177.23z m0 196.924H88.615V945.23c0 10.87 8.823 19.692 19.693 19.692h807.384c10.87 0 19.693-8.822 19.693-19.692V374.154zM817.23 846.769h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z" p-id="2848" fill="#8a8a8a"></path></svg>                                                        */}
                                                         <span className="text-md ml-1 text-gray-400">11-Mar - 12-Mar</span>
                                                    </div>
                                                    <div className="pt-0.5">
                                                        <Link to="/event/1">
                                                            <h3 className="text-gray-600 md:text-sm text-xl font-semibold">Well, aren't you going uh3</h3>
                                                        </Link>
                                                    </div>
                                                    <div className="flex">
                                                    {/* <svg t="1669279063762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="20" height="20"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="4062" fill="#8a8a8a"></path></svg> */}
                                                        <span className="text-lg -mt-1 md:text-xs text-gray-400 ml-0.5">
                                                            BookMeBus, Phnom Penh
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="lg:text-xl text-lg py-2 md:p-0 md:px-2 lg:px-4 text-red-800">
                                                    <span className="md:text-sm ">$10.00</span>
                                                </div>
                                                <div className="border-t border-gray-300 mt-1  py-3 md:p-3 ">
                                                    <div
                                                        className="flex items-center space-x-3 w-full"
                                                    >
                                                        <img
                                                            className="object-cover w-14 h-14 border-2 border-green-400 rounded-full "
                                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                            alt="profile users"
                                                            loading="lazy"
                                                        />
                                                        <div className="">
                                                            <span className="text-sm font-semibold tracking-wide text-gray-600">
                                                                Author
                                                            </span>
                                                            <p className="text-xs tracking-wider text-gray-600">
                                                                2 Hours ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="mt-3 p-4">
                                        <span>$ 300.44</span>
                                    </div> */}
                                        </div>

                                    </div>

                                    <div className=" items-center justify-center mt-5">
                                        <div className=" overflow-hidden bg-white shadow-xl duration-200">
                                            <img src="https://www.thelist.com/img/gallery/2021-music-festivals-you-need-to-have-on-your-radar/l-intro-1628720166.jpg" alt="plant" className="lg:card-image-event md:md-card-image-even" />
                                            <div className="p-4 md:p-0">
                                                <div className="lg:px-4 lg:pt-2 md:px-2 md:py-0">
                                                    <div className="flex">
                                                        {/* <svg t="1669278973564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2847" width="16" height="16"><path d="M935.385 1024H88.615c-32.63 0-59.077-26.447-59.077-59.077V157.54c0-32.63 26.447-59.077 59.077-59.077h157.539v-78.77C246.154 8.822 254.976 0 265.846 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h334.77v-78.77C679.385 8.822 688.207 0 699.077 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h157.539c32.63 0 59.077 26.446 59.077 59.076v807.385c0 32.63-26.447 59.077-59.077 59.077z m0-846.77c0-10.87-8.823-19.692-19.693-19.692H777.846v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077h-334.77v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077H108.308c-10.87 0-19.693 8.823-19.693 19.693v137.846h846.77V177.23z m0 196.924H88.615V945.23c0 10.87 8.823 19.692 19.693 19.692h807.384c10.87 0 19.693-8.822 19.693-19.692V374.154zM817.23 846.769h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z" p-id="2848" fill="#8a8a8a"></path></svg>                                                        */}
                                                         <span className="text-md ml-1 text-gray-400">11-Mar - 12-Mar</span>
                                                    </div>
                                                    <div className="pt-0.5">
                                                        <Link to="/event/1">
                                                            <h3 className="text-gray-600 md:text-sm text-xl font-semibold">Well, aren't you going uh3</h3>
                                                        </Link>
                                                    </div>
                                                    <div className="flex">
                                                    {/* <svg t="1669279063762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="20" height="20"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="4062" fill="#8a8a8a"></path></svg> */}
                                                        <span className="text-lg -mt-1 md:text-xs text-gray-400 ml-0.5">
                                                            BookMeBus, Phnom Penh
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="lg:text-xl text-lg py-2 md:p-0 md:px-2 lg:px-4 text-red-800">
                                                    <span className="md:text-sm ">$10.00</span>
                                                </div>
                                                <div className="border-t border-gray-300 mt-1  py-3 md:p-3 ">
                                                    <div
                                                        className="flex items-center space-x-3 w-full"
                                                    >
                                                        <img
                                                            className="object-cover w-14 h-14 border-2 border-green-400 rounded-full "
                                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                            alt="profile users"
                                                            loading="lazy"
                                                        />
                                                        <div className="">
                                                            <span className="text-sm font-semibold tracking-wide text-gray-600">
                                                                Author
                                                            </span>
                                                            <p className="text-xs tracking-wider text-gray-600">
                                                                2 Hours ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 md:grid md:grid-cols-3 gap-4">
                                    <div className=" items-center justify-center mt-5">
                                        <div className=" overflow-hidden bg-white shadow-xl duration-200">
                                            <img src="https://s1.ticketm.net/dam/a/087/d26e3794-731e-478c-b0ba-4b4648bd0087_1772721_RETINA_PORTRAIT_16_9.jpg" alt="plant" className="lg:card-image-event md:md-card-image-even" />
                                            <div className="p-4 md:p-0">
                                                <div className="lg:px-4 lg:pt-2 md:px-2 md:py-0">
                                                    <div className="flex">
                                                        {/* <svg t="1669278973564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2847" width="16" height="16"><path d="M935.385 1024H88.615c-32.63 0-59.077-26.447-59.077-59.077V157.54c0-32.63 26.447-59.077 59.077-59.077h157.539v-78.77C246.154 8.822 254.976 0 265.846 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h334.77v-78.77C679.385 8.822 688.207 0 699.077 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h157.539c32.63 0 59.077 26.446 59.077 59.076v807.385c0 32.63-26.447 59.077-59.077 59.077z m0-846.77c0-10.87-8.823-19.692-19.693-19.692H777.846v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077h-334.77v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077H108.308c-10.87 0-19.693 8.823-19.693 19.693v137.846h846.77V177.23z m0 196.924H88.615V945.23c0 10.87 8.823 19.692 19.693 19.692h807.384c10.87 0 19.693-8.822 19.693-19.692V374.154zM817.23 846.769h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z" p-id="2848" fill="#8a8a8a"></path></svg>                                                        */}
                                                         <span className="text-md ml-1 text-gray-400">11-Mar - 12-Mar</span>
                                                    </div>
                                                    <div className="pt-0.5">
                                                        <Link to="/event/1">
                                                            <h3 className="text-gray-600 md:text-sm text-xl font-semibold">Well, aren't you going uh3</h3>
                                                        </Link>
                                                    </div>
                                                    <div className="flex">
                                                    {/* <svg t="1669279063762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="20" height="20"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="4062" fill="#8a8a8a"></path></svg> */}
                                                        <span className="text-lg -mt-1 md:text-xs text-gray-400 ml-0.5">
                                                            BookMeBus, Phnom Penh
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="lg:text-xl text-lg py-2 md:p-0 md:px-2 lg:px-4 text-red-800">
                                                    <span className="md:text-sm ">$10.00</span>
                                                </div>
                                                <div className="border-t border-gray-300 mt-1  py-3 md:p-3 ">
                                                    <div
                                                        className="flex items-center space-x-3 w-full"
                                                    >
                                                        <img
                                                            className="object-cover w-14 h-14 border-2 border-green-400 rounded-full "
                                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                            alt="profile users"
                                                            loading="lazy"
                                                        />
                                                        <div className="">
                                                            <span className="text-sm font-semibold tracking-wide text-gray-600">
                                                                Author
                                                            </span>
                                                            <p className="text-xs tracking-wider text-gray-600">
                                                                2 Hours ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className=" items-center justify-center mt-5">
                                        <div className=" overflow-hidden bg-white shadow-xl duration-200">
                                            <img src="https://s1.ticketm.net/dam/a/729/c886aac1-6740-4f40-a8fa-86f70d168729_1596801_TABLET_LANDSCAPE_LARGE_16_9.jpg" alt="plant" className="lg:card-image-event md:md-card-image-even" />
                                            <div className="p-4 md:p-0">
                                                <div className="lg:px-4 lg:pt-2 md:px-2 md:py-0">
                                                    <div className="flex">
                                                        {/* <svg t="1669278973564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2847" width="16" height="16"><path d="M935.385 1024H88.615c-32.63 0-59.077-26.447-59.077-59.077V157.54c0-32.63 26.447-59.077 59.077-59.077h157.539v-78.77C246.154 8.822 254.976 0 265.846 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h334.77v-78.77C679.385 8.822 688.207 0 699.077 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h157.539c32.63 0 59.077 26.446 59.077 59.076v807.385c0 32.63-26.447 59.077-59.077 59.077z m0-846.77c0-10.87-8.823-19.692-19.693-19.692H777.846v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077h-334.77v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077H108.308c-10.87 0-19.693 8.823-19.693 19.693v137.846h846.77V177.23z m0 196.924H88.615V945.23c0 10.87 8.823 19.692 19.693 19.692h807.384c10.87 0 19.693-8.822 19.693-19.692V374.154zM817.23 846.769h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z" p-id="2848" fill="#8a8a8a"></path></svg>                                                        */}
                                                         <span className="text-md ml-1 text-gray-400">11-Mar - 12-Mar</span>
                                                    </div>
                                                    <div className="pt-0.5">
                                                        <Link to="/event/1">
                                                            <h3 className="text-gray-600 md:text-sm text-xl font-semibold">Well, aren't you going uh3</h3>
                                                        </Link>
                                                    </div>
                                                    <div className="flex">
                                                    {/* <svg t="1669279063762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="20" height="20"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="4062" fill="#8a8a8a"></path></svg> */}
                                                        <span className="text-lg -mt-1 md:text-xs text-gray-400 ml-0.5">
                                                            BookMeBus, Phnom Penh
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="lg:text-xl text-lg py-2 md:p-0 md:px-2 lg:px-4 text-red-800">
                                                    <span className="md:text-sm ">$10.00</span>
                                                </div>
                                                <div className="border-t border-gray-300 mt-1  py-3 md:p-3 ">
                                                    <div
                                                        className="flex items-center space-x-3 w-full"
                                                    >
                                                        <img
                                                            className="object-cover w-14 h-14 border-2 border-green-400 rounded-full "
                                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                            alt="profile users"
                                                            loading="lazy"
                                                        />
                                                        <div className="">
                                                            <span className="text-sm font-semibold tracking-wide text-gray-600">
                                                                Author
                                                            </span>
                                                            <p className="text-xs tracking-wider text-gray-600">
                                                                2 Hours ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="mt-3 p-4">
                                        <span>$ 300.44</span>
                                    </div> */}
                                        </div>

                                    </div>

                                    <div className=" items-center justify-center mt-5">
                                        <div className=" overflow-hidden bg-white shadow-xl duration-200">
                                            <img src="https://www.thelist.com/img/gallery/2021-music-festivals-you-need-to-have-on-your-radar/l-intro-1628720166.jpg" alt="plant" className="lg:card-image-event md:md-card-image-even" />
                                            <div className="p-4 md:p-0">
                                                <div className="lg:px-4 lg:pt-2 md:px-2 md:py-0">
                                                    <div className="flex">
                                                        {/* <svg t="1669278973564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2847" width="16" height="16"><path d="M935.385 1024H88.615c-32.63 0-59.077-26.447-59.077-59.077V157.54c0-32.63 26.447-59.077 59.077-59.077h157.539v-78.77C246.154 8.822 254.976 0 265.846 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h334.77v-78.77C679.385 8.822 688.207 0 699.077 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h157.539c32.63 0 59.077 26.446 59.077 59.076v807.385c0 32.63-26.447 59.077-59.077 59.077z m0-846.77c0-10.87-8.823-19.692-19.693-19.692H777.846v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077h-334.77v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077H108.308c-10.87 0-19.693 8.823-19.693 19.693v137.846h846.77V177.23z m0 196.924H88.615V945.23c0 10.87 8.823 19.692 19.693 19.692h807.384c10.87 0 19.693-8.822 19.693-19.692V374.154zM817.23 846.769h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z" p-id="2848" fill="#8a8a8a"></path></svg>                                                        */}
                                                         <span className="text-md ml-1 text-gray-400">11-Mar - 12-Mar</span>
                                                    </div>
                                                    <div className="pt-0.5">
                                                        <Link to="/event/1">
                                                            <h3 className="text-gray-600 md:text-sm text-xl font-semibold">Well, aren't you going uh3</h3>
                                                        </Link>
                                                    </div>
                                                    <div className="flex">
                                                    {/* <svg t="1669279063762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="20" height="20"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="4062" fill="#8a8a8a"></path></svg> */}
                                                        <span className="text-lg -mt-1 md:text-xs text-gray-400 ml-0.5">
                                                            BookMeBus, Phnom Penh
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="lg:text-xl text-lg py-2 md:p-0 md:px-2 lg:px-4 text-red-800">
                                                    <span className="md:text-sm ">$10.00</span>
                                                </div>
                                                <div className="border-t border-gray-300 mt-1  py-3 md:p-3 ">
                                                    <div
                                                        className="flex items-center space-x-3 w-full"
                                                    >
                                                        <img
                                                            className="object-cover w-14 h-14 border-2 border-green-400 rounded-full "
                                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                            alt="profile users"
                                                            loading="lazy"
                                                        />
                                                        <div className="">
                                                            <span className="text-sm font-semibold tracking-wide text-gray-600">
                                                                Author
                                                            </span>
                                                            <p className="text-xs tracking-wider text-gray-600">
                                                                2 Hours ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 md:grid md:grid-cols-3 gap-4">
                                    <div className=" items-center justify-center mt-5">
                                        <div className=" overflow-hidden bg-white shadow-xl duration-200">
                                            <img src="https://s1.ticketm.net/dam/a/087/d26e3794-731e-478c-b0ba-4b4648bd0087_1772721_RETINA_PORTRAIT_16_9.jpg" alt="plant" className="lg:card-image-event md:md-card-image-even" />
                                            <div className="p-4 md:p-0">
                                                <div className="lg:px-4 lg:pt-2 md:px-2 md:py-0">
                                                    <div className="flex">
                                                        {/* <svg t="1669278973564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2847" width="16" height="16"><path d="M935.385 1024H88.615c-32.63 0-59.077-26.447-59.077-59.077V157.54c0-32.63 26.447-59.077 59.077-59.077h157.539v-78.77C246.154 8.822 254.976 0 265.846 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h334.77v-78.77C679.385 8.822 688.207 0 699.077 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h157.539c32.63 0 59.077 26.446 59.077 59.076v807.385c0 32.63-26.447 59.077-59.077 59.077z m0-846.77c0-10.87-8.823-19.692-19.693-19.692H777.846v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077h-334.77v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077H108.308c-10.87 0-19.693 8.823-19.693 19.693v137.846h846.77V177.23z m0 196.924H88.615V945.23c0 10.87 8.823 19.692 19.693 19.692h807.384c10.87 0 19.693-8.822 19.693-19.692V374.154zM817.23 846.769h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z" p-id="2848" fill="#8a8a8a"></path></svg>                                                        */}
                                                         <span className="text-md ml-1 text-gray-400">11-Mar - 12-Mar</span>
                                                    </div>
                                                    <div className="pt-0.5">
                                                        <Link to="/event/1">
                                                            <h3 className="text-gray-600 md:text-sm text-xl font-semibold">Well, aren't you going uh3</h3>
                                                        </Link>
                                                    </div>
                                                    <div className="flex">
                                                    {/* <svg t="1669279063762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="20" height="20"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="4062" fill="#8a8a8a"></path></svg> */}
                                                        <span className="text-lg -mt-1 md:text-xs text-gray-400 ml-0.5">
                                                            BookMeBus, Phnom Penh
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="lg:text-xl text-lg py-2 md:p-0 md:px-2 lg:px-4 text-red-800">
                                                    <span className="md:text-sm ">$10.00</span>
                                                </div>
                                                <div className="border-t border-gray-300 mt-1  py-3 md:p-3 ">
                                                    <div
                                                        className="flex items-center space-x-3 w-full"
                                                    >
                                                        <img
                                                            className="object-cover w-14 h-14 border-2 border-green-400 rounded-full "
                                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                            alt="profile users"
                                                            loading="lazy"
                                                        />
                                                        <div className="">
                                                            <span className="text-sm font-semibold tracking-wide text-gray-600">
                                                                Author
                                                            </span>
                                                            <p className="text-xs tracking-wider text-gray-600">
                                                                2 Hours ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className=" items-center justify-center mt-5">
                                        <div className=" overflow-hidden bg-white shadow-xl duration-200">
                                            <img src="https://s1.ticketm.net/dam/a/729/c886aac1-6740-4f40-a8fa-86f70d168729_1596801_TABLET_LANDSCAPE_LARGE_16_9.jpg" alt="plant" className="lg:card-image-event md:md-card-image-even" />
                                            <div className="p-4 md:p-0">
                                                <div className="lg:px-4 lg:pt-2 md:px-2 md:py-0">
                                                    <div className="flex">
                                                        {/* <svg t="1669278973564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2847" width="16" height="16"><path d="M935.385 1024H88.615c-32.63 0-59.077-26.447-59.077-59.077V157.54c0-32.63 26.447-59.077 59.077-59.077h157.539v-78.77C246.154 8.822 254.976 0 265.846 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h334.77v-78.77C679.385 8.822 688.207 0 699.077 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h157.539c32.63 0 59.077 26.446 59.077 59.076v807.385c0 32.63-26.447 59.077-59.077 59.077z m0-846.77c0-10.87-8.823-19.692-19.693-19.692H777.846v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077h-334.77v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077H108.308c-10.87 0-19.693 8.823-19.693 19.693v137.846h846.77V177.23z m0 196.924H88.615V945.23c0 10.87 8.823 19.692 19.693 19.692h807.384c10.87 0 19.693-8.822 19.693-19.692V374.154zM817.23 846.769h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z" p-id="2848" fill="#8a8a8a"></path></svg>                                                        */}
                                                         <span className="text-md ml-1 text-gray-400">11-Mar - 12-Mar</span>
                                                    </div>
                                                    <div className="pt-0.5">
                                                        <Link to="/event/1">
                                                            <h3 className="text-gray-600 md:text-sm text-xl font-semibold">Well, aren't you going uh3</h3>
                                                        </Link>
                                                    </div>
                                                    <div className="flex">
                                                    {/* <svg t="1669279063762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="20" height="20"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="4062" fill="#8a8a8a"></path></svg> */}
                                                        <span className="text-lg -mt-1 md:text-xs text-gray-400 ml-0.5">
                                                            BookMeBus, Phnom Penh
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="lg:text-xl text-lg py-2 md:p-0 md:px-2 lg:px-4 text-red-800">
                                                    <span className="md:text-sm ">$10.00</span>
                                                </div>
                                                <div className="border-t border-gray-300 mt-1  py-3 md:p-3 ">
                                                    <div
                                                        className="flex items-center space-x-3 w-full"
                                                    >
                                                        <img
                                                            className="object-cover w-14 h-14 border-2 border-green-400 rounded-full "
                                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                            alt="profile users"
                                                            loading="lazy"
                                                        />
                                                        <div className="">
                                                            <span className="text-sm font-semibold tracking-wide text-gray-600">
                                                                Author
                                                            </span>
                                                            <p className="text-xs tracking-wider text-gray-600">
                                                                2 Hours ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className=" items-center justify-center mt-5">
                                        <div className=" overflow-hidden bg-white shadow-xl duration-200">
                                            <img src="https://www.thelist.com/img/gallery/2021-music-festivals-you-need-to-have-on-your-radar/l-intro-1628720166.jpg" alt="plant" className="lg:card-image-event md:md-card-image-even" />
                                            <div className="p-4 md:p-0">
                                                <div className="lg:px-4 lg:pt-2 md:px-2 md:py-0">
                                                    <div className="flex">
                                                        {/* <svg t="1669278973564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2847" width="16" height="16"><path d="M935.385 1024H88.615c-32.63 0-59.077-26.447-59.077-59.077V157.54c0-32.63 26.447-59.077 59.077-59.077h157.539v-78.77C246.154 8.822 254.976 0 265.846 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h334.77v-78.77C679.385 8.822 688.207 0 699.077 0h59.077c10.87 0 19.692 8.822 19.692 19.692v78.77h157.539c32.63 0 59.077 26.446 59.077 59.076v807.385c0 32.63-26.447 59.077-59.077 59.077z m0-846.77c0-10.87-8.823-19.692-19.693-19.692H777.846v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077h-334.77v59.077c0 10.87-8.822 19.693-19.692 19.693h-59.077c-10.87 0-19.692-8.822-19.692-19.693v-59.077H108.308c-10.87 0-19.693 8.823-19.693 19.693v137.846h846.77V177.23z m0 196.924H88.615V945.23c0 10.87 8.823 19.692 19.693 19.692h807.384c10.87 0 19.693-8.822 19.693-19.692V374.154zM817.23 846.769h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z m-256 216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.823 19.692 19.693v78.769c0 10.87-8.822 19.692-19.692 19.692z m0-216.615h-78.77c-10.87 0-19.692-8.822-19.692-19.692v-78.77c0-10.87 8.822-19.692 19.693-19.692h78.769c10.87 0 19.692 8.822 19.692 19.692v78.77c0 10.87-8.822 19.692-19.692 19.692z" p-id="2848" fill="#8a8a8a"></path></svg>                                                        */}
                                                         <span className="text-md ml-1 text-gray-400">11-Mar - 12-Mar</span>
                                                    </div>
                                                    <div className="pt-0.5">
                                                        <Link to="/event/1">
                                                            <h3 className="text-gray-600 md:text-sm text-xl font-semibold">Well, aren't you going uh3</h3>
                                                        </Link>
                                                    </div>
                                                    <div className="flex">
                                                    {/* <svg t="1669279063762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4061" width="20" height="20"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="4062" fill="#8a8a8a"></path></svg> */}
                                                        <span className="text-lg -mt-1 md:text-xs text-gray-400 ml-0.5">
                                                            BookMeBus, Phnom Penh
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="lg:text-xl text-lg py-2 md:p-0 md:px-2 lg:px-4 text-red-800">
                                                    <span className="md:text-sm ">$10.00</span>
                                                </div>
                                                <div className="border-t border-gray-300 mt-1  py-3 md:p-3 ">
                                                    <div
                                                        className="flex items-center space-x-3 w-full"
                                                    >
                                                        <img
                                                            className="object-cover w-14 h-14 border-2 border-green-400 rounded-full "
                                                            src="https://storageapi.fleek.co/kamaludin21-team-bucket/portfolio/avatar.jpg"
                                                            alt="profile users"
                                                            loading="lazy"
                                                        />
                                                        <div className="">
                                                            <span className="text-sm font-semibold tracking-wide text-gray-600">
                                                                Author
                                                            </span>
                                                            <p className="text-xs tracking-wider text-gray-600">
                                                                2 Hours ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-8 p-4 lg:p-0  lg:w-1/3 md:flex md:h-full bg-red-100 h-full">
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
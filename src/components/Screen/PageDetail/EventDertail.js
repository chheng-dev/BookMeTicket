import React from "react";
import Footer from "../../Footer"


function EventDetail() {
    return (
        <>
            <header className="w-full">
                <div className="container bg-red-300 mx-auto mt-4">
                    <img
                        className="content-page-detail w-full rounded-t-xl "
                        src="https://m.thepeninsulaqatar.com/get/maximage/20221021_1666370619-755.JPG?1666370619"
                        alt="thumbnail"
                        loading="lazy"
                    />
                </div>
            </header>
            <div className="container mx-auto mt-4 p-4 md:p-0 bg-white">
                <div className="grid grid-cols-1 md:flex md:gap-32">
                    <div className="md:flex md:w-2/3 min-h-screen justify-start">
                        <div>
                            <h2 className="font-bold md:text-3xl text-xl">
                                SparkMeet “Deep Learning and Khmer Text Recognit
                            </h2>
                            <div className="w-full">
                                <span className="flex">
                                    <svg t="1669090505682" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2331" width="20" height="20"><path d="M512 64c-172.3 0-312 139.7-312 312 0 139.8 205.3 437 282.8 544.3 7.2 9.9 18.2 14.9 29.2 14.9s22-5 29.2-14.9C618.7 813 824 515.8 824 376c0-172.3-139.7-312-312-312z m0 424c-64.1 0-116-51.9-116-116s51.9-116 116-116 116 51.9 116 116-51.9 116-116 116z" p-id="2332"></path></svg>
                                    <p className="ml-2 text-md text-gray-400">The Desk Flagship - Daun Penh</p>
                                </span>
                            </div>
                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl">
                                    About Event
                                </h2>
                                <div className="flex gap-6">
                                    <div className="flex-block">
                                        <p className="text-gray-400">Duration</p>
                                        <p>From 11 Sep - 12 rd Oct 2022</p>
                                    </div>
                                    <div className="flex-block">
                                        <p className="text-gray-400">Start Time</p>
                                        <p>9:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl">
                                    Event Locaton
                                </h2>
                                <div className="flex">
                                    <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6386945005797!2d104.90384381533713!3d11.577738247055695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095132315da61b%3A0x3c91a9e3aeb49ae9!2sBookMeBus!5e0!3m2!1sen!2skh!4v1668570367336!5m2!1sen!2skh" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl">
                                    Description
                                </h2>
                                <div className="flex">
                                    <p>In 2022, JCI Cambodia is delighted to bring you new experience of Leadership Academy. We would like to introduce four hight profile guest speakers having long experience in JCI with various role. 1. 2022 World Executive Vice President Senator KHOUCH Pheng 2. 2019 Nation President of JCI Cambodia Senator SUON Chula 3. 2022 National President of JCI Cambodia Senator SROUR Narya 4. 2022 Academy Director Mr. KHIM Bunlene</p>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl">
                                    What we offer
                                </h2>
                                <div className="flex gap-12">
                                    <div className="flex w-1/3">
                                        <svg t="1669106219486" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">Free lunch</span>
                                    </div>
                                    <div className="flex w-1/3">
                                        <svg t="1669106219486" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">JCI merchandise</span>
                                    </div>
                                </div>
                                <div className="flex gap-12 ">
                                    <div className="flex w-1/3">
                                        <div>
                                        <svg t="1669106219486" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">Get certificate after joinned</span> 
                                        </div>
                                    </div>
                                    <div className="flex w-1/3">
                                        <svg t="1669106219486" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3246" width="16" height="16"><path d="M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM448 605.12L277.312 442.176 192 523.648 448 768l384-366.528L746.688 320 448 605.12z" fill="#0C855D" p-id="3247"></path></svg>
                                        <span className="ml-2">Lorem ipsum dolor sit amet</span>
                                    </div>
                                </div>
                            </div>

                            <div className="my-6">
                                <h2 className="font-bold md:text-3xl text-xl">
                                    Event host by
                                </h2>
                                <div class="flex bg-white">
                                    <div class="flex items-start py-6">
                                        <img class="w-16 h-16 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                                            <div class="">
                                                <div class="flex items-center justify-between">
                                                    <h2 class="text-lg font-semibold text-gray-900 -mt-1">Techo Startup Center </h2>
                                                </div>
                                                <p class="mt-3 text-gray-700 text-sm">
                                                We are a membership-based nonprofit organization of 200,000 young people ages 18 to 40 in 5,000 communities and more than 100 countries around the world.
                                                </p>
                                                <div class="mt-4 flex items-center">
                                                    <div class="flex text-primary cursor-pointer text-sm mr-3">
                                                        <span>View Profile</span>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="md:flex md:w-1/3 h-full justify-end rounded bg-white border border-gray-300 md:border-0 md:shadow-xl p-4">
                        <div className="w-full">
                            <div className="flex gap-4">
                                <div className="flex w-1/2 justify-start items-center">
                                    <span>Price</span>
                                </div>
                                <div className="flex w-1/2 justify-end items-center">
                                    <span className="font-bold text-xl">$68.00 <span className="text-sm font-normal">/ Per Ticket</span></span>
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
                            <div className="w-full my-6">
                                <button className="bg-primary w-full py-4 text-white rounded hover:bg-primary-300 focus:bg-primary-600">Buy Ticket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}



export default EventDetail;
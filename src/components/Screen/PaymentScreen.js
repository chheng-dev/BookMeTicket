import React from "react";
import abaLogo from "../../images/aba.png"
import creditLogo from "../../images/credit.png"
import Footer from "../Footer";

function PaymentPage() {
    return (
        <div>
            <div className="w-full text-black mt-8 pb-8">
                <div className="container mx-auto">
                    <div className="md:flex md:gap-12">
                        <div className="md:flex h-full md:w-3/5 rounded p-4 justify-start items-center md:shadow-md bg-white">
                            <div className="w-full">
                                <h1 className="text-2xl font-meduim">Choose Payment Methods</h1>
                                <div>
                                    <div className="flex bg-white border border-gray-400 rounded">
                                        <div className="w-full h-full">
                                            <div className="flex items-start px-8 py-3 gap-2">
                                                <div className="flex">
                                                    <img className="w-14 h-10  mr-4 shadow" src={abaLogo} alt="avatar" />
                                                </div>
                                                <div className="flex-block w-3/6">
                                                    <div className="flex items-center justify-between">
                                                        <h2 className="text-sm font-semibold text-gray-900 -mt-1">ABA PAY</h2>

                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="text-gray-400 text-xs">Scan to pay with ABA Mobile</span>
                                                    </div>
                                                </div>
                                                <div className="flex w-2/6 justify-end items-center">

                                                    <svg t="1669178518020" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4946" width="20" height="20"><path d="M512 65.984C266.08 65.984 65.984 266.08 65.984 512c0 245.952 200.064 446.016 446.016 446.016 245.952 0 446.016-200.064 446.016-446.016C958.016 266.08 757.952 65.984 512 65.984zM512 894.016C301.344 894.016 129.984 722.624 129.984 512 129.984 301.344 301.344 129.984 512 129.984c210.624 0 382.016 171.36 382.016 382.016C894.016 722.624 722.624 894.016 512 894.016z" p-id="4947" fill="#2EBAE2"></path><path d="M512 352c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160S600.224 352 512 352z" p-id="4948" fill="#2EBAE2"></path></svg>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex bg-white border my-3 border-gray-400 rounded">
                                        <div className="w-full h-full">
                                            <div className="flex items-start px-8 py-3 gap-2">
                                                <div className="flex">
                                                    <img className="w-14 h-10  mr-4 shadow" src={creditLogo} alt="avatar" />
                                                </div>
                                                <div className="flex-block w-3/6">
                                                    <div className="flex items-center justify-between">
                                                        <h2 className="text-sm font-semibold text-gray-900 -mt-1">ABA PAY</h2>

                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="text-gray-400 text-xs">Scan to pay with ABA Mobile</span>
                                                    </div>
                                                </div>
                                                <div className="flex w-2/6 justify-end">
                                                    <svg t="1669179384368" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5892" width="22" height="22"><path d="M512 213.333333a298.666667 298.666667 0 1 1-298.666667 298.666667 298.666667 298.666667 0 0 1 298.666667-298.666667m0-85.333333a384 384 0 1 0 384 384A384 384 0 0 0 512 128z" p-id="5893" fill="#2EBAE2"></path></svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="my-4 text-center">
                                    <h6>By Paynow, you have agreed with <span className="text-primary">terms & condition</span></h6>
                                </div>
                                <div className="w-full h-full">
                                    <a href="./ticket">
                                    <button className="bg-primary w-full py-4 text-white rounded hover:bg-primary-300 focus:bg-primary-600">Pay Now</button>
                                    </a>
                               </div>
                            </div>
                        </div>
                        <div className="md:flex md:w-2/5 h-full rounded max-w-sm">
                            <div className="p-4 md:shadow-md h-full">
                                <div className="flex gap-4">
                                    <div className="flex h-full w-1/2">
                                        <img src="https://media.slidesgo.com/storage/8857150/leadership-training-event-for-business1626957387.jpg" />
                                    </div>
                                    <div className="flex w-1/2">
                                        <h6 className="text-lg">SparkMeet “Deep Learning and Khmer Text Recognit</h6>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h6 className="text-2xl font-bold">Order Summary</h6>
                                    <div className="my-3 border-b pb-3 border-gray-300 items-center">
                                        <span>$68.00 Per Ticket</span>
                                    </div>
                                    <div className="my-3 border-b pb-3 border-gray-300">
                                        <div className="flex gap-2">
                                            <div className="flex w-1/2 justify-start items-center">
                                                <span>$68.00 * 1 Ticket</span>
                                            </div>
                                            <div className="flex w-1/2 justify-end items-center">
                                                <span>$68.00</span>
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
                                                <span className="text-2xl font-bold">$68.50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <div className="flex w-1/3 "></div> */}
                    </div>
                </div>

            </div>
            <Footer/>
        </div>

    )
}

export default PaymentPage
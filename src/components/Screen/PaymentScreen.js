import React, { useState, useEffect } from "react";
import abaLogo from "../../images/aba.png"
import creditLogo from "../../images/credit.png"
import Footer from "../Footer";
import { Link, useParams } from "react-router-dom"
import Loading from "../Loading/Loading";
import { Space, Modal, Button } from "antd";
import NavLogo from "../NavLogo";
import { MobileView, BrowserView } from "react-device-detect";
import NavbarBottom from "../NavBarBottom";
import CurrencyFormat from "react-currency-format";

function PaymentPage() {
    const param = useParams()
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false);


    const getProductDetail = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://63b559c858084a7af39162c7.mockapi.io/ticketing/${param.id}`, {});
            const data = await respone.json();
            setProduct(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const showModal = () => {
        setIsModalOpen(true);
    }
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
        getProductDetail();
    }, {});

    if (loading) {
        return (
            <Loading />
        )
    }
    return (

        <>
            <div className="w-full">
                <BrowserView>
                    <NavLogo />
                </BrowserView>

                <div className="w-full page-detail m-auto h-full">
                    <div className="pt-24">
                        <div className="md:flex md:gap-4 justify-center center-center">
                            <div className="md:flex md:w-8/12 p-4 md:p-0">
                                <div className="p-4 box-shadow w-full rounded-md md:py-8 bg-white">
                                    <h3 className="text-gray-600 dark:text-white font-semibold text-2xl">Choose Payment Methods</h3>
                                    <div className="md:pt-4">
                                        <div className="flex border bg-lightGray rounded-md md:mt-4">
                                            <div className="w-full h-full">
                                                <label for="plan-hobby" class="relative flex flex-block bg-white p-5 rounded-md box-shadow cursor-pointer">
                                                    <div className="w-full h-full">
                                                        <div className="flex items-start md:gap-2">
                                                            <div className="flex">
                                                                <img className="w-14 h-10  mr-4 box-shadow" src={abaLogo} alt="avatar" />
                                                            </div>
                                                            <div className="flex-block w-5/6">
                                                                <div className="flex items-center justify-between">
                                                                    <h2 className="text-sm font-semibold text-gray-900 dark:text-white -mt-1">ABA PAY</h2>

                                                                </div>
                                                                <div className="flex items-center">
                                                                    <span className="text-gray-400 text-xs dark:text-white">Scan to pay with ABA Mobile</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <input type="radio" name="plan" id="plan-hobby" value="hobby" class="absolute h-0 w-0 appearance-none" />
                                                    <span aria-hidden="true" class="hidden absolute inset-0 border border-primary  bg-opacity-10 rounded-md">
                                                        <span class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-green-600">
                                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>

                                        </div>

                                        <div className="flex border my-3 bg-lightGray rounded">
                                            <div className="w-full h-full">
                                                <label for="plan-growth" class="relative flex flex-block bg-white p-5 rounded-md box-shadow cursor-pointer">
                                                    <div className="w-full h-full">
                                                        <div className="flex items-start md:gap-2">
                                                            <div className="flex">
                                                                <img className="w-14 h-10  mr-4 box-shadow" src={creditLogo} alt="avatar" />
                                                            </div>
                                                            <div className="flex-block w-5/6">
                                                                <div className="flex items-center justify-between">
                                                                    <h2 className="text-sm font-semibold text-gray-900 dark:text-white -mt-1">ABA PAY</h2>

                                                                </div>
                                                                <div className="flex items-center">
                                                                    <span className="text-gray-400 text-xs dark:text-white">Scan to pay with ABA Mobile</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input type="radio" name="plan" id="plan-growth" value="growth" class="absolute h-0 w-0 appearance-none" />
                                                    <span aria-hidden="true" class="hidden absolute inset-0 border border-primary  bg-opacity-10 rounded-md">
                                                        <span class="absolute top-4 right-4 h-6 w-6 inline-flex items-center justify-center rounded-full ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-green-600">
                                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="my-6 text-center">
                                        <h6 className="dark:text-white text-xs md:text-base">By Paynow, you have agreed with <span className="text-primary cursor-pointer" onClick={showModal}>terms & condition</span></h6>
                                    </div>
                                    <div className="w-full h-full">
                                        <Link to={`/ticket/${product.id}`}>
                                            <Button type="primary" block size="large">

                                                <Space>
                                                    <svg t="1672215516468" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5508" width="24" height="24"><path d="M864 896H32c-19.2 0-32-12.8-32-32V288c0-19.2 12.8-32 32-32h832c19.2 0 32 12.8 32 32v576c0 19.2-12.8 32-32 32zM64 832h768V320H64v512z" fill="#e6e6e6" p-id="5509"></path><path d="M448 768c-70.4 0-128-51.2-128-112 0-19.2 12.8-32 32-32s32 12.8 32 32c0 25.6 28.8 48 64 48s64-22.4 64-48c0-22.4-25.6-48-64-48-70.4 0-128-48-128-112 0-60.8 57.6-112 128-112s128 51.2 128 112c0 19.2-12.8 32-32 32s-32-12.8-32-32c0-25.6-28.8-48-64-48s-64 22.4-64 48 28.8 48 64 48c70.4 0 128 51.2 128 112S518.4 768 448 768z" fill="#e6e6e6" p-id="5510"></path><path d="M448 441.6c-19.2 0-32-12.8-32-32V384c0-19.2 12.8-32 32-32s32 12.8 32 32v25.6c0 19.2-12.8 32-32 32zM448 800c-19.2 0-32-12.8-32-32v-25.6c0-19.2 12.8-32 32-32s32 12.8 32 32v25.6c0 19.2-12.8 32-32 32z" fill="#e6e6e6" p-id="5511"></path><path d="M992 800c-19.2 0-32-12.8-32-32V192H128c-19.2 0-32-12.8-32-32s12.8-32 32-32h864c19.2 0 32 12.8 32 32v608c0 19.2-12.8 32-32 32z" fill="#e6e6e6" p-id="5512"></path></svg>
                                                    Pay Now
                                                </Space>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex md:w-4/12 p-4 md:p-0">
                                <div className="p-4 w-full dark:text-white box-shadow bg-white rounded-md">
                                    <div className="flex gap-4">
                                        <div className="flex h-full w-1/2">
                                            <img className="object-cover h-32 rounded-lg w-full" src={product.image} />
                                        </div>
                                        <div className="flex w-1/2">
                                            <h6 className="text-lg line-clamp-2 dark:text-white">{product.title}</h6>
                                            {/* <span>26 Nov - 27 Nov 2022 | 9:00 AM</span> */}
                                        </div>
                                    </div>
                                    <h6 className="text-gray-700 dark:text-white font-normal text-xl my-6">Order Summary</h6>
                                    <div className="my-3 border-b pb-3 border-gray-300 items-center">
                                        <span>${product.price} Per Ticket</span>
                                    </div>
                                    <div className="my-3 border-b pb-3 border-gray-300">
                                        <div className="flex gap-2">
                                            <div className="flex w-1/2 justify-start items-center">
                                                <span>${product.price} * 1 Ticket</span>
                                            </div>
                                            <div className="flex w-1/2 justify-end items-center">
                                                <span>${product.price}</span>
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
                                    <div className="my-3">
                                        <div className="flex gap-2">
                                            <div className="flex w-1/2 justify-start items-center">
                                                <Space>
                                                    <svg t="1673257721430" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21787" width="1.25rem" height="1.25rem"><path d="M864 896H32c-19.2 0-32-12.8-32-32V288c0-19.2 12.8-32 32-32h832c19.2 0 32 12.8 32 32v576c0 19.2-12.8 32-32 32zM64 832h768V320H64v512z" fill="#707070" p-id="21788"></path><path d="M448 768c-70.4 0-128-51.2-128-112 0-19.2 12.8-32 32-32s32 12.8 32 32c0 25.6 28.8 48 64 48s64-22.4 64-48c0-22.4-25.6-48-64-48-70.4 0-128-48-128-112 0-60.8 57.6-112 128-112s128 51.2 128 112c0 19.2-12.8 32-32 32s-32-12.8-32-32c0-25.6-28.8-48-64-48s-64 22.4-64 48 28.8 48 64 48c70.4 0 128 51.2 128 112S518.4 768 448 768z" fill="#707070" p-id="21789"></path><path d="M448 441.6c-19.2 0-32-12.8-32-32V384c0-19.2 12.8-32 32-32s32 12.8 32 32v25.6c0 19.2-12.8 32-32 32zM448 800c-19.2 0-32-12.8-32-32v-25.6c0-19.2 12.8-32 32-32s32 12.8 32 32v25.6c0 19.2-12.8 32-32 32z" fill="#707070" p-id="21790"></path><path d="M992 800c-19.2 0-32-12.8-32-32V192H128c-19.2 0-32-12.8-32-32s12.8-32 32-32h864c19.2 0 32 12.8 32 32v608c0 19.2-12.8 32-32 32z" fill="#707070" p-id="21791"></path></svg>
                                                    Total Price
                                                </Space>
                                            </div>
                                            <div className="flex w-1/2 justify-end items-center">
                                                <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} className="font-semibold text-lg" />                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal title="Term & Conditions" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} maskClosable={false}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </Modal>
                <Footer class="absolute bottom-0" />
            </div>
            <MobileView>
                <NavbarBottom />
            </MobileView>
        </>
    )
}

export default PaymentPage
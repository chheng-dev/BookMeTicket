import React, { useState, useEffect } from "react";
import "../index.css"
import { Link, useParams } from "react-router-dom"
import Loading from "./Loading/Loading";
import { FiPhone, FiLock, FiEyeOff, FiEye, FiLogOut, FiMail } from "react-icons/fi";
import { Space, Input, Form,Button } from "antd";
import NavLogo from "./NavLogo";
import { MobileView, BrowserView } from "react-device-detect";
import NavbarBottom from "./NavBarBottom";
import Footer from "./Footer";
import CurrencyFormat from "react-currency-format";



function GuestInfo() {
    const param = useParams()
    const [loading, setLoading] = useState(false)
    console.log("param", param)
    const [product, setProduct] = useState({})

    const getProductDetail = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://fakestoreapi.com/products/${param.id}`, {});
            const data = await respone.json();
            setProduct(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

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
                                <div class="p-4 box-shadow w-full rounded-md md:py-8 bg-white">
                                    <Form
                                        layout="vertical"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        autoComplete="off"
                                    >
                                        <h3 className="text-gray-600 dark:text-white font-semibold text-2xl">Guest InFormation</h3>
                                        <Form.Item
                                            label="Phone Number"
                                            name="phoneNumber"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your phone number!',
                                                },
                                            ]}>
                                            <Input type="number" bordered addonBefore={<FiPhone />} placeholder="010 XXX XXXX" size="large" className="rounded-lg" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your email!',
                                                },
                                            ]}>
                                            <Input className="text-xs" addonBefore={<FiMail />} type="email" bordered placeholder="example@gmail.com" size="large" />
                                        </Form.Item>
                                        <Form.Item
                                            label="Password"
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                            ]}>
                                            <Input type="password" bordered placeholder="*********" addonBefore={<FiLock />} size="large" className="rounded-lg" iconRender={visible => (visible ? <FiEye /> : <FiEyeOff />)} />
                                        </Form.Item>
                                        <div className="mt-6 text-center text-gray-400 text-xs">
                                            <p>By Check out, you have agreed with <span className="text-primaruy-600">terms and condition</span></p>
                                        </div>
                                        <div className="w-full h-full">
                                            <div className="pt-4">
                                                <Link to={`/payment/${product.id}`}>
                                                    <Button className="bg-primary" htmlType="submit" block size="large">
                                                        <Space>
                                                            <FiLogOut className="text-lg" />Check out
                                                        </Space>
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                            <div className="md:flex md:w-4/12 p-4 md:p-0">
                                <div className="p-4 w-full dark:text-white box-shadow bg-white rounded-md">
                                    <div className="flex gap-4">
                                        <div className="flex h-full w-1/2 bg-lightGray">
                                            <img className="object-contain h-32 rounded-lg w-full" src={product.image} />
                                        </div>
                                        <div className="flex w-1/2">
                                            <h6 className="text-md line-clamp-2 dark:text-white">{product.title}</h6>
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
                                    <div className="my-3 border-b pb-3 border-gray-300">
                                        <div className="flex gap-2">
                                            <div className="flex w-1/2 justify-start items-center">
                                                <span>Total Price</span>
                                            </div>
                                            <div className="flex w-1/2 justify-end items-center">
                                                <CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer class="absolute bottom-0" />
            </div>
            <MobileView>
                <NavbarBottom />
            </MobileView>
        </>
    )
}

export default GuestInfo

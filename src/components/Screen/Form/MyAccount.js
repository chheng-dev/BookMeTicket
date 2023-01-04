import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { BrowserView, IOSView, isMobile, MobileView } from "react-device-detect";
import { Tabs, Input, Select, DatePicker, Space, Form, Button } from "antd";
import { FiUser, FiShoppingCart, FiLogOut, FiLock, FiEye, FiEyeOff, FiPhone, FiMail } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc"
import TabPane from "antd/lib/tabs/TabPane";
import NavLogo from "../../NavLogo";
import Loading from "../../Loading/Loading";
import { FiCalendar, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavbarBottom from "../../NavBarBottom";

const MyAccount = () => {
    const [loading, setLoading] = useState(false)
    const [carts, setCart] = useState([]);
    const [mode, setMode] = useState('left');
    const getCarts = async () => {
        try {
            setLoading(true)
            const respone = await fetch(`https://fakestoreapi.com/products`);
            const data = await respone.json();
            setCart(data)
            setLoading(false)
            console.log(data)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getCarts();
        if (isMobile) {
            setMode('top')
        }
    }, [])
    const Account = () => {
        return (
            <>
                <span className="flex items-center justify-center">
                    <FiUser className="text-xl" />
                    <span className="ml-2">My Account</span>
                </span>
            </>
        )
    }
    const AccountContent = () => {
        return (
            <>
                <div className="w-full md:max-w-xl p-4 mt-2 box-shadow rounded-md">
                    <h6 className="text-gray-700 dark:text-white font-normal text-xl">My Account</h6>
                    <Form
                        layout="vertical"
                        initialValues={{
                            remember: true,
                        }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Full Name"
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your fullname!',
                                },
                            ]}>
                            <Input type="number" bordered addonBefore={<FiUser />} placeholder="010 XXX XXXX" size="large" className="rounded-md w-full" />
                        </Form.Item>
                        <Form.Item
                            label="Gender"
                            name="gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your gender!',
                                },
                            ]}>
                            <Select
                                className="w-full"
                                placeholder="Select a Gender"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                }
                                options={[
                                    {
                                        value: 'femal',
                                        label: 'Femal',
                                    },
                                    {
                                        value: 'male',
                                        label: 'Male',
                                    },
                                ]}
                            />

                        </Form.Item>
                        <Form.Item
                            label="Birth of date"
                            name="dob"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your birth of date!',
                                },
                            ]}>
                            <DatePicker className="w-full" />
                        </Form.Item>
                        <Form.Item
                            label="Phone Number"
                            name="dob"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your birth of phone number!',
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
                                    message: 'Please input your birth of email!',
                                },
                            ]}>
                            <Input className="text-xs" addonBefore={<FiMail />} type="email" bordered placeholder="example@gmail.com" size="large" />

                        </Form.Item>
                        <div className="mt-4">
                            <Button className="bg-primary" htmlType="submit" block size="large">
                                Update
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="w-full md:max-w-xl p-4  rounded-md my-4 bg-white box-shadow">
                    <h6 className="text-gray-700 dark:text-white font-normal text-xl">Connect Social Media</h6>
                    <div className="py-1">
                        <div class="flex md:grid md:grid-cols-12 gap-y-4 bg-lightGray p-4 rounded-md">
                            <div className="flex">
                                <svg t="1672733396907" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9678" width="48" height="48"><path d="M512.042667 85.418667c-235.605333 0-426.624 191.018667-426.624 426.624 0 212.906667 155.989333 389.376 359.978666 421.504v-298.154667h-108.373333v-123.349333h108.373333V418.048c0-107.008 63.701333-166.016 161.109334-166.016 46.677333 0 95.573333 8.32 95.573333 8.32v104.917333h-53.930667c-52.906667 0-69.461333 32.938667-69.461333 66.688v80h118.229333l-18.901333 123.349334h-99.328v298.154666C782.677333 901.504 938.666667 724.992 938.666667 512.042667c0-235.605333-191.018667-426.624-426.624-426.624z" p-id="9679" fill="#0169e3"></path></svg>
                            </div>
                            <div className="flex w-3/5 md:col-span-10 ml-4">
                                <div>
                                    <div className="text-gray-600 font-bold"> Connect to Facebook </div>
                                    <div className="text-gray-400 text-xs font-medium"> menghour@bookmebus.com </div>
                                </div>
                            </div>

                            <div className="flex w-4/5 justify-end items-end">
                                <p className="rounded-lg font-bold  py-1 px-3 text-sm w-fit h-fit">
                                    <svg t="1672735023227" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19739" width="24" height="24"><path d="M512 65.984C266.08 65.984 65.984 266.08 65.984 512c0 245.952 200.064 446.016 446.016 446.016 245.952 0 446.016-200.064 446.016-446.016C958.016 266.08 757.952 65.984 512 65.984zM727.232 438.432l-256.224 259.008c-0.064 0.064-0.192 0.096-0.256 0.192-0.096 0.064-0.096 0.192-0.192 0.256-2.048 1.984-4.576 3.2-6.944 4.544-1.184 0.672-2.144 1.696-3.392 2.176-3.84 1.536-7.904 2.336-11.968 2.336-4.096 0-8.224-0.8-12.096-2.4-1.28-0.544-2.304-1.632-3.52-2.304-2.368-1.344-4.832-2.528-6.88-4.544-0.064-0.064-0.096-0.192-0.16-0.256-0.064-0.096-0.192-0.096-0.256-0.192l-126.016-129.504c-12.32-12.672-12.032-32.928 0.64-45.248 12.672-12.288 32.896-12.064 45.248 0.64l103.264 106.112 233.28-235.84c12.416-12.576 32.704-12.704 45.248-0.256C739.52 405.6 739.648 425.856 727.232 438.432z" p-id="19740" fill="#36890B"></path></svg>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="py-1">
                        <div className="flex md:grid md:grid-cols-12 gap-y-4 bg-lightGray p-4 rounded-md">
                            <div>
                                <svg t="1672734899813" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13687" width="48" height="48"><path d="M214.101333 512c0-32.512 5.546667-63.701333 15.36-92.928L57.173333 290.218667A491.861333 491.861333 0 0 0 4.693333 512c0 79.701333 18.858667 154.88 52.394667 221.610667l172.202667-129.066667A290.56 290.56 0 0 1 214.101333 512" fill="#FBBC05" p-id="13688"></path><path d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88" fill="#EA4335" p-id="13689"></path><path d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776" fill="#34A853" p-id="13690"></path><path d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667" fill="#4285F4" p-id="13691"></path></svg>                                        </div>
                            <div className="col-span-10 md:col-span-10 ml-4">
                                <div className="text-gray-600 font-bold"> Connect to Google </div>
                                <div className="text-gray-400 text-xs font-medium"> menghour@bookmebus.com </div>
                            </div>

                            <div className="flex w-4/5 justify-end items-end">
                                <p className="rounded-lg font-bold  py-1 px-3 text-sm w-fit h-fit">
                                    <svg t="1672734965555" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17860" width="24" height="24"><path d="M512 938.666667c235.648 0 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667z m0 85.333333C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z" fill="#36890B" p-id="17861"></path></svg>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
    const Ticket = () => {
        return (
            <>
                <span className="flex items-center justify-center">
                    <FiShoppingCart className="text-xl" />
                    <span className="ml-2">My Tciket</span>
                </span>
            </>
        )
    }
    const TicketContent = () => {
        if (loading) {
            return (<Loading />);
        }
        return (
            <>
                <div className="w-full md:max-w-xl p-4 pb-0 box-shadow rounded-md">
                    <h6 className="text-gray-700 dark:text-white font-normal text-xl">My Ticket</h6>
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane tab="Upcoming" key="1">
                            {
                                carts.map((cart, idx) => {
                                    return (
                                        <div className="w-full border-b border-lightGray-600 py-3">
                                            <div className="flex md:gap-6 gap-3">
                                                <div className="md:flex">
                                                    <div className=" text-center">
                                                        <div className="bg-lightGray my-1 px-5 py-1 rounded-md">
                                                            <span className="block text-gray-600">
                                                                Nov
                                                            </span>
                                                            <span className="block text-primary text-xl font-bold">
                                                                22
                                                            </span>
                                                            <span className="block text-gray-600">
                                                                2023
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex w-1/5">
                                                    <div className="w-full mx-auto flex justify-center items-baseline">
                                                        <img src={cart.image} className="w-16 rounded-md object-contain flex items-center" />
                                                    </div>
                                                </div>
                                                <div className="flex w-3/5">
                                                    <div className="w-full">
                                                        <span className="text-xs text-gray-500 block">Ticket No <span className="text-gray-700 font-semibold text-xs">12345678</span></span>
                                                        <div className="text-gray-500 pry-1">
                                                            <span className="flex my-1">
                                                                <FiCalendar /><span className="text-xs ml-2">26 Nov - 27 Nov 2022 | 9:00 AM</span>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-gray-700 text-md">SparkMeet “Deep Learning and Khmer Text Recognit</h3>
                                                        </div>
                                                        <div className="block">
                                                            <span>1 Ticket</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <div className="mt-3 flex">
                                                                <div className="w-1/2 justify-start">
                                                                    <span className="font-semibold">$10.00</span>
                                                                </div>
                                                                <div className="w-1/2 justify-end">
                                                                    <Link to={`/event/${cart.id}`}>
                                                                        <span className="text-primary flex justify-end items-center">
                                                                            View Detail <FiChevronRight className="text-lg" />
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Past Booking" key="2">
                            {
                                carts.map((cart, idx) => {
                                    return (
                                        <div className="w-full border-b border-lightGray-600 py-3" key={`tickerId-${idx}`}>
                                            <div className="flex md:gap-6 gap-3">
                                                <div className="flex">
                                                    <div className=" text-center">
                                                        <div className="bg-lightGray my-1 px-5 py-1 rounded-md">
                                                            <span className="block text-gray-600">
                                                                Nov
                                                            </span>
                                                            <span className="block text-primary text-xl font-bold">
                                                                22
                                                            </span>
                                                            <span className="block text-gray-600">
                                                                2023
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex w-1/5">
                                                    <div className="w-full mx-auto flex justify-center items-baseline">
                                                        <img src={cart.image} className="w-16 rounded-md object-contain flex items-center" />
                                                    </div>
                                                </div>
                                                <div className="flex w-3/5">
                                                    <div className="w-full">
                                                        <span className="text-xs text-gray-500 block">Ticket No <span className="text-gray-700 font-semibold text-xs">12345678</span></span>
                                                        <div className="text-gray-500 py-1">
                                                            <span className="flex">
                                                                <FiCalendar /><span className="text-xs ml-2">26 Nov - 27 Nov 2022 | 9:00 AM</span>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-gray-700 text-md">SparkMeet “Deep Learning and Khmer Text Recognit</h3>
                                                        </div>
                                                        <div className="block">
                                                            <span>1 Ticket</span>
                                                        </div>
                                                        <div className="w-full">
                                                            <div className="mt-3 flex">
                                                                <div className="w-1/2 justify-start">
                                                                    <span className="font-semibold">$10.00</span>
                                                                </div>
                                                                <div className="w-1/2 justify-end">
                                                                    <Link to={`/event/${cart.id}`}>
                                                                        <span className="text-primary flex justify-end items-center">
                                                                            View Detail <FiChevronRight className="text-lg" />
                                                                        </span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Cancellation" key="3">
                            Content of Tab Pane 3
                        </Tabs.TabPane>
                    </Tabs>
                </div>
            </>
        )
    }
    const Logout = () => {
        return (
            <>
                <span className="flex items-center justify-center">
                    <FiLogOut className="text-xl text-red" />
                    <span className="ml-2 text-red font-meduim">Log out</span>
                </span>
            </>
        )
    }
    return (
        <>
            <div className="w-full py-12 md:p-0">
                <BrowserView>
                    <Navbar />
                </BrowserView>

                <div className="w-full page-detail m-auto h-full my-8">
                    <div className="md:p-0 p-4">
                        <Tabs defaultActiveKey="1" tabPosition={mode} className="">
                            <TabPane tab={<Account />} key="1">
                                <AccountContent />
                            </TabPane>
                            <TabPane tab={<Ticket />} key="2">
                                <TicketContent />
                            </TabPane>
                            <TabPane tab={<Logout />} key="3">
                            </TabPane>
                        </Tabs>
                        {/* </div> */}
                    </div>
                </div>
                <Footer />
            </div>
            <MobileView>
                <NavbarBottom />
            </MobileView>
        </>
    )
}

export default MyAccount;
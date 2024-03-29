import React from "react";
import { Space, Tabs } from "antd";
import { Divider, Input, Form, Button } from "antd";
import { FiEye, FiEyeOff, FiMail, FiLock, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Loading from "../../Loading/Loading";
import PropTypes from "prop-types"


export default function Login({ setToken }) {
    const [loading, setLoading] = useState();
    const [form] = Form.useForm();
    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }
    const handleSubmit = async ({ phoneNumber, password, confirm_pwd }) => {
        setLoading(true);
        const token = await loginUser({
            phoneNumber,
            password,
            confirm_pwd
        });
        setToken(token);
        setLoading(false);
    }
    const onReset = () => {
        form.resetFields();
    };
    const PhoneNumberContent = () => {
        return (
            <>
                <Form
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                    form={form}
                    onFinish={handleSubmit}
                >
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
                    <Button type="primary" htmlType="submit" block size="large">
                        Login
                    </Button>
                    {/* <div className="">
                    <button className="btn-secondary text-lg rounded-md">Send verification code</button>
                </div> */}

                </Form>
            </>
        )
    }
    const EmailContent = () => {
        return (
            <>
                <Form
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off"
                    form={form}
                    onFinish={handleSubmit}
                >
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
                    <Button type="primary" htmlType="submit" block size="large">
                        Login
                    </Button>
                    {/* <div className="">
                    <button className="btn-secondary text-lg rounded-md">Send verification code</button>
                </div> */}

                </Form>
            </>
        )
    }

    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div class="h-screen md:flex p-4 md:p-0">
            <div class="hidden md:flex w-1/2 bg-gradient-to-tr from-primary to-primary-600 i justify-around items-center">
                <div className="max-w-md">
                    <h1 class="text-white font-bold text-6xl font-sans">Login to explore the event</h1>
                    <p class="text-white mt-8 text-base">You can log in with your phone number or email address, which is extremely convenient and fast.</p>
                </div>
            </div>
            <div class="md:flex md:w-1/2 md:justify-center md:items-center">
                <div className="w-full md:max-w-lg">
                    <h1 class="text-gray-800 font-bold text-3xl mb-4 text-center">Login!</h1>
                    <Tabs
                        className="tabs"
                        defaultActiveKey="1"
                        items={[
                            {
                                label: 'Phone Number',
                                key: '1',
                                children: <PhoneNumberContent />,
                            },
                            {
                                label: 'Email',
                                key: '3',
                                children: <EmailContent />,
                            },
                        ]}
                    />
                    {/* <div className="my-4">
                            <button className="btn-primary text-lg rounded-md">Login</button>
                        </div> */}
                    <div className="mt-16">
                        <Divider plain className="text-red-300">
                            <span className="text-lightGray-800">Or log in with</span>
                        </Divider>
                    </div>

                    {/* Socail Medail */}
                    <div className="w-full py-2">
                        <div className="flex gap-4">
                            <div className="flex w-1/2 justify-end">
                                <div className="border flex items-center border-lightGray-600 px-5 py-1 rounded-md">
                                    <Space >
                                        <svg t="1672221534460" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11141" width="28" height="28"><path d="M928 514.24A416 416 0 1 0 448 928v-288h-106.56v-125.76H448V403.2a142.4 142.4 0 0 1 138.24-139.52 402.24 402.24 0 0 1 107.52 8.96v101.44h-68.48a52.48 52.48 0 0 0-51.84 54.4v85.76h117.12L672 640h-98.56v288A417.6 417.6 0 0 0 928 514.24z" p-id="11142" fill="#1777f2"></path></svg>
                                        <span className="text-xs font-meduim">Facebook</span>
                                    </Space>
                                </div>
                            </div>
                            <div className="flex w-1/2 justify-start">
                                <div className="border flex items-center border-lightGray-600 px-5 py-1 rounded-md">
                                    <Space >
                                        <svg t="1672221926434" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13127" width="24" height="24"><path d="M214.101333 512c0-32.512 5.546667-63.701333 15.36-92.928L57.173333 290.218667A491.861333 491.861333 0 0 0 4.693333 512c0 79.701333 18.858667 154.88 52.394667 221.610667l172.202667-129.066667A290.56 290.56 0 0 1 214.101333 512" fill="#FBBC05" p-id="13128"></path><path d="M516.693333 216.192c72.106667 0 137.258667 25.002667 188.458667 65.962667L854.101333 136.533333C763.349333 59.178667 646.997333 11.392 516.693333 11.392c-202.325333 0-376.234667 113.28-459.52 278.826667l172.373334 128.853333c39.68-118.016 152.832-202.88 287.146666-202.88" fill="#EA4335" p-id="13129"></path><path d="M516.693333 807.808c-134.357333 0-247.509333-84.864-287.232-202.88l-172.288 128.853333c83.242667 165.546667 257.152 278.826667 459.52 278.826667 124.842667 0 244.053333-43.392 333.568-124.757333l-163.584-123.818667c-46.122667 28.458667-104.234667 43.776-170.026666 43.776" fill="#34A853" p-id="13130"></path><path d="M1005.397333 512c0-29.568-4.693333-61.44-11.648-91.008H516.650667V614.4h274.602666c-13.696 65.962667-51.072 116.650667-104.533333 149.632l163.541333 123.818667c93.994667-85.418667 155.136-212.650667 155.136-375.850667" fill="#4285F4" p-id="13131"></path></svg>
                                        <span className="text-xs font-meduim">Google</span>
                                    </Space>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full text-center my-6">
                        <p className="text-sm text-lightGray-800">Don’t have an account?
                            <Link to='/register'>
                                <span className="text-primary cursor-pointer ml-1">Create Account?</span>
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}


// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }
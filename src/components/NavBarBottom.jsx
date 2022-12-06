import React, { useState } from "react";
import Logo from '../images/logo.png';
import { Link,NavLink } from "react-router-dom"
// import Modal from "antd/lib/modal/Modal";


function NavbarBottom() {

    const refreshPage = ()=>{
        this.setState({});
     }

    // const [isModalOpen, setModalOpen] = useState(false)

    // const showModal = () => {
    //     setModalOpen(true)
    // }

    // const handleCancel = () => {
    //     setModalOpen(false)
    // } 

    return (
        <div className="w-full mt-16">
            <div className="bg-white p-4 top-0 fixed w-full z-10 box-shadow">
                <div className="flex gap-2">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={Logo} className="w-44" />
                        </Link>
                    </div>
                    <div className=" flex items-center w-full justify-end overflow-hidden">
                        <form action="" className="relative">
                            <input type="search"
                                className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-secondary focus:pl-16 focus:pr-4" />
                            <svg t="1669794568554" className="icon absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-r-secondary peer-focus:secondary" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2678"><path d="M892.949113 131.050887c-173.763299-173.763299-456.292289-173.763299-630.055587 0C97.089979 296.854433 90.196454 562.133773 241.410639 736.963299L10.345567 968.028371c-12.731381 12.731381-12.731381 33.148041 0 45.626062a32.166268 32.166268 0 0 0 22.813031 9.553814c8.234227 0 16.44734-3.188124 22.813031-9.553814L287.036701 782.589361A443.592577 443.592577 0 0 0 578.053278 891.091134c114.075711 0 228.151423-43.504165 314.895835-130.248577 173.763299-173.499381 173.763299-456.292289 0-629.79167z m-45.626061 584.155051c-148.564454 148.564454-389.964536 148.564454-538.52899 0-148.564454-148.553897-148.564454-389.964536 0-538.52899C383.07101 102.4 480.435464 65.261526 578.053278 65.261526c97.628371 0 194.982268 37.138474 269.269774 111.415422 148.289979 148.564454 148.289979 389.964536 0 538.52899z" fill="#8a8a8a" p-id="2679"></path></svg>
                        </form>

                    </div>
                </div>
            </div>
            <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-white box-shadow">
                <div id="tabs" className="flex justify-between">
                    <NavLink onClick={refreshPage} to="/" className="w-full hover:text-black justify-center inline-block text-center pt-2 pb-1 active:text-primary text-gray-600 focus:border-t-2 focus:border-t-primary">
                        <svg t="1669710539773" className="icon inline-block mb-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5645" width="25" height="25"><path d="M938.412716 480.847489 556.823881 104.126522c-1.89721-2.258437-6.142907-6.194072-12.037151-10.081613-9.920954-6.544043-21.162995-10.520611-33.496905-10.520611-13.180184 0-24.690332 3.997034-34.357506 10.623965-5.846148 4.010337-9.876951 8.102538-12.157901 11.154038L84.209914 480.894561c-14.700817 14.481829-14.700817 38.014802 0 52.529377 14.585183 14.427594 33.995255 8.343015 50.529837-7.945973l25.607214-25.314549 38.918381-37.700647c-1.359974 1.686409-2.282996 2.963495-2.284019 3.373841L196.981327 847.484797c0 50.006927 40.941458 90.427522 91.442642 90.427522l141.713582 0 10.423397 0L440.560948 927.486876 440.560948 686.440961c0-17.467837 14.411221-31.683607 32.223912-31.683607l77.051887 0c17.814738 0 32.223912 14.21577 32.223912 31.683607L582.060659 927.486876l0 10.425444 10.425444 0 141.713582 0c50.485835 0 91.442642-40.428781 91.442642-90.427522L825.642327 467.251843l62.246693 61.207014c20.142759 13.266142 37.897122 17.434068 50.523697 4.963035C953.114556 518.910387 953.114556 495.361041 938.412716 480.847489z" p-id="5646"></path></svg>
                        <span className="tab tab-home block text-xs">Home</span>
                    </NavLink>
                    <NavLink to="/event" className="w-full hover:text-black justify-center inline-block focus:border-t-2 focus:border-t-primary text-center pt-2 pb-1 active:text-primary text-gray-600">
                        <svg t="1669712350461" className="inline-block mb-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10315" width="25" height="25"><path d="M512 465.066667c-25.6 0-46.933333 21.333333-46.933333 46.933333s21.333333 46.933333 46.933333 46.933333c25.6 0 46.933333-21.333333 46.933333-46.933333S537.6 465.066667 512 465.066667zM512 85.333333C277.333333 85.333333 85.333333 277.333333 85.333333 512c0 234.666667 192 426.666667 426.666667 426.666667 234.666667 0 426.666667-192 426.666667-426.666667C938.666667 277.333333 746.666667 85.333333 512 85.333333zM605.866667 605.866667 256 768l162.133333-349.866667L768 256 605.866667 605.866667z" p-id="10316"></path></svg>
                        <span className="tab tab-explore block text-xs">Explore</span>
                    </NavLink>
                   <NavLink className="w-full hover:text-black justify-center inline-block focus:border-t-2 focus:border-t-primary text-center pt-2 pb-1 active:text-primary text-gray-600">

                        <svg t="1669712290552" className="icon inline-block mb-1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9331" width="25" height="25"><path d="M723.43 508.6c-54.123 47.75-125.977 77.056-205.163 77.056-80.364 0-153.4-30.259-207.765-79.421C184.05 539.325 105.81 652.308 105.81 787.277v68.782c0 160.968 812.39 160.968 812.39 0v-68.782c-0.005-131.415-74.22-242.509-194.77-278.677z m-205.163 28.13c140.165 0 254.095-109.44 254.095-244.64S658.668 47.218 518.267 47.218c-139.93 0-253.855 109.675-253.855 244.874 0 135.204 113.925 244.639 253.855 244.639z m0 0" p-id="9332"></path></svg>
                        <span className="tab tab-account block text-xs">Account</span>
                    </NavLink>
                </div>
            </section>
            {/* <Modal style={{top: 65}} closable={false} footer={false} open={isModalOpen} onCancel={handleCancel}>
                <div className="relative flex items-center w-full h-8 rounded-l-full rounded-r-full shadow-sm bg-secondary overflow-hidden">
                    <div className="grid place-items-center h-full w-12 font-bold text-gray-300">
                        <svg t="1669707201284" className="icon w-4 h-4" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4400"><path d="M640 768a382.24 382.24 0 0 1-247.808-90.912L45.248 1024 0 978.752l346.912-346.944A383.84 383.84 0 1 1 640 768z m0-704a320 320 0 1 0 320 320A320 320 0 0 0 640 64z" p-id="4401" fill="#2EBAE2"></path></svg>
                    </div>
                    <input
                        className="px-2 h-full w-full outline-none text-sm text-gray-700 pr-2 bg-secondary"
                        type="text"
                        id="search"
                        placeholder="Search for anythink.." />
                </div>
            </Modal> */}

        </div>
    )
}

export default NavbarBottom;
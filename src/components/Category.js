import React from "react";
import catSport from "../images/sport.svg"
import catUser from "../images/user.svg"
import catTrainning from "../images/hat.svg"

function Category() {
    return (
        <div className="w-full text-black mt-8 pb-8">
            <div className="container m-auto">
                <h1 className="md:text-4xl md:text-left font-black text-xl text-center">All Events in Cambodia</h1>

                <div className="md:flex md:gap-4 p-4 md:p-0 mt-4">
                    <div className="md:flex md:w-1/4  rounded-md">
                        <div className="w-full">
                            <div className="w-full bg-gray-300 py-8 text-center">
                                <img className="w-28 h-36 m-auto text-center" src={catSport} alt="Sunset in the mountains" />
                            </div>
                            <h1 className="font-bold text-xl my-3">Sport</h1>
                        </div>
                    </div>
                    <div className="md:flex md:w-1/4  rounded-md">
                        <div className="w-full">
                            <div className="w-full bg-gray-300 py-8">
                                <img className="w-28 h-36 m-auto" src={catSport} alt="Sunset in the mountains" />
                            </div>
                            <h1 className="font-bold text-xl my-3">Concert</h1>
                        </div>
                    </div>
                    <div className="md:flex md:w-1/4  rounded-md">
                        <div className="w-full">
                            <div className="w-full bg-gray-300 py-8">
                                <img className="w-32 h-36 m-auto" src={catUser} alt="Sunset in the mountains" />
                            </div>
                            <h1 className="font-bold text-xl my-3">Community Meeting</h1>
                        </div>
                    </div>
                    <div className="md:flex md:w-1/4  rounded-md">
                        <div className="w-full">
                            <div className="w-full bg-gray-300 py-8">
                                <img className="w-32 h-36 m-auto" src={catTrainning} alt="Sunset in the mountains" />
                            </div>
                            <h1 className="font-bold text-xl my-3">Skill Tranning</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Category
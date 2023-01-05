import React from "react";
import Filter from "./Filter/Tab";

function Event() {

    return (
        <div className="container p-4  mx-auto lg:p-4">
            <div className="w-full text-black mt-8 pb-8">
                <div className="">
                    <h2 className="mb-4 text-2xl font-bold dark:text-white">Discovery event in Cambodia</h2>
                    <div className=" flex">
                        <div className="w-full">
                            <Filter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Event
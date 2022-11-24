import React, { useState } from "react";
import Filter from "./Filter/button";


function Event() {

    return (
        <div className="container p-4  mx-auto lg:p-4">
            <div className="w-full text-black mt-8 pb-8">
                <div className="">
                    <h2 className="mb-4 text-2xl font-bold">Discovery event in Cambodia</h2>
                    <div className=" flex">
                        <div className="w-full">
                            <Filter />
                        </div>
                    </div>
                    <div className="w-full cover-img">
                        <div className='object-cover h-80 max-w-md bg-cover bg-center px-16 py-32 '>
                            <h2 className="text-4xl text-white font-bold py-4">Create your event Freely with us!</h2>
                            <button className="px-12 py-3 mt-6 text-primary bg-white rounded">Create Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Event
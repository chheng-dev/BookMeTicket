import React from "react";
import Footer from "./Footer";


function About(){
    return(
        <div className="w-full">
        <div className="w-full text-black mt-8 pb-4 md:mt-16 md:pb-8">
            <div className="container m-auto">
                <h1 className="md:text-4xl font-black text-xl md:p-0 p-4">How to it works</h1>
                <div className="md:flex gap-4 mt-8">
                    <div className="md:flex md:w-1/4 md:p-0 p-4">
                        <div className="w-full">
                            <h3 className="font-bold">1. Baobab</h3>
                            <div className="mt-3 w-full">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:w-1/4 md:p-0 p-4">
                        <div className="w-full">
                            <h3 className="font-bold">2. Baobab</h3>
                            <div className="mt-3 w-full">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:w-1/4 md:p-0 p-4">
                        <div className="w-full">
                            <h3 className="font-bold">3. Baobab</h3>
                            <div className="mt-3 w-full">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:w-1/4 md:p-0 p-4">
                        <div className="w-full">
                            <h3 className="font-bold">4. Baobab</h3>
                            <div className="mt-3 w-full">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Footer/>
        </div>
    )
}


export default About
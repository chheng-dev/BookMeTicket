import React from "react";
import Header from "../Header";
import Category from "../Category"
import About from "../About"
import Event from "../Event";


function HomeScreen() {
    return (
        <>

           <div className="pb-16 md:pb-0">
                <Header />
                <Category />
                <Event />
                <About />
           </div>
        </>
    )
}

export default HomeScreen
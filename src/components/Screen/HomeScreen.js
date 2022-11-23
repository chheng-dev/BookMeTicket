import React from "react";
// import Navbar from "../Navbar";
import Header from "../Header";
import Category from "../Category"
// import UpComming from "../Upcomming";
import About from "../About"
import Event from "../Event";
// import Footer from "../Footer"


function HomeScreen(){
    return(
        <>
            <Header/>
            <Category/>
            {/* <UpComming/> */}
            <Event/>
            <About/>
            {/* <Footer/>  */}
        </>
    )
}

export default HomeScreen
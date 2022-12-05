import React from "react";
import Header from "../Header";
import Category from "../Category"
import About from "../About"
import Event from "../Event";
import Loading from "../Loading/Loading";
import { useState } from "react";

function HomeScreen() {
    const [loading, setLoading] = useState(false)
    if (loading) {
        return (
            <Loading />
        )
    }
    // setLoading(false)
    return (
        <>

            <Header />
            <Category />
            <Event />
            <About />
        </>
    )
}

export default HomeScreen
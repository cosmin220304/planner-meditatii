import React from "react";
import SearchBar from "./SearchBar";
import logo from "G:/MeditatiiApp/planner-meditatii/src/assets/images/logo.svg";

function HeroSection() {
    return (
        <div className="relative p-28 w-full h-fit md:flex">
            <section className="relative m-auto h-fit w-full">
                <h3 className="drop-shadow-xl mb-5 text-5xl text-sky-500 font-bold">Do you need help</h3>
                <h1 className="drop-shadow-xl mb-14 text-7xl text-sky-500 font-bold">We can help you!</h1>
                <SearchBar/>
            </section>
            <section className="relative m-auto w-full h-fit">
                <img className="drop-shadow-xl m-auto w-86 h-fit"src={logo}></img>
            </section>
        </div>
    )
}

export default HeroSection;
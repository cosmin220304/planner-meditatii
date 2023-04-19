import React from "react";
import SearchBar from "./SearchBar";
import logo from "G:/MeditatiiApp/planner-meditatii/src/assets/svg/logo.svg";

function HeroSection() {
    return (
        <section className="relative p-5 pl-4 pt-10 w-full justify-between h-fit md:flex">
            <div className="relative m-auto h-fit w-fit">
                <h3 className="drop-shadow-xl text-4xl lg:text-5xl mb-2 text-sky-500 font-bold">Do you need help</h3>
                <h1 className="drop-shadow-xl text-6xl lg:text-7xl mb-5 text-sky-500 font-bold">We can help you!</h1>
                <SearchBar/>
            </div>
            <div className="relative m-auto w-fit h-fit">
                <img className="drop-shadow-xl"src={logo}></img>
            </div>
        </section>
    )
}

export default HeroSection;
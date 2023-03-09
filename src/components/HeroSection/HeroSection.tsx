import React from "react";
import SearchBar from "./SearchBar";
import logo from "G:/MeditatiiApp/planner-meditatii/src/assets/images/logo.svg";

function HeroSection() {
    return (
        <div className="p-28 w-full h-fit flex">
            <section className="mt-28">
                <h3 className="drop-shadow-xl mb-2 text-5xl text-sky-500 font-bold">Do you need help</h3>
                <h1 className="drop-shadow-xl mb-6 text-7xl text-sky-500 font-bold">We can help you!</h1>
                <SearchBar/>
            </section>
            <img className="h-96 w-96 ml-28 m-0 p-0" src={logo}></img>
        </div>
    )
}

export default HeroSection;
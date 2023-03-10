import React from "react";
import ProfCard from "./ProfCard/ProfCard";

export default function ExploreSection() 
{
    return (
        <section className="relative h-fit w-full justify-center m-auto md:flex">
            <ProfCard name="Marius" profession="Computer Science"/>
            <ProfCard name="Andrei" profession="Food"/>
            <ProfCard name="Pricope" profession="Music"/>
            <ProfCard name="Pricope" profession="Music"/>
        </section>
    )
}   
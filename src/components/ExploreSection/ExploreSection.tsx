import { Carousel } from "flowbite-react/lib/esm/components";
import React from "react";
import ProfCard from "./ProfCard/ProfCard";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
export default function ExploreSection() 
{
    return (
        <section className="realtive">
            <h1 className="text-sky-500 font-bold text-4xl pl-32 p-5">Explore active proffesors</h1>
            <Carousel className="realative w-full h-fit p-12" leftControl={<BsFillArrowLeftCircleFill className="fill-sky-500 h-16 w-fit"/>} 
                    rightControl={<BsFillArrowRightCircleFill className="fill-sky-500 h-16 w-fit"/>} >        
                <div className="relative h-fit w-full justify-center md:flex">
                        <ProfCard rating={5} name="Marius" profession="Computer Science" url="https://careertechnical.edu/wp-content/uploads/2019/09/IT-Professional-Reasons.jpg"/>
                        <ProfCard rating={3} name="Andrei" profession="Food" url="https://media.istockphoto.com/id/1017296544/photo/testing-software.jpg?s=612x612&w=0&k=20&c=9K02VDBeVtaLCThLojKphZpZ6x8o7DUi3UQ4r1tTmQU="/>
                        <ProfCard rating={2} name="Pricope" profession="Music" url="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2022-09/IT%20Professional.jpg.webp?itok=XotcpVNj"/>
                        <ProfCard rating={4} name="Pricope" profession="Music" url="https://media.istockphoto.com/id/1017296544/photo/testing-software.jpg?s=612x612&w=0&k=20&c=9K02VDBeVtaLCThLojKphZpZ6x8o7DUi3UQ4r1tTmQU="/>
                </div>
                <div className="relative h-fit w-full justify-center md:flex">
                        <ProfCard rating={1} name="Marius" profession="Computer Science" url="https://careertechnical.edu/wp-content/uploads/2019/09/IT-Professional-Reasons.jpg"/>
                        <ProfCard rating={2} name="Andrei" profession="Food" url="https://media.istockphoto.com/id/1017296544/photo/testing-software.jpg?s=612x612&w=0&k=20&c=9K02VDBeVtaLCThLojKphZpZ6x8o7DUi3UQ4r1tTmQU="/>
                        <ProfCard rating={3} name="Pricope" profession="Music" url="https://www.herzing.edu/sites/default/files/styles/fp_960_480/public/2022-09/IT%20Professional.jpg.webp?itok=XotcpVNj"/>
                        <ProfCard rating={5} name="Pricope" profession="Music" url="https://media.istockphoto.com/id/1017296544/photo/testing-software.jpg?s=612x612&w=0&k=20&c=9K02VDBeVtaLCThLojKphZpZ6x8o7DUi3UQ4r1tTmQU="/>
                </div>
            </Carousel>
            <div className="flex relative justify-center">
                <button className="relative h-fit w-40 p-3 rounded-3xl bg-sky-500 text-center font-bold text-white">Explore more</button>
            </div>
        </section>
    )
}   
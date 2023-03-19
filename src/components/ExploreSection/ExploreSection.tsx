import { Carousel } from "flowbite-react/lib/esm/components";
import React from "react";
import ProfCard from "./ProfCard/ProfCard";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs'
import activeProfs from 'G:/MeditatiiApp/planner-meditatii/src/services/active-proffesors.json';

export default function ExploreSection() 
{
    return (
        <section className="realtive h-fit pb-20">
            <h1 className="text-sky-500 font-bold text-4xl pl-32 p-5">Explore active proffesors</h1>
            <Carousel className="relative w-full h-fit p-12" indicators={false} slide={false} leftControl={<BsFillArrowLeftCircleFill className="fill-sky-500 h-16 w-fit"/>} 
                    rightControl={<BsFillArrowRightCircleFill className="fill-sky-500 h-16 w-fit"/>} >        
                    <div className="relative overflow-x-hidden justify-center grid grid-rows-1 grid-flow-col auto-cols-max">
                    {
                        activeProfs.page1.map(prof =>         
                                     <ProfCard key={prof.id} rating={prof.rating} name={prof.name} profession={prof.proffesion} url={prof.url}/>
                        )
                    }
                     </div>
                     <div className="relative overflow-x-hidden justify-center grid grid-rows-1 grid-flow-col auto-cols-max">
                    {
                        activeProfs.page2.map(prof =>         
                                     <ProfCard key={prof.id} rating={prof.rating} name={prof.name} profession={prof.proffesion} url={prof.url}/>
                        )
                    }
                     </div>
            </Carousel>
            <div className="flex relative justify-center">
                <button className="relative h-fit w-40 p-3 rounded-3xl bg-sky-500 text-center font-bold text-white">Explore more</button>
            </div>
        </section>
    )
}   
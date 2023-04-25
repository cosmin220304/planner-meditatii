//import { Rating } from "flowbite-react";
import React from "react";

const handleDragStart = (e: { preventDefault: () => any; }) => e.preventDefault();

export default function ProfCard(props:any) {
   /* const stars = [];

    for(let i = 0; i < props.rating; i++)
    {
        stars.push(<Rating.Star />);
    }

    for(let i = props.rating; i < 5; i++)
    {
        stars.push(<Rating.Star filled={false}/>)
    }

    return (
        <div onDragStart={handleDragStart} className="drop-shadow-xl w-fit h-fit pl-4 pr-4 md:mb-0 md:ml-0" role="presentation">
            <div className="m-auto justify-center cursor-pointer">
                <img src={props.url} className="h-40 w-56 rounded-t-3xl bg-slate-500"/> 
                <div className="relative w-full h-fit pt-4 pb-4 rounded-b-3xl bg-sky-500 z-1">
                        <div className="relative text-center">
                            <h1 className="font-bold text-white">{props.name}</h1>
                            <h3 className="text-white">{props.profession}</h3>      
                        </div>
                </div>
            </div>

            <div className="h-fit w-full p-2">
                <Rating size="md" className="justify-center pt-3">{stars}</Rating>
            </div>
        </div>
    
        )
        */
       return (
        <div></div>
       )
    }
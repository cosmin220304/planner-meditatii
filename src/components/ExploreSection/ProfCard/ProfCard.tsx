import React from "react";

export default function ProfCard(props:any) {
    return (
        <section className="p-8 mb-40 ml-40 md:mb-0 md:ml-0">
            <div className="cursor-pointer">
                <img className="h-40 w-56 rounded-t-3xl bg-slate-500"/> 
                <div className="relative top-full w-56 h-20 rounded-b-3xl bg-sky-500 z-1">
                        <section className="relative text-center top-2">
                            <h1 className="font-bold text-white">{props.name}</h1>
                            <h3 className="text-white">{props.profession}</h3>      
                        </section>
                </div>
            </div>
        </section>
    )
}
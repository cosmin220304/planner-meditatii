import React from "react";
import {FaSearch} from 'react-icons/fa'

function SearchBar() {
    return (
        <section className="drop-shadow-lg rounded-xl p-0 flex bg-white max-w-fit">
            <FaSearch className="m-auto mr-5 ml-5 h-5 w-5 text-sky-500"/>
            <input className="w-96 min-w-max p-3.5 rounded-l-xl border-0 focus:outline-none" placeholder="Programming lessons! John..."></input>
            <button className="m-0 p-4 bg-sky-500 rounded-r-xl text-slate-50 font-bold" type="submit">Search</button>
        </section>
    )
}

export default SearchBar;
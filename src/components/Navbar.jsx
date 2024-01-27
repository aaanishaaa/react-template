import React from "react";
import img from '../assets/temp.jpg'

const Navbar = () => {
    return (
        <>
        <div className=" h-[4rem] flex justify-around bg-slate-500 p-0">
            <img src={img} alt="" />
            <ul className="flex gap-[5rem] items-center">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
            <button>hello</button>
        </div>
        </>
    )
}

export default Navbar;
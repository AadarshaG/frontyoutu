import React, { useState } from 'react'
import {FaFacebook, FaInstagram, FaShoppingCart, FaTwitter, FaUser, FaYoutube} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenu} from 'react-icons/hi'



export function Header(){

    const [nav ,setNav] = useState(false)
    const [logo ,setLogo] = useState(false)

    const handleNav = () =>{
        setNav(nav)
        setLogo(logo)
    }

    return(
        
        <div className="flex justify-between items-center h-20">
            <div onClick={handleNav} className={ logo ? "hidden" : "block pl-4"}>
                <h1 className="text-3xl md:text-4xl font-bold">Beaches</h1>
            </div>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Destinations</li>
                <li className="p-4">Travels</li>
                <li className="p-4">View</li>
            </ul>
            <div className="hidden md:flex pr-4">
                <FaUser size="20"></FaUser>
                <FaShoppingCart size="20"></FaShoppingCart>
            </div>
            {/* Hamburger */}
            <div onClick={handleNav} className="md:hidden z-10">
                {
                    nav ? <AiOutlineClose className="text-black" size={20} /> : <HiOutlineMenu size={20} />
                }
            </div>
            {/* To display menu items in small device */}
            <div onClick={handleNav} className= { nav ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col" : "absolute left-[-100%]"}>
                <ul>
                    <h1 className="text-3xl md:text-4xl font-bold">Beaches</h1>
                    <li className="p-4 text-xl border-b">Home</li>
                    <li className="p-4 text-xl border-b">Destinations</li>
                    <li className="p-4 text-xl border-b">Travels</li>
                    <li className="p-4 text-xl border-b">View</li>
                    <div className="p-4 flex flex-col">
                        <button className="p-3 my-4 border bg-gradient-to-r from-[var[==primary-dark: #5451e5] to-[var[==primary-dark: #709dff]">Search</button>
                        <button className="p-3 border bg-gradient-to-r from-[var[==primary-dark: #5451e5] to-[var[==primary-dark: #709dff]">Account</button>
                    </div>
                    <div className="p-4 flex justify-between">
                        <FaFacebook className="icon text-2xl cursor-pointer"></FaFacebook>
                        <FaTwitter className="icon text-2xl cursor-pointer"></FaTwitter>
                        <FaInstagram className="icon text-2xl cursor-pointer"></FaInstagram>
                        <FaYoutube className="icon text-2xl cursor-pointer"></FaYoutube>
                    </div>
                    
                </ul>
            </div>
        </div>
    
    )
}
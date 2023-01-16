import React from 'react'
import {HiSearch} from 'react-icons/hi'

import Video from '../../../img/video.mp4'

export function VideoSearch(){

    return(
        <>
            <div className="w-full h-screen relative">
                <video className="h-full w-full object-cover" src={Video} autoPlay loop muted ></video>
                <div className="h-full w-full absolute top-0 left-0 bg-gray-900/10 "></div>
                <div className="absolute top-0 h-full w-full flex flex-col text-center justify-center text-white p-4">
                    <h1 className="text-3xl md:text-4xl font-bold">First Class Travel</h1>
                    <h2 className="text-2xl  font-bold py-3">Top 1% Location Worldwide</h2>
                    <div className="flex justify-between items-center max-w-[700px] mx-auto border p-1 rounded-md
                    text-black bg-gray-100/90">
                        <div>
                            <input className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none" type="text" placeholder="Search"></input>
                        </div>
                        <div>
                            <button className="p-3 border bg-gradient-to-r from-[#5451e5] to-[#709dff] text-white rounded]"><HiSearch size={20} className="icon text-2xl cursor-pointer"></HiSearch></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
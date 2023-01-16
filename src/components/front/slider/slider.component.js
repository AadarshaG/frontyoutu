import React from 'react'

import {BsCaretLeftSquareFill} from 'react-icons/bs'
import {BsCaretRightSquareFill} from 'react-icons/bs'

import I1 from '../../../img/1.avif'
import I2 from '../../../img/2.avif'
import I3 from '../../../img/3.avif'

export function Slider(){

    return(
        <>
            <div className="lg-w-[1240px] mx-auto px-4 py-10 relative flex justify-center items-center">
                <BsCaretLeftSquareFill className="absolute top=[-50%] text-white text-3xl cursor-pointer left-10"></BsCaretLeftSquareFill>
                <BsCaretRightSquareFill className="absolute top=[-50%] text-white text-3xl cursor-pointer right-10"></BsCaretRightSquareFill>
                <div className="w-full h-full object-cover">
                    <img className="w-full h-full object-cover" src={I1} alt=""></img>
                </div>
            </div>
        </>
    )
}
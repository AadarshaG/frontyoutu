import React from 'react'

import Borabora from '../../../img/borabora.jpg'
import Borabora2 from '../../../img/borabora2.jpg'
import Keywest from '../../../img/keywest.jpg'
import Maldives from '../../../img/maldives.jpg'
import Maldives2 from '../../../img/maldives2.jpg'
import Maldives3 from '../../../img/maldives3.jpg'

export function Places(){

    return(
        <>
            <div className="max-w-[1240px] mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                <div className="relative">
                    <img classname="h-full w-full object-cover" src={Borabora} alt="Borabora"></img>
                    <div className="absolute bg-gray-900/10 top-0 left-0 h-full w-full">
                        <p className="left-4 bottom-4 text-2xl text-white font-bold absolute">Borabora</p>
                    </div>
                </div>
                <div className="relative">
                    <img classname="h-full w-full object-cover" src={Borabora2} alt="Borabora"></img>
                    <div className="absolute bg-gray-900/10 top-0 left-0 h-full w-full">
                        <p className="left-4 bottom-4 text-xl text-white font-bold absolute">Borabora2</p>
                    </div>
                </div>
                <div className="relative">
                    <img classname="h-full w-full object-cover" src={Borabora} alt="Borabora"></img>
                    <div className="absolute bg-gray-900/10 top-0 left-0 h-full w-full">
                        <p className="left-4 bottom-4 text-xl text-white font-bold absolute">Keywest</p>
                    </div>
                </div>
                <div className="relative">
                    <img classname="h-full w-full object-cover" src={Maldives} alt="Borabora"></img>
                    <div className="absolute bg-gray-900/10 top-0 left-0 h-full w-full">
                        <p className="left-4 bottom-4 text-xl text-white font-bold absolute">Maldives</p>
                    </div>
                </div>
                <div className="relative">
                    <img classname="h-full w-full object-cover" src={Maldives2} alt="Borabora"></img>
                    <div className="absolute bg-gray-900/10 top-0 left-0 h-full w-full">
                        <p className="left-4 bottom-4 text-xl text-white font-bold absolute">Maldives2</p>
                    </div>
                </div>
                <div className="relative">
                    <img classname="h-full w-full object-cover" src={Maldives} alt="Borabora"></img>
                    <div className="absolute bg-gray-900/10 top-0 left-0 h-full w-full">
                        <p className="left-4 bottom-4 text-xl text-white font-bold absolute">Maldives3</p>
                    </div>
                </div>
            </div>
        </>
    )
}
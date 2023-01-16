import React from 'react'

import Borabora from '../../../img/borabora.jpg'
import Borabora2 from '../../../img/borabora2.jpg'
import Keywest from '../../../img/keywest.jpg'
import Maldives from '../../../img/maldives.jpg'
import Maldives2 from '../../../img/maldives2.jpg'
import Maldives3 from '../../../img/maldives3.jpg'

export function Destination(){

    return(
        <>
            <div className="max-w-[1240px] mx-auto py-10 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center">All-Inclusive Resorts</h1>
                <p className="text-center py-4">On the Carribian's Best Beaches</p>
                <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
                    <img className="h-full w-full object-cover col-span-2 md:col-span-3 row-span-2" src={Borabora} alt=""></img>
                    <img className="h-full w-full object-cover" src={Borabora2} alt=""></img>
                    {/* <img src={Keywest} alt=""></img> */}
                    <img className="h-full w-full object-cover" src={Maldives} alt=""></img>
                    <img className="h-full w-full object-cover" src={Maldives2} alt=""></img>
                    <img className="h-full w-full object-cover" src={Maldives3} alt=""></img>
                </div>
            </div>
        </>
    )
}
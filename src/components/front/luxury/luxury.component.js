import React from 'react'

import {RiCustomerService2Fill} from 'react-icons/ri'
export function Luxury(){

    return(
        <>
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-10 px-4 ">
                <div className="lg:col-span-2 flex flex-col justify-evenly">
                    <div>
                        <h2 className="uppercase text-2xl font-bold py-2">Luxury Included Vacation For Two People</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 py-4">
                        <div className="flex flex-col lg:flex-row items-center text-center">
                        <button className="p-3 border bg-gradient-to-r from-[#5451e5] to-[#709dff] text-white rounded]"><RiCustomerService2Fill size={20}></RiCustomerService2Fill></button>
                            <div>
                                <h3 className="text-xl font-bold uppercase py-2">Leading Service</h3>
                                <p className="px-2  text-center">Lorem Ipsum is simply dummy text  simply dummy text </p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center text-center">
                            <button className="p-3 border bg-gradient-to-r from-[#5451e5] to-[#709dff] text-white rounded]"><RiCustomerService2Fill size={20}></RiCustomerService2Fill></button>
                            <div>
                                <h3 className="text-xl font-bold uppercase py-2">Automated Booking</h3>
                                <p className="px-2 text-center">Lorem Ipsum is simply dummy text dummy text  </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border text-center">
                        <p className="uppercase">Get An Additional 10% Off</p>
                        <p className="py-4 uppercase">12 Hours Left</p>
                        <p className="bg-gray-800 text-gray-200 py-2 uppercase">Book Now And Save</p>
                    </div>
                    <form className="w-full">
                        <div className="flex flex-col my-2">
                            <label>Destination</label>
                            <select className="border rounded-md p-2">
                                <option>Hello</option>
                                <option>Hello</option>
                                <option>Hello</option>
                                <option>Hello</option>
                            </select>
                        </div>
                        <div className="flex flex-col my-2">
                            <label>Check In</label>
                            <input className="border rounded-md p-2" type="date"></input>
                        </div>
                        <div className="flex flex-col my-4">
                            <label>Check Out</label>
                            <input className="border rounded-md p-2" type="date"></input>
                        </div>
                        <div className="flex flex-col my-2">
                            <button className="p-3 w-full border bg-gradient-to-r from-[#5451e5] to-[#709dff] text-white rounded]">Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
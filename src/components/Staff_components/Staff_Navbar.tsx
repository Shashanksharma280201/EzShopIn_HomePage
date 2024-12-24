"use client"

import React from 'react'
import Footer from "@/components/Footer"
import Payments from "./Payments"
import Inventory from "./Inventory"
import Dashboard from "./Dashboard"
import Link from 'next/link'

const Staff_Navbar = () => {

    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>

            <div className="flex flex-col bg-gray-300 w-full h-full items-center">

                <div className="flex flex-wrap w-full h-full justify-center">
                    <div className="w-full">


                        <div className="flex fixed bottom-0 z-10 justify-center items-center w-full">
                            <ul
                                className="flex flex-row mb-0 w-fit gap-4 list-none bg-transparent justify-center items-center flex-wrap pt-3 pb-4"
                                role="tablist"
                            >
                                <li className="flex-auto text-center">
                                    <a
                                        className={
                                            "px-5 py-3 shadow-lg rounded-2xl block h-[3rem] md:h-[4rem] leading-normal justify-center items-center" +
                                            (openTab === 1
                                                ? "text-black bg-gray-300"
                                                : "text-black bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        {/* Scan */}
                                        <img src="\images\home.svg" alt="" style={{ width: "100%", height: "100%" }} />
                                    </a>
                                </li>

                                <li className="flex-auto text-center">
                                    <a
                                        className={
                                            "px-5 py-3 shadow-lg rounded-2xl block h-[3rem] md:h-[4rem] leading-normal justify-center items-center" +
                                            (openTab === 2
                                                ? "text-black bg-gray-300"
                                                : "text-black bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        <img src="\images\Shop\inventory.svg" alt="" style={{ width: "100%", height: "100%" }} />
                                    </a>
                                </li>
                                <li className="flex-auto text-center">
                                    {/* <div className="flex absolute bg-slate-400 h-[20px] p-1 items-center justify-center rounded-full">{cartItemQuantity}</div> */}
                                    <a
                                        className={
                                            "px-5 py-3 shadow-lg rounded-2xl block h-[3rem] md:h-[4rem] leading-normal justify-center items-center" +
                                            (openTab === 3
                                                ? "text-black bg-gray-300"
                                                : "text-black bg-white")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(3);
                                        }}
                                        data-toggle="tab"
                                        href="#link3"
                                        role="tablist"
                                    >

                                        <img src="\images\Shop\payments.svg" alt="" style={{ width: "100%", height: "100%" }} />
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                            <div className="flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <Dashboard />
                                        <Footer />
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <div className="w-full bg-transparent h-full">
                                            <Inventory />
                                        </div>
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <div className='flex w-full h-full'>
                                            <Payments />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div >

        </>
    )
}

export default Staff_Navbar
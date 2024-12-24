"use client"


import React from 'react'
import Link from 'next/link'
import Company_List from './Company_List';
import DraggableCard from './DraggableCard';
import Settings from './Settings';


const Customer_Navbar = () => {

    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>
            <div className="flex flex-col w-full h-screen mb-10 items-center">

                <div className="flex flex-wrap w-full h-full justify-center">
                    <div className="w-full">


                        <div className="flex fixed bottom-0 z-10 justify-center items-center w-full">
                            <ul
                                className="flex flex-row mb-0 w-fit gap-4 list-none bg-transparent justify-center items-center flex-wrap pt-3 pb-4"
                                role="tablist"
                            >
                                <li className="flex-auto text-center">
                                    <Link
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
                                    </Link>
                                </li>
                                <li className="flex-auto text-center">
                                    <Link
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
                                        <img src="/images/Shop/heart.png" alt="" style={{ width: "100%", height: "100%" }} />
                                    </Link>
                                </li>
                                <li className="flex-auto text-center">
                                    {/* <div className="flex absolute bg-slate-400 h-[20px] p-1 items-center justify-center rounded-full"></div> */}
                                    <Link
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

                                        <img src="/images/Shop/settings.svg" alt="" style={{ width: "100%", height: "100%" }} />
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                            <div className="flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <Company_List />
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <DraggableCard />
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <h1 className="flex p-4 justify-center items-center bg-green-600"> Billing history and settings </h1>
                                        <Settings />
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

export default Customer_Navbar





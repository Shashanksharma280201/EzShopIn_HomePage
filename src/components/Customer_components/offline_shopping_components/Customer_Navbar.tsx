"use client"


import React from 'react'
import Inventory from './Inventory'
import Cart from './Cart'
import { useRef, useEffect, useState } from 'react';
import { useUser } from "@clerk/nextjs";
import Link from 'next/link'
import Lottie from 'react-lottie-player';
import animationData from '../../../../public/images/data/loading.json';
import Scan from './Scan'
import { cartItemQuantityAtom } from '@/lib/atoms';
import { useAtomValue } from 'jotai';


const Customer_Navbar = () => {

    const [openTab, setOpenTab] = React.useState(2);

    const cartItemQuantity = useAtomValue(cartItemQuantityAtom)

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Access the user's camera
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    // Assign the stream to the video element if it exists
                    if (videoRef.current) {
                        videoRef.current.srcObject = stream;
                        videoRef.current.play().catch(error => console.error('Error playing video:', error));
                    }
                })
                .catch(error => {
                    console.error('Error accessing camera:', error);
                });
        }
    }, []);

    const { user } = useUser();

    if (!user) {
        return [
            <div className="flex h-screen w-full items-center justify-center flex-col gap-5">
                <Lottie
                    loop
                    animationData={animationData}
                    play
                    className='flex w-1/5 h-1/5'
                />
                {/* <Button><Link href="/">Main Page</Link></Button> */}
            </div>
        ]
    }


    return (
        <>
            <div className="flex flex-col w-full font-sans h-screen mb-10 items-center">

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
                                            "px-5 py-3 shadow-lg rounded-2xl block h-[4rem] leading-normal justify-center items-center" +
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
                                        <img src="\images\scan.svg" alt="" style={{ width: "100%", height: "100%" }} />
                                    </Link>
                                </li>
                                <li className="flex-auto text-center">
                                    <Link
                                        className={
                                            "px-5 py-3 shadow-lg rounded-2xl block h-[4rem] leading-normal justify-center items-center" +
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
                                        <img src="\images\home.svg" alt="" style={{ width: "100%", height: "100%" }} />
                                    </Link>
                                </li>
                                <li className="flex-auto text-center">
                                    <div className="flex absolute bg-slate-400 h-[20px] p-1 items-center justify-center rounded-full"> {cartItemQuantity} </div>
                                    <Link
                                        className={
                                            "px-5 py-3 shadow-lg rounded-2xl block h-[4rem] leading-normal justify-center items-center" +
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

                                        <img src="\images\cart.svg" alt="" style={{ width: "100%", height: "100%" }} />
                                    </Link>
                                </li>
                            </ul>
                        </div>


                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
                            <div className="flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <Scan />
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <div className="flex flex-col w-full h-full">
                                            <Inventory />
                                        </div>
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                        <div className='flex w-full h-full bg-slate-200'>
                                            <Cart />
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

export default Customer_Navbar
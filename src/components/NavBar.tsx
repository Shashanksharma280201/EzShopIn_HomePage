"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrolled = scrollTop > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <nav className={`fixed w-full py-2 my-5 rounded-3xl z-10 transition-all duration-300 ${isScrolled ? 'shadow-md backdrop-blur-3xl' : ''}`}>
                <header className="text-slate-700 container items-center justify-between relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
                    <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black">
                        EzShopIn
                    </a>
                    <input type="checkbox" className="peer hidden" id="navbar-open" />
                    <label className="absolute top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
                        <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
                        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                            <li className="lg:mr-12"><a className="rounded text-black transition focus:outline-none focus:ring-1 text-xl " href="#Home">Home</a></li>
                            <li className="lg:mr-12"><a className="rounded text-black transition focus:outline-none focus:ring-1 text-xl " href="#About">About</a></li>
                            <li className="lg:mr-12"><a className="rounded text-black transition focus:outline-none focus:ring-1 text-xl " href="#Pricing">Pricing</a></li>
                            <li className="lg:mr-12"><a className="rounded text-black transition focus:outline-none focus:ring-1 text-xl " href="#FAQ">FAQ</a></li>
                        </ul>
                        <hr className="mt-4 w-full lg:hidden" />
                        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                            {/* <div className="flex text-black text-xl w-full">
                                <a href="">
                                    <h1>Login</h1>
                                </a>
                            </div> */}
                            <div className="block text-white rounded-md hover:bg-gray-500 bg-black">
                                <a href="\Sign-up">
                                    <Button>Contact us</Button>
                                </a>
                            </div>
                        </div>
                    </nav>
                </header>

            </nav>
        </>
    )
}

export default NavBar
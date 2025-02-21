"use client"

import React from 'react'
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

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
            <nav className={`fixed ${isScrolled
                    ? 'w-3/4 rounded-2xl shadow-md backdrop-blur-3xl'
                    : 'w-full rounded-b-3xl'
                } py-2 z-20 transition-all duration-700 top-3 left-1/2 -translate-x-1/2`}>
                <header className="text-black container items-center justify-between font-sans relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
                    <Link href="#" className="flex items-center whitespace-nowrap md:text-3xl text-xl">
                        EzShopIn
                    </Link>
                    <input type="checkbox" className="peer hidden" id="navbar-open" />
                    <label className="absolute top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
                        <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <nav aria-label="Header Navigation" className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
                        <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
                            <li className="lg:mr-12"><Link className="rounded text-black/65 hover:text-purple-400 transition-all delay-100 hover:text-2xl focus:outline-none focus:ring-1 text-xl " href="#Home">Home</Link></li>
                            <li className="lg:mr-12"><Link className="rounded text-black/65 hover:text-purple-400 transition-all delay-100 hover:text-2xl focus:outline-none focus:ring-1 text-xl " href="#About">About</Link></li>
                            <li className="lg:mr-12"><Link className="rounded text-black/65 hover:text-purple-400 transition-all delay-100 hover:text-2xl focus:outline-none focus:ring-1 text-xl " href="#Pricing">Pricing</Link></li>
                            <li className="lg:mr-12"><Link className="rounded text-black/65 hover:text-purple-400 transition-all delay-100 hover:text-2xl focus:outline-none focus:ring-1 text-xl " href="#FAQ">FAQ</Link></li>
                        </ul>
                        <hr className="mt-4 w-full lg:hidden" />
                        <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
                            <div className="flex flex-row gap-2 justify-center items-center text-white">
                                {/* <Link href="\Sign-in">
                                    <p className='flex items-center justify-center w-[4rem] text-black hover:text-purple-400'>Sign-in</p>
                                </Link> */}
                                <Link href="/Sign-up">
                                    <Button>Sign-up</Button>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </header>

            </nav>
        </>
    )
}

export default NavBar
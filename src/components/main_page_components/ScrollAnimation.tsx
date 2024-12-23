"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";
import Dashboard from "./Dashboard";

export function ScrollAnimation() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className=" text-4xl md:text-7xl font-semibold text-black">
                            Easy to use <br />
                            <span className="text-5xl md:text-[6rem] text-[#5E4B9E] font-bold mt-1 leading-none">
                                Platform
                            </span>
                        </h1>
                    </>
                }
            >
                <Dashboard />
            </ContainerScroll>
        </div>
    );
}



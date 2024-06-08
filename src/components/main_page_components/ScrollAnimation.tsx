"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function ScrollAnimation() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-7xl font-semibold text-black">
                            Easy to use <br />
                            <span className="text-4xl md:text-[6rem] text-gray-600 font-bold mt-1 leading-none">
                                Dashboard
                            </span>
                        </h1>
                    </>
                }
            >
                <img
                    src="/images/Dashboard.png"
                    alt="hero"
                    style={{ width: "100%", height: "100%" }}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}



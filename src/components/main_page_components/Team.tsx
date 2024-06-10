"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Shashank Sharma",
        designation: "Founder / CEO",
        image: "/images/Shashank.png"
    },
    {
        id: 2,
        name: "Srijan Dubey",
        designation: "Co-Founder / CTO",
        image: "/images/Srijan.png"
    },
    {
        id: 3,
        name: "Sansar Singh",
        designation: "Co-Founder / CMO",
        image: "/images/Sansar.png"
    },
];

export function Team() {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}

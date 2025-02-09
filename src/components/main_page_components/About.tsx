"use client"

import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { Animated_Beam } from './Animated_Beam';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";


const About = () => {

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <>
            <section id="About" className="flex flex-col w-full p-2 md:p-8 gap-9 font-sans h-full items-center justify-center md:-mt-[10rem]">
                
                <ScrollContainer>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <span style={{ fontSize: "30px" }}>Let me Explaion you wht we do 😀</span>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={ZoomInScrollOut}>
                            <span style={{ fontSize: "40px" }}>We make Offline Shopping easier</span>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={FadeUp}>
                            <span style={{ fontSize: "40px" }}>
                                <Card className="flex flex-col lg:-mt-[170px] bg-gradient-to-tr from-gray-100 via-gray-300 to-gray-400 shadow-lg z-1 border-none hover:shadow-xl rounded-2xl transition-shadow w-full lg:w-1/3 h-fit">
                                    <CardHeader>
                                        <CardTitle>Self Check-in Check-out</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col justify-center items-center">
                                        <p className="flex text-sm md:text-lg opacity-55">
                                            Enjoy the ease of our advanced self-check-in and check-out
                                            system. With fewer clicks, you can make your shopping
                                            experience quicker and more convenient.
                                        </p>
                                    </CardContent>
                                </Card>
                            </span>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <div className='flex bg-red-400' style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                            <span style={{ fontSize: "40px" }}>
                                <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                                <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
                                - I'm Dante Chun -
                                <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                                <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                            </span>
                        </div>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky())}>
                            <span style={{ fontSize: "40px" }}>Done</span>
                            <br />
                            <span style={{ fontSize: "30px" }}>
                                There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                            </span>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
            </section>

        </>
    )
}

export default About
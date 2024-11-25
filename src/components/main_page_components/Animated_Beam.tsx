"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function Animated_Beam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gray-800/85 p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.googleDocs />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.notion />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.openai />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.zapier />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.messenger />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

const Icons = {
  notion: () => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
      <path d="m23,24h-8c-.311,0-.604-.145-.793-.391-.189-.247-.254-.567-.173-.868.591-2.203,2.633-3.741,4.966-3.741s4.375,1.538,4.966,3.741c.081.301.017.621-.173.868-.188.247-.482.391-.793.391Zm-4-6c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Zm4.962-10.275l-1.172-4.099c-.61-2.135-2.588-3.626-4.808-3.626h-.982v4c0,.552-.447,1-1,1s-1-.448-1-1V0h-6v4c0,.552-.448,1-1,1s-1-.448-1-1V0h-.983C3.797,0,1.82,1.491,1.209,3.626L.039,7.725c-.025.089-.039.182-.039.275,0,2.206,1.794,4,4,4h1c1.2,0,2.266-.542,3-1.382.734.84,1.8,1.382,3,1.382h2c1.201,0,2.266-.542,3-1.382.734.84,1.799,1.382,3,1.382h1c2.206,0,4-1.794,4-4,0-.093-.013-.186-.038-.275Zm-11.859,14.495c.481-1.794,1.659-3.256,3.192-4.176-.499-.725-.795-1.6-.795-2.545,0-.652.146-1.268.396-1.827-.607.207-1.244.327-1.896.327h-2c-1.062,0-2.095-.288-3-.819-.905.531-1.938.819-3,.819h-1c-1.093,0-2.116-.299-3-.812v6.812c0,2.206,1.794,4,4,4h7.192c-.201-.568-.248-1.189-.089-1.78Z" />
    </svg>
  ),
  openai: () => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M21,0h-6c-1.654,0-3,1.346-3,3V24h12V3c0-1.654-1.346-3-3-3Zm-4,19h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm4,12h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Zm-11.762-.976l-2.166-2.166c-1.107-1.107-3.038-1.107-4.146,0L.762,6.024c-.484,.483-.762,1.154-.762,1.839V24H10V7.863c0-.685-.278-1.355-.762-1.838Zm-3.238,12.976h-2v-2h2v2Zm0-4h-2v-2h2v2Zm0-4h-2v-2h2v2Z" /></svg>

  ),
  googleDrive: () => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
      <path d="m23,24h-8c-.311,0-.604-.145-.793-.391-.189-.247-.254-.567-.173-.868.591-2.203,2.633-3.741,4.966-3.741s4.375,1.538,4.966,3.741c.081.301.017.621-.173.868-.188.247-.482.391-.793.391Zm-4-6c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Zm4.962-10.275l-1.172-4.099c-.61-2.135-2.588-3.626-4.808-3.626h-.982v4c0,.552-.447,1-1,1s-1-.448-1-1V0h-6v4c0,.552-.448,1-1,1s-1-.448-1-1V0h-.983C3.797,0,1.82,1.491,1.209,3.626L.039,7.725c-.025.089-.039.182-.039.275,0,2.206,1.794,4,4,4h1c1.2,0,2.266-.542,3-1.382.734.84,1.8,1.382,3,1.382h2c1.201,0,2.266-.542,3-1.382.734.84,1.799,1.382,3,1.382h1c2.206,0,4-1.794,4-4,0-.093-.013-.186-.038-.275Zm-11.859,14.495c.481-1.794,1.659-3.256,3.192-4.176-.499-.725-.795-1.6-.795-2.545,0-.652.146-1.268.396-1.827-.607.207-1.244.327-1.896.327h-2c-1.062,0-2.095-.288-3-.819-.905.531-1.938.819-3,.819h-1c-1.093,0-2.116-.299-3-.812v6.812c0,2.206,1.794,4,4,4h7.192c-.201-.568-.248-1.189-.089-1.78Z" />
    </svg>
  ),
  whatsapp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
      <path d="m23,24h-8c-.311,0-.604-.145-.793-.391-.189-.247-.254-.567-.173-.868.591-2.203,2.633-3.741,4.966-3.741s4.375,1.538,4.966,3.741c.081.301.017.621-.173.868-.188.247-.482.391-.793.391Zm-4-6c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Zm4.962-10.275l-1.172-4.099c-.61-2.135-2.588-3.626-4.808-3.626h-.982v4c0,.552-.447,1-1,1s-1-.448-1-1V0h-6v4c0,.552-.448,1-1,1s-1-.448-1-1V0h-.983C3.797,0,1.82,1.491,1.209,3.626L.039,7.725c-.025.089-.039.182-.039.275,0,2.206,1.794,4,4,4h1c1.2,0,2.266-.542,3-1.382.734.84,1.8,1.382,3,1.382h2c1.201,0,2.266-.542,3-1.382.734.84,1.799,1.382,3,1.382h1c2.206,0,4-1.794,4-4,0-.093-.013-.186-.038-.275Zm-11.859,14.495c.481-1.794,1.659-3.256,3.192-4.176-.499-.725-.795-1.6-.795-2.545,0-.652.146-1.268.396-1.827-.607.207-1.244.327-1.896.327h-2c-1.062,0-2.095-.288-3-.819-.905.531-1.938.819-3,.819h-1c-1.093,0-2.116-.299-3-.812v6.812c0,2.206,1.794,4,4,4h7.192c-.201-.568-.248-1.189-.089-1.78Z" />
    </svg>
  ),
  googleDocs: () => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
      <path d="m23,24h-8c-.311,0-.604-.145-.793-.391-.189-.247-.254-.567-.173-.868.591-2.203,2.633-3.741,4.966-3.741s4.375,1.538,4.966,3.741c.081.301.017.621-.173.868-.188.247-.482.391-.793.391Zm-4-6c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Zm4.962-10.275l-1.172-4.099c-.61-2.135-2.588-3.626-4.808-3.626h-.982v4c0,.552-.447,1-1,1s-1-.448-1-1V0h-6v4c0,.552-.448,1-1,1s-1-.448-1-1V0h-.983C3.797,0,1.82,1.491,1.209,3.626L.039,7.725c-.025.089-.039.182-.039.275,0,2.206,1.794,4,4,4h1c1.2,0,2.266-.542,3-1.382.734.84,1.8,1.382,3,1.382h2c1.201,0,2.266-.542,3-1.382.734.84,1.799,1.382,3,1.382h1c2.206,0,4-1.794,4-4,0-.093-.013-.186-.038-.275Zm-11.859,14.495c.481-1.794,1.659-3.256,3.192-4.176-.499-.725-.795-1.6-.795-2.545,0-.652.146-1.268.396-1.827-.607.207-1.244.327-1.896.327h-2c-1.062,0-2.095-.288-3-.819-.905.531-1.938.819-3,.819h-1c-1.093,0-2.116-.299-3-.812v6.812c0,2.206,1.794,4,4,4h7.192c-.201-.568-.248-1.189-.089-1.78Z" />
    </svg>
  ),
  zapier: () => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
      <path d="m23,24h-8c-.311,0-.604-.145-.793-.391-.189-.247-.254-.567-.173-.868.591-2.203,2.633-3.741,4.966-3.741s4.375,1.538,4.966,3.741c.081.301.017.621-.173.868-.188.247-.482.391-.793.391Zm-4-6c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Zm4.962-10.275l-1.172-4.099c-.61-2.135-2.588-3.626-4.808-3.626h-.982v4c0,.552-.447,1-1,1s-1-.448-1-1V0h-6v4c0,.552-.448,1-1,1s-1-.448-1-1V0h-.983C3.797,0,1.82,1.491,1.209,3.626L.039,7.725c-.025.089-.039.182-.039.275,0,2.206,1.794,4,4,4h1c1.2,0,2.266-.542,3-1.382.734.84,1.8,1.382,3,1.382h2c1.201,0,2.266-.542,3-1.382.734.84,1.799,1.382,3,1.382h1c2.206,0,4-1.794,4-4,0-.093-.013-.186-.038-.275Zm-11.859,14.495c.481-1.794,1.659-3.256,3.192-4.176-.499-.725-.795-1.6-.795-2.545,0-.652.146-1.268.396-1.827-.607.207-1.244.327-1.896.327h-2c-1.062,0-2.095-.288-3-.819-.905.531-1.938.819-3,.819h-1c-1.093,0-2.116-.299-3-.812v6.812c0,2.206,1.794,4,4,4h7.192c-.201-.568-.248-1.189-.089-1.78Z" />
    </svg>
  ),
  messenger: () => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
      <path d="m23,24h-8c-.311,0-.604-.145-.793-.391-.189-.247-.254-.567-.173-.868.591-2.203,2.633-3.741,4.966-3.741s4.375,1.538,4.966,3.741c.081.301.017.621-.173.868-.188.247-.482.391-.793.391Zm-4-6c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5,2.5,1.121,2.5,2.5-1.121,2.5-2.5,2.5Zm4.962-10.275l-1.172-4.099c-.61-2.135-2.588-3.626-4.808-3.626h-.982v4c0,.552-.447,1-1,1s-1-.448-1-1V0h-6v4c0,.552-.448,1-1,1s-1-.448-1-1V0h-.983C3.797,0,1.82,1.491,1.209,3.626L.039,7.725c-.025.089-.039.182-.039.275,0,2.206,1.794,4,4,4h1c1.2,0,2.266-.542,3-1.382.734.84,1.8,1.382,3,1.382h2c1.201,0,2.266-.542,3-1.382.734.84,1.799,1.382,3,1.382h1c2.206,0,4-1.794,4-4,0-.093-.013-.186-.038-.275Zm-11.859,14.495c.481-1.794,1.659-3.256,3.192-4.176-.499-.725-.795-1.6-.795-2.545,0-.652.146-1.268.396-1.827-.607.207-1.244.327-1.896.327h-2c-1.062,0-2.095-.288-3-.819-.905.531-1.938.819-3,.819h-1c-1.093,0-2.116-.299-3-.812v6.812c0,2.206,1.794,4,4,4h7.192c-.201-.568-.248-1.189-.089-1.78Z" />
    </svg>
  ),
};

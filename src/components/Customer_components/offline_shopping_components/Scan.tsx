import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import ProductCards from "./ProductCards";
import BarcodeScanner from "./BarcodeScanner";

const Scan = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [usingFrontCamera, setUsingFrontCamera] = useState(true);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  const startCamera = useCallback(
    (isFront: boolean) => {
      const constraints = {
        video: {
          facingMode: isFront ? "user" : "environment", // 'user' for front camera, 'environment' for back camera
        },
      };

      stopCamera();

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then((stream) => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current
              .play()
              .catch((error) => console.error("Error playing video:", error));
          }
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    },
    [stopCamera]
  );

  useEffect(() => {
    startCamera(usingFrontCamera);
    return () => {
      stopCamera();
    };
  }, [usingFrontCamera]);

  const handleSwitchCamera = () => {
    setUsingFrontCamera((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="relative w-full h-3/4 lg:w-1/2">
          <BarcodeScanner />
          <div className="flex w-full absolute bottom-4 items-center justify-center py-2 px-4">
            <div className="flex py-2 px-4 rounded">
              <Drawer>
                <DrawerTrigger className="flex bg-gray-200 p-3 rounded-xl min:w-[10vh] justify-center text-xl">
                  Scan
                </DrawerTrigger>
                <DrawerContent className="flex h-3/5 items-center">
                  <DrawerHeader className="flex flex-col items-center justify-center">
                    <DrawerTitle className="flex w-full items-center p-3">
                      Is this the item you're looking for?
                    </DrawerTitle>
                    <ProductCards />
                  </DrawerHeader>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="flex py-2 px-4">
              <button
                onClick={handleSwitchCamera}
                className="flex bg-white p-3 rounded-full hover:bg-gray-300 transition-color delay-100"
              >
                <img
                  src="/images/switch-camera.png"
                  alt="switch camera"
                  className="flex w-[40px] h-[40px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scan;
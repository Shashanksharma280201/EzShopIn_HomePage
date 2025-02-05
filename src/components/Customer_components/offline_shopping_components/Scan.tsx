import React, { useState, useRef, useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';

const BarcodeScanner: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [scannedCodes, setScannedCodes] = useState<string[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();

    const startScanning = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment', // Use the rear camera
          },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }

        codeReader.decodeFromVideoDevice(null, videoRef.current, (result, error) => {
          if (result) {
            const text = result.getText();
            if (!scannedCodes.includes(text)) {
              setScannedCodes(prev => [...prev, text]);
              setIsDrawerOpen(true);
            }
          }
          if (error) {
            console.error(error);
          }
        });

        setIsInitialized(true);
      } catch (error) {
        console.error('Error accessing the camera:', error);
        alert('Unable to access the camera. Please check your permissions.');
      }
    };

    if (isActive) {
      startScanning();
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
      codeReader.reset();
    };
  }, [isActive]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex fixed top-0 flex-row justify-between bg-gray-700/85 w-full p-5">
          <h1 className="flex text-3xl opacity-85">EzShopIn</h1>
          <div className="flex gap-4 px-4 md:px-9">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex bg-white opacity-50 p-2 rounded-full"><img src="/images/user.svg" alt="user" className="h-5 md:h-8 w-5 md:w-8" /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <div>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="flex bg-black text-white">
                        Logout
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete
                          your account and remove your data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>
                          <Link href="/">Continue</Link>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>


        <h1 className="text-xl p-3 text-center md:text-2xl lg:text-4xl font-bold text-gray-600 mb-6">Scan the Barcode of the product you want to add to your cart</h1>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
          <div className="relative flex flex-col items-center justify-center w-full h-64 bg-black rounded-lg mb-4">
            {/* Video feed */}
            <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover rounded-lg" />

            {/* Center line for scanning */}
            <div
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <div className="w-full h-0.5 bg-red-500 opacity-55" style={{ opacity: 0.7 }} />
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold">Scanned Results</h2>
            {scannedCodes.length > 0 ? (
              <p className="text-green-600">Scan more items to see the details.</p>
            ) : (
              <p className="text-pink-400">No barcodes scanned yet.</p>
            )}
          </div>
        </div>


        {/* <div className="flex mt-6 space-x-4">
        <Button onClick={() => setIsActive(true)} disabled={isActive}>
          Start Scanner
        </Button>
        <Button variant="outline" onClick={() => setIsActive(false)} disabled={!isActive}>
          Stop Scanner
        </Button>
      </div> */}

        {!isInitialized && (
          <p className="text-gray-500 mt-4">Initializing Scanner...</p>
        )}

        {/* Drawer Component */}
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button className="hidden">Open</Button>
          </DrawerTrigger>
          <DrawerContent className='fkex flex-col items-center justify-center gap-4 p-4 bg-gradient-to-br from-white to-gray-500 text-white'>
            <DrawerHeader>
              <DrawerTitle>Barcode Detected</DrawerTitle>
              {/* <DrawerDescription>
              
            </DrawerDescription> */}
            </DrawerHeader>
            <div className="flex flex-col gap-4 p-4">
              {/* {scannedCodes.map((code, index) => (
              <p key={index} className="text-lg text-gray-700">
                {code}
              </p>
            ))
            } */}


              <div className="flex flex-col font-sans bg-gray-700 hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all delay-100 h-fit w-[9rem] md:w-[12rem]">
                <img
                  src='/images/home.svg'
                  alt='image'
                  className="flex h-full bg-slate-400 w-full rounded-t-xl"
                />
                <div className="flex flex-col gap-1 p-2 h-fit bg-gray-700 rounded-b-xl">
                  <h1 className="flex w-full text-sm md:text-sm justify-center">Slim fit towsers</h1>
                  <div className="flex flex-col md:flex-row justify-between">
                    <h1 className="flex opacity-60 text-sm">Rs 500</h1>
                    <h1 className="flex opacity-60 text-sm">Trowsers</h1>
                  </div>
                  <button
                    type="button"
                    className="group inline-flex w-full items-center justify-center rounded-md bg-white p-2 text-lg font-semibold text-black transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-200"
                  >
                    Add
                    <img
                      src="/images/Shop/add_to_cart.svg"
                      className="group-hover:ml-4 ml-8 h-6 w-6 transition-all"
                    />
                  </button>
                </div>
              </div>

            </div>
            <DrawerFooter className='flex flex-row justify-center gap-4'>
              <Button onClick={() => setIsDrawerOpen(false)}>Close</Button>
              {/* <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default BarcodeScanner;

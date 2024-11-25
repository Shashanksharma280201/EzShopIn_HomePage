"use client"

import React, { useRef, useState, useEffect } from 'react';
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
import { Button } from '@/components/ui/button';

const Scanner: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);

    useEffect(() => {
        startCamera();
        return () => {
            stopCamera();
        };
    }, []);

    const startCamera = async () => {
        try {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
                setStream(videoStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = videoStream;
                    videoRef.current.play();
                }
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
            alert('Error accessing the camera. Please check permissions and try again.');
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
    };

    const captureImage = async () => {
        const video = videoRef.current;
        if (!video) {
            console.error('Video element is not available');
            return;
        }

        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext('2d');
        if (!context) {
            console.error('Failed to get canvas context');
            return;
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        setCapturedImage(dataUrl);

        try {
            const response = await fetch('http://localhost:3000/api/barcode/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: dataUrl }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }

            const data = await response.json();
            if (data.error) {
                alert(`Error: ${data.error}`);
            } else if (data.length > 0) {
                alert(`Barcode Type: ${data[0].type}, Data: ${data[0].data}`);
            } else {
                alert('No barcode found.');
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Error uploading image:', error);
                alert('Error uploading image: ' + error.message);
            } else {
                console.error('Unknown error:', error);
                alert('An unknown error occurred');
            }
        }
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="relative w-full h-3/4 lg:w-1/2">
                    <video ref={videoRef} style={{ width: '100%', height: 'auto' }} />
                    {capturedImage && <img src={capturedImage} alt="Captured" />}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded">
                        <Drawer>
                            <DrawerTrigger className='flex bg-gray-200 p-3 rounded-xl justify-center text-2xl'>
                                <Button onClick={captureImage}>
                                    Scan
                                </Button>
                            </DrawerTrigger>
                            <DrawerContent className='flex h-3/4 items-center'>
                                <DrawerHeader>
                                    <DrawerTitle className='flex w-full items-center p-3'>Is this the item you're looking for?</DrawerTitle>
                                    {/* Placeholder for content, e.g., product details */}
                                </DrawerHeader>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Scanner;


'use client';
import React, { useRef, useState } from 'react';

const BarcodeScanner = () => {
    const videoRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);

    const startCamera = async () => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        }
    };

    const captureImage = () => {
        const canvas = document.createElement('canvas');
        const video = videoRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/png');
        setCapturedImage(dataUrl);
        video.srcObject.getTracks().forEach(track => track.stop());
    };

    const uploadImage = async () => {
        if (capturedImage) {
            try {
                const response = await fetch('http://localhost:3000/api/barcode/upload', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ image: capturedImage }),
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
            } catch (error) {
                console.error('Error uploading image:', error);
                alert('Error uploading image: ' + error.message);
            }
        }
    };

    return (
        <>

            <div>
                <h1>Barcode Scanner</h1>
                <button onClick={startCamera}>Start Camera</button>
                <div>
                    <video ref={videoRef} style={{ display: capturedImage ? 'none' : 'block' }} />
                    {capturedImage && <img src={capturedImage} alt="Captured" />}
                </div>
                <button onClick={captureImage}>Capture Image</button>
                <button onClick={uploadImage}>Upload Image</button>
            </div>
        </>
    );
};

export default BarcodeScanner;

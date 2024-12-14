// components/QRCodeScanner.tsx
import React, { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const QRCodeScanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scannedCode, setScannedCode] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

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
        }

        // Start the QR code scanning
        codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
          if (result) {
            setScannedCode(result.getText());
          }
          if (err) {
            console.error(err);
          }
        });
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    if (isScanning) {
      startScanning();
    } else {
      // Stop the camera and scanning when not scanning
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    }

    return () => {
      // Cleanup the video stream when component unmounts or scanning stops
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isScanning]);

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <div>
        <video ref={videoRef} style={{ width: '100%' }} />
      </div>
      {scannedCode && (
        <p>Scanned QR Code: <strong>{scannedCode}</strong></p>
      )}
      <button onClick={() => setIsScanning(!isScanning)}>
        {isScanning ? 'Stop Scanning' : 'Start Scanning'}
      </button>
    </div>
  );
};

export default QRCodeScanner;

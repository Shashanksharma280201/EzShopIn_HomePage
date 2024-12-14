import React, { useState, useRef, useEffect } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const BarcodeScanner: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [scannedCodes, setScannedCodes] = useState<string[]>([]);
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
            }
          }
          if (error) {
            console.error(error); // Errors while scanning (e.g., decoding failed)
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
      codeReader.reset(); // Clean up the code reader
    };
  }, [isActive]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Barcode Scanner</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <div className="relative w-full h-64 bg-black rounded-lg mb-4">
          <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Scanned Results</h2>
          {scannedCodes.length > 0 ? (
            <ul className="mt-2 space-y-2">
              {scannedCodes.map((code, index) => (
                <li
                  key={index}
                  className="p-2 bg-green-100 text-green-800 rounded-lg shadow"
                  onClick={() => alert(`Barcode: ${code}`)}
                >
                  {code}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No barcodes scanned yet.</p>
          )}
        </div>
      </div>

      <div className="flex mt-6 space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => setIsActive(true)}
          disabled={isActive}
        >
          Start Scanner
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => setIsActive(false)}
          disabled={!isActive}
        >
          Stop Scanner
        </button>
      </div>

      {!isInitialized && (
        <p className="text-gray-500 mt-4">Initializing Scanner...</p>
      )}
    </div>
  );
};

export default BarcodeScanner;

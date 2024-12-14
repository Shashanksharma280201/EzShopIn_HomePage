import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { TextResult } from 'dynamsoft-javascript-barcode';

// Dynamically import BarcodeScanner to avoid SSR issues
const BarcodeScanner = dynamic(() =>
  import('react-barcode-qrcode-scanner').then(mod => mod.BarcodeScanner),
  { ssr: false }
);


const ScannerPage: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(true);
  const [isPause, setIsPause] = useState<boolean>(false);
  const [scannedCodes, setScannedCodes] = useState<TextResult[]>([]);
  const [isInitialized, setInitialized] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleScanned = (results: TextResult[]) => {
    if (results.length > 0) {
      setScannedCodes(results);
    }
  };

  const handleClicked = (result: TextResult) => {
    alert(`Barcode Text: ${result.barcodeText}`);
  };

  const handleInitialized = () => {
    setInitialized(true);
    console.log('Scanner initialized');
  };

  const startVideoStream = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment', // Use back camera on mobile
          },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        alert('Unable to access the camera. Please check your permissions.');
      }
    } else {
      alert('Camera API is not supported in your browser.');
    }
  };

  React.useEffect(() => {
    if (isActive) {
      startVideoStream();
    }
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [isActive]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Barcode Scanner</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
        <div className="relative w-full h-64 bg-black rounded-lg mb-4">
          <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        </div>

        <BarcodeScanner
          isActive={isActive}
          isPause={isPause}
          license="your-dynamsoft-license-key"
          drawOverlay={true}
          desiredCamera="back"
          desiredResolution={{ width: 1280, height: 720 }}
          runtimeSettings='{"ImageParameter":{"BarcodeFormatIds":["BF_QR_CODE"],"Description":"","Name":"Settings"},"Version":"3.0"}'
          onScanned={handleScanned}
          onClicked={handleClicked}
          onInitialized={handleInitialized}
        />

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Scanned Results</h2>
          {scannedCodes.length > 0 ? (
            <ul className="mt-2 space-y-2">
              {scannedCodes.map((code, index) => (
                <li
                  key={index}
                  className="p-2 bg-green-100 text-green-800 rounded-lg shadow"
                >
                  {code.barcodeText}
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
        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          onClick={() => setIsPause(!isPause)}
        >
          {isPause ? 'Resume Scanner' : 'Pause Scanner'}
        </button>
      </div>

      {!isInitialized && (
        <p className="text-gray-500 mt-4">Initializing Scanner...</p>
      )}
    </div>
  );
};

export default ScannerPage;

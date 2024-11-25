import React from "react";
import { useZxing } from "react-zxing";

const BarcodeScanner: React.FC = () => {
  const [result, setResult] = React.useState<string | null>(null);

  // Correctly using the useZxing hook with the appropriate handler.
  const { ref } = useZxing({
    onDecodeResult(decodedResult) {
      if (decodedResult) {
        setResult(decodedResult.getText());
      }
    },
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-96 w-96 relative rounded-md overflow-hidden flex justify-center items-center">
        <video className="h-full w-full object-cover" ref={ref} autoPlay playsInline />
        {ref.current ? (
          <div className="absolute rounded-sm h-1 w-[90%] bg-red-400"></div>
        ) : (
          <div className="h-full w-full absolute bg-black animate-pulse"></div>
        )}
      </div>
      <p className="mt-4">
        <span>Last result: </span>
        <span>{result ? result : "No barcode detected yet"}</span>
      </p>
    </div>
  );
};

export default BarcodeScanner;
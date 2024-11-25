"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl mb-10">Page not found 🤷‍♂️</h2>
      <h2 className="text-3xl"> Redirecting you to the Home page...</h2>
    </div>
  );
}

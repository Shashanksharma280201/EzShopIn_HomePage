import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />

      <section className="flex bg-gradient-to-b from-white to-gray-200 h-screen  w-full">
        <div className="flex flex-col md:flex-row bg-red-200 p-6 items-center justify-center w-full h-full">
          <div className="flex bg-green-300 h-3/4 w-1/2 -mb-9">
            content
          </div>
          <div className="flex bg-gray-300 h-3/4 w-1/2 -mb-9">
            image
          </div>
        </div>
      </section>

      <section className="flex bg-gradient-to-b from-gray-200 to-gray-300 h-screen w-full rounded-b-3xl">

      </section>


      <Footer />
    </>
  );
}

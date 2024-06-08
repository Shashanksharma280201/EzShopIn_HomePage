import Footer from "@/components/Footer";
import { VanishInput } from "@/components/main_page_components/VanishInput";
import { WordFlip } from "@/components/main_page_components/WordFlip";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />

      <section className="flex bg-gradient-to-b from-white to-gray-200 h-screen rounded-b-3xl w-full">
        <div className="flex flex-col md:flex-row p-6 items-center justify-center w-full h-full">

          <div className="flex flex-col space-y-7 h-fit md:h-3/4 w-full md:w-1/2 -mb-9 items-center justify-center">
            <WordFlip />
            <Button>Contact us</Button>
          </div>

          <div className="flex flex-row items-center justify-center h-1/2 md:h-3/4 w-fit md:w-1/2 -mb-9 p-5">
            <div className="flex h-[60vh] w-fit">
              <img src="\images\scan.jpeg" alt="image" className="flex rounded-xl" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
      </section>


      {/* card describing what we provide */}
      <section className="flex flex-col items-center justify-center h-fit w-full ">

        <h1 className="flex text-3xl p-6">What we offer</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full h-fit p-9">

          {/* 1 */}
          <Card className="flex flex-col bg-gradient-to-tl from-white to-purple-200 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3">
            <CardHeader>
              <CardTitle>Self Check-in Check-out</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">

              <div className="flex h-[40vh] w-full">
                <img src="images\checkin_checkout.jpg" alt="" className="flex rounded-lg" style={{ width: "100%", height: "100%" }} />
              </div>

              <p className="flex text-sm">
                Experience the convenience of seamless self-check-in and check-out with our state-of-the-art system,
                with less clicks you can enjoy your shopping.
              </p>
            </CardContent>

          </Card>

          {/* 2 */}
          <Card className="flex flex-col bg-gradient-to-tl from-white to-purple-200 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3">
            <CardHeader>
              <CardTitle>Invenrtory Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex text-sm">
                Streamline your operations with our cutting-edge inventory management system,
                designed to optimize stock control, reduce costs, and boost efficiency.
              </p>
            </CardContent>
          </Card>

          {/* 3 */}
          <Card className="flex flex-col bg-gradient-to-tl from-white to-purple-200 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3">
            <CardHeader>
              <CardTitle>Barcode Reading</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex text-sm">
                Effortlessly streamline your operations with our advanced barcode reading system,
                ensuring fast and accurate data capture for optimal efficiency.
              </p>
            </CardContent>
          </Card>

        </div>
      </section>

      <Footer />
    </>
  );
}

import Footer from "@/components/Footer";
import { ScrollAnimation } from "@/components/main_page_components/ScrollAnimation";
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

      <section id="Home" className="flex flex-col bg-gradient-to-r from-purple-200 to-pink-100 h-fit rounded-b-full shadow-xl w-full">

        {/* top heading */}
        <div className="flex relative flex-col w-full h-screen items-center justify-center">
          <div className="flex flex-col bg-transparent space-y-5 w-full md:w-3/4 items-center justify-center p-6">
            <h1 className="flex flex-col font-semibold text-4xl md:text-6xl text-center">Join the best experience of <span className="text-gray-500"> offline shopping</span></h1>
            <h1 className="flex text-xl w-3/4 opacity-80 md:text-4xl text-center">Connect with us to have the software integrated in your system</h1>

            <Button>Connect with us</Button>
            <h1 className="flex text-sm md:text-xl opacity-70 text-center">Our team would connect with you as soon as possible</h1>
          </div>
        </div>

        {/* bottom cards  */}
        <div className="flex relative flex-col w-full h-screen items-center justify-center p-6">
          {/* <h1 className="flex font-semibold text-4xl"> what we offer</h1> */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full h-fit p-9">

            <Card className="flex flex-col z-10 md:-mt-[170px] bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3 h-[50vh]">
              <CardHeader>
                <CardTitle>Self Check-in Check-out</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <p className="flex text-xl opacity-75">
                  Experience the convenience of seamless self-check-in and check-out with our state-of-the-art system,
                  with less clicks you can enjoy your shopping.
                </p>

              </CardContent>

              <CardFooter>
                <Button>Read more</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col z-10 md:mt-10 bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3 h-[50vh]">
              <CardHeader>
                <CardTitle>Invenrtory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex text-xl opacity-75">
                  Streamline your operations with our cutting-edge inventory management system,
                  designed to optimize stock control, reduce costs, and boost efficiency.
                </p>

              </CardContent>

              <CardFooter>
                <Button>Read more</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col z-10 md:-mt-[100px] bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3 h-[50vh]">
              <CardHeader>
                <CardTitle>Barcode Reading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex text-xl opacity-75">
                  Effortlessly streamline your operations with our advanced barcode reading system,
                  ensuring fast and accurate data capture for optimal efficiency.
                </p>

              </CardContent>

              <CardFooter>
                <Button>Read more</Button>
              </CardFooter>
            </Card>

          </div>
        </div>

      </section>


      {/* about  */}
      <section className="flex w-full h-fit items-center justify-center -mt-10">
        <ScrollAnimation />
      </section>

      <section id="About" className="flex w-full h-fit items-center justify-center -mt-10">

      </section>




      <Footer />
    </>
  );
}

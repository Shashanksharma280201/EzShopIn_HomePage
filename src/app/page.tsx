import Footer from "@/components/Footer";
import { ScrollAnimation } from "@/components/main_page_components/ScrollAnimation";
import { VanishInput } from "@/components/main_page_components/VanishInput";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { Team } from "@/components/main_page_components/Team";
import { ScrollEffect } from "@/components/main_page_components/ScrollEffect";


export default function Home() {
  return (
    <>
      <NavBar />

      <section id="Home" className="flex font-mono flex-col bg-gradient-to-r from-purple-300 to-pink-100 h-fit rounded-b-full shadow-xl w-full">

        {/* top heading */}
        <div className="flex relative flex-col w-full h-screen items-center justify-center">
          <div className="flex flex-col bg-transparent space-y-5 w-full md:w-3/4 items-center justify-center p-6">
            <h1 className="flex flex-col font-semibold text-5xl md:text-6xl text-center">Join the best experience of <span className="text-gray-500"> offline shopping</span></h1>
            <h1 className="flex text-2xl w-full md:w-3/4 opacity-80 md:text-4xl text-center">Connect with us to have the software integrated in your system</h1>

            <Button>Connect with us</Button>
            <h1 className="flex text-sm md:text-xl opacity-70 text-center">Our team would connect with you as soon as possible</h1>
          </div>
        </div>

        {/* bottom cards  */}
        <div className="flex relative flex-col w-full h-screen items-center justify-center p-6">
          {/* <h1 className="flex font-semibold text-4xl"> what we offer</h1> */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full h-fit p-9">

            <Card className="flex flex-col md:-mt-[170px] bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3 h-fit">
              <CardHeader>
                <CardTitle>Self Check-in Check-out</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <p className="flex text-sm md:text-lg opacity-75">
                  Experience the convenience of seamless self-check-in and check-out with our state-of-the-art system,
                  with less clicks you can enjoy your shopping.
                </p>

              </CardContent>

              <CardFooter>
                <Button><a href="#check-in/out">Read more</a></Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col z-10 md:mt-10 bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3 h-fit">
              <CardHeader>
                <CardTitle>Invenrtory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex text-sm md:text-lg opacity-75">
                  Streamline your operations with our cutting-edge inventory management system,
                  designed to optimize stock control, reduce costs, and boost efficiency.
                </p>

              </CardContent>

              <CardFooter>
                <Button>Read more</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col z-10 md:-mt-[100px] bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3 h-fit">
              <CardHeader>
                <CardTitle>Barcode Reading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex text-sm md:text-lg opacity-75">
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



      <section className="flex w-full font-mono h-fit items-center justify-center md:-mt-10">
        <ScrollAnimation />
      </section>



      {/* about  */}
      <section id="About" className="flex flex-col font-mono w-full h-fit items-center justify-center -mt-10">
        {/* this is for self check-in check-out system  */}
        {/* <div id="check-in/out" className="flex flex-col md:flex-row items-center justify-center gap-8 h-screen">

          <div className="flex w-fit h-3/4 p-4">
            <img src="images\checkin_checkout.jpg" alt="image" className="flex rounded-2xl shadow-xl" style={{ width: "100%", height: "100%" }} />
          </div>

          <div className="flex flex-col w-full md:w-1/2 space-y-8 text-center p-8 items-center justify-center">
            <h1 className="flex text-4xl font-bold">Self check-in check-out system</h1>
            <p className="flex opacity-70">
              Self check-in/check-out systems in stores enhance efficiency,
              reduce wait times, and improve customer satisfaction by allowing shoppers to
              quickly complete purchases independently, thus streamlining operations and reducing staffing costs.
            </p>
            <div className="flex flex-col items-center justify-center space-y-6 bg-gray-400 rounded-2xl shadow-xl p-3">
              <h1 className="flex text-2xl text-white">With 3 easy steps you can shop effortlessly</h1>
              <img src="\images\arrow-circle-down.svg" alt="arrow" className="flex h-8 w-8 hover:shadow-xl cursor-pointer" />
            </div>
          </div>
        </div> */}

        {/* <div className="flex flex-col md:flex-row mt-10 mb-10 h-fit w-full items-center justify-between gap-9 p-8">

          <Card className="flex flex-col z-10 bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3 h-[30vh]">
            <CardHeader>
              <div className="flex w-10 h-10 -mt-8 -ml-8">
                <img src="\images\square-1.svg" alt="3" />
              </div>
              <CardTitle>Self Check-in Check-out</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
              <p className="flex text-sm opacity-75">
                Experience the convenience of seamless self-check-in and check-out with our state-of-the-art system,
                with less clicks you can enjoy your shopping.
              </p>

            </CardContent>
          </Card>


          <Card className="flex flex-col z-10 bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3 h-[30vh]">
            <CardHeader>
              <div className="flex w-10 h-10 -mt-8 -ml-8">
                <img src="\images\square-2.svg" alt="3" />
              </div>
              <CardTitle>Self Check-in Check-out</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
              <p className="flex text-sm opacity-75">
                Experience the convenience of seamless self-check-in and check-out with our state-of-the-art system,
                with less clicks you can enjoy your shopping.
              </p>

            </CardContent>
          </Card>


          <Card className="flex flex-col z-10 bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full md:w-1/3 h-[30vh]">
            <CardHeader>
              <div className="flex w-10 h-10 -mt-8 -ml-8">
                <img src="\images\square-3.svg" alt="3" />
              </div>
              <CardTitle>Self Check-in Check-out</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
              <p className="flex text-sm opacity-75">
                Experience the convenience of seamless self-check-in and check-out with our state-of-the-art system,
                with less clicks you can enjoy your shopping.
              </p>

            </CardContent>
          </Card>

        </div> */}

        {/* <div className="flex flex-col mt-20 w-full h-fit items-center justify-center p-7">
          <h1 className="flex text-4xl font-semibold mb-10 text-center">Invenrtory Management</h1>

          <div className="flex flex-col h-fit bg-gradient-to-b from-gray-200 to-gray-400 rounded-3xl shadow-xl w-full items-center justify-center">

            <div className="flex flex-col md:flex-row p-6 mb-10 items-center justify-between">
              <div className="flex">
                <img src="\images\scan.jpeg" alt="" className="flex h-[40vh] md:h-[60vh] w-fit rounded-2xl" />
              </div>
              <div className="flex flex-col items-center p-4 w-full text-center md:w-1/2 space-y-8">
                <h1 className="flex text-4xl">Scan the barcode</h1>
                <p className="flex text-xl opacity-75">
                  Scan the barcode to get more information about the product and add to cart
                </p>
              </div>
            </div>

            <VanishInput />

            <div className="flex flex-col md:flex-row p-6 items-center justify-between mt-10">
              <div className="flex flex-col items-center p-4 w-full text-center md:w-1/2 space-y-8">
                <h1 className="flex text-4xl">Scan the barcode</h1>
                <p className="flex text-xl opacity-75 font-ubuntu">
                  Scan the barcode to get more information about the product and add to cart
                </p>
              </div>
              <div className="flex">
                <img src="\images\inventory_check.jpg" alt="" className="flex h-[40vh] md:h-[60vh] w-fit rounded-2xl" />
              </div>

            </div>


          </div>
        </div> */}
        <ScrollEffect />

      </section>


      <section id="Contact" className="flex flex-col h-screen mt-10 font-mono w-full items-center justify-center font-ubuntu">
        <h1 className="flex text-2xl md:text-4xl w-full md:w-1/2 p-4 mt-10 justify-center text-center font-semibold">Contact us to integrate our software in your stores today</h1>
        <p className="flex text-sm md:text-xl opacity-75 w-full justify-center text-center">For more details on click on the buttons below, feel free to get in touch</p>

        <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-5 p-4 pl-9 pr-9">
          {/* contact  */}
          <div className="flex flex-col space-y-7 w-full pb-2 h-fit bg-gradient-to-tl from-yellow-200 to-green-200 rounded-2xl shadow-xl items-center justify-center">
            <h1 className="flex text-3xl">Contact us</h1>
            <div className="flex flex-col w-fit h-fit justify-between items-center p-3">
              <a href="tel:+919591678076">
                <h1 className="flex p-4 text-2xl opacity-75">+91 9591678076</h1>
              </a>
              <a href="mailto:ezshopinindia@gmail.com">
                <h1 className="flex text-2xl opacity-75">ezshopinindia@gmail.com</h1>
              </a>
            </div>
          </div>


          {/* Team  */}
          <div className="flex flex-col space-y-8 w-full h-fit pb-4 bg-gradient-to-tr from-yellow-200 to-green-200 rounded-2xl shadow-xl items-center justify-center">
            <h1 className="flex text-3xl">Our Team</h1>
            <Team />
          </div>


        </div>
      </section>


      <Footer />
    </>
  );
}

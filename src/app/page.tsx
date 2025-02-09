import Footer from "@/components/Footer";
import { ScrollAnimation } from "@/components/main_page_components/ScrollAnimation";
import NavBar from "@/components/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Ripple from "@/components/magicui/ripple";
import { Animated_Beam } from "@/components/main_page_components/Animated_Beam";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import About from "@/components/main_page_components/About";
import { Button } from "@/components/ui/button";
import { RecentSales } from "@/components/dashboard_components/recent-sales"


export default function Home() {
  return (
    <>
      <NavBar />

      {/* Hero Section   */}
      <section id="Home" className="flex flex-col h-fit w-full font-sans">

        <div className="flex relative h-screen w-full flex-col bg-gradient-to-br from-pink-100 to-green-100 rounded-b-2xl items-center justify-center overflow-hidden">
          <h2 className="z-10 whitespace-pre-wrap text-center text-4xl lg:text-7xl w-3/4 md:w-1/2 font-normal tracking-tighter items-center justify-center text-gray-800">
            Shop faster Checkout smarter Offline made easy
          </h2>
          <Ripple />
        </div>

        {/* bottom cards  */}
        <div className="flex relative flex-col w-full z-10 h-3/4 items-center justify-center lg:-top-[28vh] p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full h-fit p-9">
            <Card className="flex flex-col lg:-mt-[170px] bg-gradient-to-tr from-green-100 to-green-400/50 shadow-md z-1 border-none hover:shadow-xl rounded-2xl transition-shadow w-full lg:w-1/3 h-fit">
              <CardHeader>
                <CardTitle>Self Check-in Check-out</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <p className="flex text-sm md:text-lg opacity-55">
                  Enjoy the ease of our advanced self-check-in and check-out
                  system. With fewer clicks, you can make your shopping
                  experience quicker and more convenient.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="flex">
                  <a href="/Customer/offline_shopping">
                    Shop now
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col z-10 lg:mt-10 border-none bg-gradient-to-tr from-green-100 to-green-400/50 shadow-md z-1 hover:shadow-xl rounded-2xl transition-shadow w-full lg:w-1/3 h-fit">
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex text-sm md:text-lg opacity-55">
                  Improve your operations with our advanced inventory management
                  system. It helps you manage stock better, cut costs, and work
                  more efficiently.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="flex">
                  <a href="/Sign-up/Login">
                    Register now
                  </a>
                </Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col z-10 lg:-mt-[100px] border-none bg-gradient-to-tr from-green-100 to-green-400/50 shadow-md z-1 hover:shadow-xl rounded-2xl transition-shadow w-full lg:w-1/3 h-fit">
              <CardHeader>
                <CardTitle>Inventory Check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex text-sm md:text-lg opacity-55">
                  You can check a store's inventory online before visiting to
                  see if the item you want is available.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="flex">
                  <a href="/Customer/check_Inventory">
                    Shop now
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Scroll Animation  */}
      <section className="flex w-full z-0 font-sans h-fit items-center justify-center md:-mt-[24rem]">
        <ScrollAnimation />
      </section>

      {/* About  */}
      <section id="About" className="flex flex-col w-full p-2 md:p-8 gap-9 font-sans h-fit items-center justify-center md:-mt-[10rem]">
        <div className="flex flex-col justify-center items-center  bg-gradient-to-br from-pink-200/50 to-green-200/50 rounded-2xl w-full">
          {/* #1 */}
          <div className="flex flex-col w-full rounded-xl items-center justify-center">
            <div className="flex flex-col items-center justify-center lg:flex-row w-full p-4 gap-9 mt-8">
              <div className="flex w-full lg:w-1/2">
                <img src="/images/landing page/self_checkout.png" alt="self check out" className="w-full h-full flex" />
              </div>
              <div className="flex flex-col w-full lg:w-1/2 text-center items-start justify-center text-md opacity-75">
                <h1 className="flex text-black text-3xl justify-center w-full md:text-5xl">Self Check-Out System</h1>
                <br />
                <p className="flex flex-col gap-2 items-center p-9 text-gray-600/65 text-lg lg:text-2xl">
                  <span className="flex text-gray-700/95 text-lg lg:text-2xl">Skip the lines!</span>
                  With our self check-in and check-out system,
                  you can complete your transactions seamlessly using just your phone.
                  Simply scan, pay, and go.
                </p>
              </div>
            </div>
          </div>

          {/* #2 */}
          <div className="flex flex-col items-center justify-between lg:flex-row-reverse w-full p-4 gap-9 mt-8">
            <div className="flex w-full lg:w-1/2">
              <img src="/images/landing page/inventory_management.png" alt="Inventory management" className="w-full h-full flex" />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 text-center items-center justify-center text-md opacity-75 gap-5">
              <h1 className="flex text-black text-3xl md:text-5xl">Cloud-Based Inventory Management</h1>
              <p className="flex flex-col gap-2 items-center text-gray-600/65 text-lg lg:text-2xl md:w-1/2 w-full">
                <span className="flex text-gray-700/95 text-xl md:text-3xl">Manage your store’s stock from anywhere.</span>
                Our cloud-based inventory management keeps everything updated across all devices,
                so you’ll never miss an item.
              </p>
            </div>
          </div>


          {/* #3 */}
          <div className="flex flex-col items-center justify-center lg:flex-row w-full p-4 gap-9 mt-8">
            <div className="flex w-full lg:w-1/2">
              {/* <Animated_Beam />  */}
              <RecentSales />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 text-center items-center justify-center text-md opacity-75 gap-5">
              <h1 className="flex text-black text-3xl md:text-5xl">POS System with Real-Time Data</h1>
              <p className="flex flex-col gap-2 items-center text-gray-600/65 text-lg lg:text-2xl">
                <span className="flex text-gray-700/95 text-xl md:text-3xl">Real time Tracking</span>
                Track sales, customer behavior, and inventory with real-time data at your POS.
                Manage your business smarter with instant insights and updates on every transaction.
              </p>
            </div>
          </div>

          <div className="flex border border-black opacity-15 m-9"></div>

          {/* #4 */}
          <div className="flex flex-col items-center justify-center lg:flex-row-reverse w-full p-4 gap-9 mt-8">
            <div className="flex w-full lg:w-1/2">
              <Animated_Beam />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 text-center items-center justify-center text-md opacity-75 gap-5">
              <h1 className="flex text-black text-3xl md:text-5xl">Customer Store Inventory Preview</h1>
              <p className="flex flex-col gap-2 items-center text-gray-600/85 text-lg lg:text-2xl">
                <span className="flex text-gray-700/95 text-xl md:text-3xl">Check Before You Shop</span>
                See what’s available before visiting any store!
                Browse real-time inventory from your favorite locations and ensure the product you need is in stock.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="flex">
        <About />
      </section> */}


      {/* FAQ  */}
      <section className="flex flex-col w-full items-center justify-center p-3">
        <h1 className="flex text-4xl w-full justify-center p-6 font-sans">FAQ</h1>

        <Accordion type="single" collapsible className="w-full md:w-3/4 space-y-2 font-sans">

          {/* 1 */}
          <AccordionItem
            value="item-1"
            className="border-2 border-gray-600 px-2 pl-4 rounded-3xl"
          >
            <AccordionTrigger className="text-md md:text-xl opacity-65 text-start text-gray-800">
              What is the purpose of your self check-in and check-out system?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg opacity-60 text-slate-800">
              Our self check-in and check-out system allows customers to complete their purchases quickly and conveniently
              using their mobile devices, reducing wait times and enhancing the overall shopping experience.
            </AccordionContent>
          </AccordionItem>

          {/* 2 */}
          <AccordionItem
            value="item-2"
            className="border-2 border-gray-600 px-2 pl-4 rounded-3xl"
          >
            <AccordionTrigger className="text-md md:text-xl opacity-65 text-start text-gray-800">
              How does real-time inventory management work?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg opacity-60 text-slate-800">
              Our cloud-based inventory management system updates stock levels in real-time across all devices.
              This ensures that you have accurate information about product availability at all times, no matter where you are.
            </AccordionContent>
          </AccordionItem>

          {/* 3 */}
          <AccordionItem
            value="item-3"
            className="border-2 border-gray-600 px-2 pl-4 rounded-3xl"
          >
            <AccordionTrigger className="text-md md:text-xl opacity-65 text-start text-gray-800">
              Can I access the inventory of any store?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg opacity-60 text-slate-800">
              Yes! Our platform allows customers to view the inventory of any participating store in real time.
              This way, you can check product availability before visiting the store.
            </AccordionContent>
          </AccordionItem>

          {/* 4 */}
          <AccordionItem
            value="item-4"
            className="border-2 border-gray-600 px-2 pl-4 rounded-3xl"
          >
            <AccordionTrigger className="text-md md:text-xl opacity-65 text-start text-gray-800">
              What benefits does the POS system provide?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg opacity-60 text-slate-800">
              Our POS system offers real-time data analytics, enabling store owners to track sales, monitor inventory levels,
              and gain insights into customer behavior—all from one central platform.
            </AccordionContent>
          </AccordionItem>

          {/* 5 */}
          <AccordionItem
            value="item-5"
            className="border-2 border-gray-600 px-2 pl-4 rounded-3xl"
          >
            <AccordionTrigger className="text-md md:text-xl opacity-65 text-start text-gray-800">
              How often is the inventory updated?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg opacity-60 text-slate-800">
              Our inventory is updated in real-time, allowing you to see the most current product availability whenever you check.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* contact  */}
      {/* <section
        id="Contact"
        className="flex flex-col h-screen mt-[10rem] bg-gradient-to-tr from-green-100/85 via-yellow-100/85 to-orange-100/85 font-mono w-full items-center justify-center font-ubuntu"
      >
        <h1 className="flex text-2xl md:text-4xl w-full md:w-1/2 p-4 mt-10 justify-center text-center font-semibold">
          Start Shopping Smarter Today!
        </h1>

        <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-9 p-9">
          <div className="flex flex-col space-y-7 w-full pb-2 h-fit bg-gradient-to-tl from-gray-300 via-gray-200 to-gray-400 rounded-2xl shadow-xl items-center justify-center">
            <h1 className="flex text-3xl">Contact us</h1>
            <div className="flex flex-col w-fit h-fit justify-between items-center p-3">
              <a href="tel:+919591678076">
                <h1 className="flex p-4 text-lg lg:text-2xl opacity-75">
                  +91 9591678076
                </h1>
              </a>
              <a href="mailto:EzShopInindia@gmail.com">
                <h1 className="flex lg:text-2xl text-lg opacity-75">
                  EzShopIn.india@gmail.com
                </h1>
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-8 w-full h-fit pb-4 bg-gradient-to-tl from-gray-300 via-gray-200 to-gray-400 rounded-2xl shadow-xl items-center justify-center">
            <h1 className="flex text-3xl">Our Team</h1>
            <Team />
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
}

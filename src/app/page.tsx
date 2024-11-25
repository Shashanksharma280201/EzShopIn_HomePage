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
import { Team } from "@/components/main_page_components/Team";
import Ripple from "@/components/magicui/ripple";
import { Animated_Beam } from "@/components/main_page_components/Animated_Beam";
import { Animated_List } from "@/components/main_page_components/Animated_List";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";



export default function Home() {
  return (
    <>
      <NavBar />

      {/* Hero Section   */}
      <section id="Home" className="flex flex-col h-fit w-full font-sans">
        {/* top heading */}
        <div className="flex relative h-[80vh] w-full flex-col bg-gray-800/85 rounded-b-2xl lg:rounded-b-full items-center justify-center overflow-hidden">
          <h2 className="z-10 whitespace-pre-wrap text-center text-4xl lg:text-7xl tracking-tighter items-center justify-center  text-gray-400">
            New way of
            <br />
            <p className="flex text-gray-900 w-full items-center justify-center">
              Shopping
            </p>
          </h2>
          <Ripple />
        </div>

        {/* bottom cards  */}
        <div className="flex relative flex-col w-full h-3/4 items-center justify-center lg:-top-[25vh] p-6">
          {/* <h1 className="flex font-semibold text-4xl"> what we offer</h1> */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full h-fit p-9">
            <Card className="flex flex-col lg:-mt-[170px] bg-gradient-to-tr from-gray-100 via-gray-300 to-gray-400 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full lg:w-1/3 h-fit">
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
            </Card>

            <Card className="flex flex-col z-10 lg:mt-10 bg-gradient-to-tr from-gray-100 via-gray-300 to-gray-400 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full lg:w-1/3 h-fit">
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
            </Card>

            <Card className="flex flex-col z-10 lg:-mt-[100px] bg-gradient-to-tr from-gray-100 via-gray-300 to-gray-400 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full lg:w-1/3 h-fit">
              <CardHeader>
                <CardTitle>Inventory Check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="flex text-sm md:text-lg opacity-55">
                  You can check a store's inventory online before visiting to
                  see if the item you want is available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scroll Animation  */}
      <section className="flex w-full font-mono h-fit items-center justify-center md:-mt-[20rem]">
        <ScrollAnimation />
      </section>

      {/* About  */}
      <section id="About" className="flex flex-col w-full p-8 gap-9 font-sans h-fit items-center justify-center md:-mt-[10rem]">

        <h1 className="text-4xl md:text-[4rem] text-gray-600 font-bold w-full text-center mb-4 leading-none">
          What Zerocue does for you
        </h1>

        <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#F9F9F9] via-gray-400/85 to-gray-700/85 rounded-2xl w-full">
          {/* #1 */}
          <h1 className="flex text-xl md:text-4xl mt-9 opacity-75 bg-gray-700/65 shadow-xl rounded-2xl p-4 text-center md:w-fit w-3/4">Self Check-In and Check-Out</h1>
          <div className="flex flex-col items-center justify-center lg:flex-row w-full p-4 gap-9 mt-8">
            <div className="flex w-full lg:w-1/2">
              <Animated_Beam />
            </div>
            <div className="flex flex-col w-full lg:w-1/4 items-start justify-center text-md opacity-75">
              <p className="flex flex-col gap-6 text-black/65 text-xl lg:text-3xl">
                <span className="flex text-black text-3xl md:text-5xl">Skip the lines!</span>
                With our self check-in and check-out system,
                you can complete your transactions seamlessly using just your phone.
                Simply scan, pay, and go.
              </p>
            </div>
          </div>

          <div className="flex border border-black opacity-15 m-9"></div>

          {/* #2 */}
          <h1 className="flex text-xl md:text-4xl mt-9 opacity-75 bg-gray-700/65 shadow-xl rounded-2xl p-4 text-center md:w-fit w-3/4">Cloud-Based Inventory Management</h1>
          <div className="flex flex-col items-center justify-center lg:flex-row-reverse w-full p-4 gap-9 mt-8">
            <div className="flex w-full lg:w-1/2">
              <Animated_Beam />
            </div>
            <div className="flex flex-col w-full lg:w-1/4 items-start justify-center text-md opacity-75">
              <p className="flex flex-col gap-6 text-black/65 text-xl lg:text-3xl">
                <span className="flex text-black text-3xl md:text-5xl">Manage your store’s stock from anywhere.</span>
                Our cloud-based inventory management keeps everything updated across all devices,
                so you’ll never miss an item.
              </p>
            </div>
          </div>

          <div className="flex border border-black opacity-15 m-9"></div>

          {/* #3 */}
          <h1 className="flex text-xl md:text-4xl mt-9 opacity-75 bg-gray-700/65 shadow-xl rounded-2xl p-4 text-center md:w-fit w-3/4">POS System with Real-Time Data</h1>
          <div className="flex flex-col items-center justify-center lg:flex-row w-full p-4 gap-9 mt-8">
            <div className="flex w-full lg:w-1/2">
              <Animated_Beam />
            </div>
            <div className="flex flex-col w-full lg:w-1/4 items-start justify-center text-md opacity-75">
              <p className="flex flex-col gap-6 text-black/65 text-xl lg:text-3xl">
                <span className="flex text-black text-3xl md:text-5xl">Real time Tracking</span>
                Track sales, customer behavior, and inventory with real-time data at your POS.
                Manage your business smarter with instant insights and updates on every transaction.
              </p>
            </div>
          </div>

          <div className="flex border border-black opacity-15 m-9"></div>

          {/* #4 */}
          <h1 className="flex text-xl md:text-4xl mt-9 opacity-75 bg-gray-700/65 shadow-xl rounded-2xl p-4 text-center md:w-fit w-3/4">Customer Store Inventory Preview</h1>
          <div className="flex flex-col items-center justify-center lg:flex-row-reverse w-full p-4 gap-9 mt-8">
            <div className="flex w-full lg:w-1/2">
              <Animated_Beam />
            </div>
            <div className="flex flex-col w-full lg:w-1/4 items-start justify-center text-md opacity-75">
              <p className="flex flex-col gap-6 text-black/65 text-xl lg:text-3xl">
                <span className="flex text-black text-3xl md:text-5xl">Check Before You Shop</span>
                See what’s available before visiting any store!
                Browse real-time inventory from your favorite locations and ensure the product you need is in stock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ  */}
      <section className="flex flex-col w-full items-center justify-center p-3">
        <h1 className="flex text-4xl w-full justify-center p-6 font-sans">FAQ</h1>

        <Accordion type="single" collapsible className="w-full md:w-3/4 space-y-1 font-sans">

          {/* 1 */}
          <AccordionItem
            value="item-1"
            className="bg-gray-500 p-2 pl-6 rounded-3xl"
          >
            <AccordionTrigger className="text-lg md:text-2xl opacity-65 text-start text-gray-200">
              What is the purpose of your self check-in and check-out system?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg opacity-60 text-slate-200">
              Our self check-in and check-out system allows customers to complete their purchases quickly and conveniently
              using their mobile devices, reducing wait times and enhancing the overall shopping experience.
            </AccordionContent>
          </AccordionItem>

          {/* 2 */}
          <AccordionItem
            value="item-2"
            className="bg-gray-500 p-2 pl-6 rounded-3xl"
          >
            <AccordionTrigger className="text-lg md:text-2xl opacity-65 text-start text-gray-200">
              How does real-time inventory management work?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg opacity-60 text-slate-200">
              Our cloud-based inventory management system updates stock levels in real-time across all devices.
              This ensures that you have accurate information about product availability at all times, no matter where you are.
            </AccordionContent>
          </AccordionItem>

          {/* 3 */}
          <AccordionItem
            value="item-3"
            className="bg-gray-500 p-2 pl-6 rounded-3xl"
          >
            <AccordionTrigger className="text-lg md:text-2xl opacity-65 text-start text-gray-200">
              Can I access the inventory of any store?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg opacity-60 text-slate-200">
              Yes! Our platform allows customers to view the inventory of any participating store in real time.
              This way, you can check product availability before visiting the store.
            </AccordionContent>
          </AccordionItem>

          {/* 4 */}
          <AccordionItem
            value="item-4"
            className="bg-gray-500 p-2 pl-6 rounded-3xl"
          >
            <AccordionTrigger className="text-lg md:text-2xl opacity-65 text-start text-gray-200">
              What benefits does the POS system provide?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg opacity-60 text-slate-200">
              Our POS system offers real-time data analytics, enabling store owners to track sales, monitor inventory levels,
              and gain insights into customer behavior—all from one central platform.
            </AccordionContent>
          </AccordionItem>

          {/* 5 */}
          <AccordionItem
            value="item-5"
            className="bg-gray-500 p-2 pl-6 rounded-3xl"
          >
            <AccordionTrigger className="text-lg md:text-2xl opacity-65 text-start text-gray-200">
              How often is the inventory updated?
            </AccordionTrigger>
            <AccordionContent className="text-sm md:text-lg opacity-60 text-slate-200">
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
              <a href="mailto:Zerocueindia@gmail.com">
                <h1 className="flex lg:text-2xl text-lg opacity-75">
                  Zerocue.india@gmail.com
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

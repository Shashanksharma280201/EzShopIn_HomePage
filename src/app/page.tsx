import Footer from "@/components/Footer";
import { ScrollAnimation } from "@/components/main_page_components/ScrollAnimation";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Team } from "@/components/main_page_components/Team";


export default function Home() {
  return (
    <>
      <NavBar />

      <section id="Home" className="flex font-mono flex-col  h-fit  w-full">

        {/* top heading */}
        <div className="flex relative flex-col w-full bg-gradient-to-r from-purple-300 to-pink-100 h-screen rounded-3xl lg:rounded-b-full shadow-xl items-center justify-center">
          <div className="flex flex-col bg-transparent space-y-5 w-full md:w-3/4 items-center justify-center p-6">
            <h1 className="flex flex-col font-semibold animate-shake text-5xl md:text-6xl text-center">Join the best experience of <span className="text-gray-500"> offline shopping</span></h1>
            <h1 className="flex text-2xl w-full md:w-3/4 opacity-80 md:text-4xl text-center">Connect with us to have the software integrated in your system</h1>

            <Button>Connect with us</Button>
            <h1 className="flex text-sm md:text-xl opacity-70 text-center">Our team would connect with you as soon as possible</h1>
          </div>
        </div>

        {/* bottom cards  */}
        <div className="flex relative flex-col w-full h-screen items-center justify-center p-6">
          {/* <h1 className="flex font-semibold text-4xl"> what we offer</h1> */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full h-fit p-9">

            <Card className="flex flex-col lg:-mt-[170px] bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full lg:w-1/3 h-fit">
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

            <Card className="flex flex-col z-10 lg:mt-10 bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full lg:w-1/3 h-fit">
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

            <Card className="flex flex-col z-10 lg:-mt-[100px] bg-gradient-to-tl from-yellow-100 to-green-100 shadow-lg z-1 hover:shadow-xl rounded-2xl transition-shadow w-full lg:w-1/3 h-fit">
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

      <section id="About" className="flex flex-col font-medium w-full h-fit p-3">
        <div className="flex flex-col p-7 space-y-8">


          <div className="flex flex-col lg:flex-row bg-green-100 items-center justify-between border-2 border-green-600 p-4 w-full h-fit lg:h-[60vh] rounded-2xl shadow-md">
            <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 h-full p-4 space-y-6">
              <h1 className="flex lg:text-4xl text-green-500 text-2xl">
                No more waiting in a queue for billing
              </h1>
              <h2 className="flex lg:text-xl w-3/4 text-sm opacity-65">
                You can quickly bill your own items using our platform, saving you a lot of time.
                It's an easy and efficient way to handle your purchases.
              </h2>
              <Button className="flex bg-green-400">Know More</Button>
            </div>
            <div className="flex w-3/4 lg:w-1/2 h-3/4 items-center justify-center">
              <img src="images/queue.png" className="flex h-full" alt="queue" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse bg-blue-100 items-center justify-between border-2 border-blue-600 p-4 w-full h-fit lg:h-[60vh] rounded-2xl shadow-md">
            <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 h-full p-4 space-y-6">
              <h1 className="flex lg:text-4xl text-blue-500 text-2xl">
                Choose Your Bill: Paper or Digital, It's Your Call!
              </h1>
              <h2 className="flex lg:text-xl w-3/4 text-sm opacity-65">
                You can track your bills on the app or request a paper bill.
                Easily manage your expenses your way, whether online or offline.
              </h2>
              <Button className="flex bg-blue-400">Know More</Button>
            </div>
            <div className="flex w-full lg:w-1/2 h-full items-center justify-center">
              <img src="images/receipt.gif" className="flex h-full bg-transparent" alt="queue" />
              {/* <video className="video" src="images/receipt.mp4" autoPlay loop muted /> */}
            </div>
          </div>


          <div className="flex flex-col lg:flex-row bg-purple-100 items-center justify-between border-2 border-purple-600 p-4 w-full h-fit lg:h-[60vh] rounded-2xl shadow-md">
            <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 h-full p-4 space-y-6">
              <h1 className="flex lg:text-4xl text-purple-500 text-2xl">
                Scan the barcode to add to cart
              </h1>
              <h2 className="flex lg:text-xl w-full lg:w-3/4 text-sm opacity-65">
                Track your purchases by scanning barcodes and pay online for a quick checkout.
                Simply scan items as you shop and complete your payment digitally when you're done.
              </h2>
              <Button className="flex bg-purple-400">Know More</Button>
            </div>
            <div className="flex w-full lg:w-1/2 h-3/4 items-center justify-center">
              <img src="images/barcode.gif" className="flex h-full" alt="queue" />
            </div>
          </div>


          <div className="flex flex-col lg:flex-row-reverse bg-orange-100 items-center justify-between border-2 border-orange-600 p-4 w-full h-fit lg:h-[60vh] rounded-2xl shadow-md">
            <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 h-full p-4 space-y-6">
              <h1 className="flex lg:text-4xl text-orange-500 text-2xl">
                Easy Inventory Management
              </h1>
              <h2 className="flex lg:text-xl w-full lg:w-3/4 text-sm opacity-65">
                Effortlessly manage your stock with our user-friendly inventory system. Save time,
                reduce errors, and keep track of your inventory with ease.
              </h2>
              <Button className="flex bg-orange-400">Know More</Button>
            </div>
            <div className="flex w-full lg:w-1/2 h-3/4 items-center justify-center">
              <img src="images/warehouse.png" className="flex h-full" alt="queue" />
            </div>
          </div>





        </div>
      </section>

      <section id="Contact" className="flex flex-col h-screen mt-10 l font-mono w-full items-center justify-center font-ubuntu">
        <h1 className="flex text-2xl md:text-4xl w-full md:w-1/2 p-4 mt-10 justify-center text-center font-semibold">Contact us to integrate our software in your stores today</h1>
        <p className="flex text-sm md:text-xl opacity-75 w-full justify-center text-center">For more details on click on the buttons below, feel free to get in touch</p>

        <div className="flex flex-col md:flex-row w-full h-full items-center justify-center gap-5 p-4 pl-9 pr-9">
          {/* contact  */}
          <div className="flex flex-col space-y-7 w-full pb-2 h-fit bg-gradient-to-tl from-yellow-100 to-green-100 rounded-2xl shadow-xl items-center justify-center">
            <h1 className="flex text-3xl">Contact us</h1>
            <div className="flex flex-col w-fit h-fit justify-between items-center p-3">
              <a href="tel:+919591678076">
                <h1 className="flex p-4 text-lg lg:text-2xl opacity-75">+91 9591678076</h1>
              </a>
              <a href="mailto:ezshopinindia@gmail.com">
                <h1 className="flex lg:text-2xl text-lg opacity-75">ezshopinindia@gmail.com</h1>
              </a>
            </div>
          </div>


          {/* Team  */}
          <div className="flex flex-col space-y-8 w-full h-fit pb-4 bg-gradient-to-tr from-yellow-100 to-green-100 rounded-2xl shadow-xl items-center justify-center">
            <h1 className="flex text-3xl">Our Team</h1>
            <Team />
          </div>


        </div>
      </section>


      <Footer />
    </>
  );
}

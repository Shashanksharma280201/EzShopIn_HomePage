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

      <section className="flex bg-gradient-to-b from-white to-gray-200 h-screen  w-full">
        <div className="flex flex-col md:flex-row p-6 items-center justify-center w-full h-full">

          <div className="flex flex-col space-y-7 h-3/4 w-1/2 -mb-9 items-center justify-center">
            <WordFlip />
            <Button>Register</Button>
          </div>

          <div className="flex flex-row items-center justify-center h-3/4 w-1/2 -mb-9 p-5">
            <div className="flex h-[60vh] w-fit">
              <img src="\images\scan.jpeg" alt="image" className="flex rounded-xl" style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
      </section>


      {/* card describing what we provide */}
      <section className="flex flex-col bg-gradient-to-b from-gray-200 to-gray-300 h-screen w-full rounded-b-3xl">
        {/* <div className="flex w-full bg-gray-300 items-center justify-center">
          <VanishInput />
        </div> */}

        <div className="flex flex-col md:flex-row bg-red-300 w-full h-fit p-5">

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

        </div>
      </section>


      <Footer />
    </>
  );
}

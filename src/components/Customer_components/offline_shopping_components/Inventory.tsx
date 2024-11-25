// src/pages/inventory.tsx
"use client"
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import ProductCards from "./ProductCards";
import Footer from "@/components/Footer";

const Inventory = () => {

  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <>



      <section className="flex flex-col h-full">
        <div className="mx-auto w-full md:w-3/4">
          <div className="relative h-56 rounded-b-full md:rounded-b-lg bg-cover bg-center bg-gradient-to-r from-gray-500 via-white to-gray-500 bg-no-repeat shadow-lg">
            <div className="px-4 pt-8 pb-10">
              <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
                <Image
                  className="mx-auto h-auto w-full rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46uKxrR1YsgwH9GoH2CMyrUeZxYqdO_qlrqYgAYjIeQ&s"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
            <div className="max-w-lg">
              <h1 className="text-2xl font-bold text-gray-800">
                {" "}
                Welcome {user?.fullName}
              </h1>
            </div>

            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="flex bg-black text-white">
                    Logout
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      <Link href="/">Continue</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

        </div>



        <main className="flex flex-wrap p-4 bg-transparent justify-center items-center gap-8">

          <ProductCards />

        </main>

      </section>


      <Footer />
    </>
  );
};

export default Inventory;

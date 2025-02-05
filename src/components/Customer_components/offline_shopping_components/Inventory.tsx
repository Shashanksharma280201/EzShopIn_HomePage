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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const Inventory = () => {

  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <>



      <section className="flex flex-col h-full">
        <div className="flex flex-row justify-between bg-gray-700/85 w-full p-5">
          <h1 className="flex text-3xl opacity-85">EzShopIn</h1>
          <div className="flex gap-4 px-4 md:px-9">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex bg-white opacity-50 p-2 rounded-full"><img src="/images/user.svg" alt="user" className="h-5 md:h-8 w-5 md:w-8" /></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
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
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>


        <main className="flex flex-wrap p-2 bg-transparent justify-center items-center gap-8">

          <ProductCards />

        </main>

      </section>


      <Footer />
    </>
  );
};

export default Inventory;

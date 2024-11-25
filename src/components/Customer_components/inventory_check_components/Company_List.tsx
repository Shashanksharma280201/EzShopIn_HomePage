"use client"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import React from 'react'
import Cards from "./cards"
import { Location } from "./location"



const Company_List = () => {
  return (
    <>
      <section id='company_logos' className="flex flex-wrap gap-9 items-center justify-center h-full p-4">


        <Drawer>
          <DrawerTrigger>
            <a href='#' className="flex flex-col items-center w-[8rem] md:w-[15rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
              <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
              <h1 className="flex lg:text-2xl text-xl">Snitch</h1>
            </a>
          </DrawerTrigger>

          <DrawerContent className='h-full overflow-hidden bg-gray-100'>
            <div className="flex w-full flex-row justify-between items-cente p-2 md:px-8 border-b-2 border-gray-400 shadow-xl">

              <DrawerHeader className="flex w-full justify-between gap-2">
                <div className="flex w-3/4 gap-2">
                  <Location />
                  <Button>
                    <Dialog>
                      <DialogTrigger>Category</DialogTrigger>
                      <DialogContent className="flex bg-slate-400/85">
                        <DialogHeader>
                          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                          <DialogDescription>
                            <div className="flex flex-wrap gap-5 items-center justify-center p-4">
                              <a href='#' className="flex items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                  </Button>
                </div>
                <DrawerClose className="flex gap-5">
                  <Button variant="outline" className="flex bg-transparent border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </Button>

                </DrawerClose>
              </DrawerHeader>

            </div>
            <div className="flex w-full items-center justify-center px-5">
              <Input type="Text" placeholder="Enter the item you want to search" className="flex w-3/4 mt-2" />
            </div>
            <Cards />
          </DrawerContent>
        </Drawer>



        <Drawer>
          <DrawerTrigger>
            <a href='#' className="flex flex-col items-center w-[8rem] md:w-[15rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
              <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
              <h1 className="flex lg:text-2xl text-xl">Puma</h1>
            </a>
          </DrawerTrigger>

          <DrawerContent className='h-full overflow-hidden bg-gray-100'>
            <div className="flex w-full flex-row justify-between items-cente p-2 md:px-8 border-b-2 border-gray-400 shadow-xl">

              <DrawerHeader className="flex w-full justify-between gap-2">
                <div className="flex w-3/4 gap-2">
                  <Location />
                  <Button>
                    <Dialog>
                      <DialogTrigger>Category</DialogTrigger>
                      <DialogContent className="flex bg-slate-500 md:w-fit w-3/4 rounded-xl">
                        <DialogHeader>
                          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                          <DialogDescription>
                            <div className="flex flex-wrap gap-5 items-center justify-center p-4">
                              <a href='#' className="flex items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                  </Button>
                </div>
                <DrawerClose className="flex gap-5">
                  <Button variant="outline" className="flex bg-transparent border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </Button>

                </DrawerClose>
              </DrawerHeader>

            </div>
            <div className="flex w-full items-center justify-center px-5">
              <Input type="Text" placeholder="Enter the item you want to search" className="flex w-3/4 mt-2" />
            </div>
            <Cards />
          </DrawerContent>
        </Drawer>



        <Drawer>
          <DrawerTrigger>
            <a href='#' className="flex flex-col items-center w-[8rem] md:w-[15rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
              <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
              <h1 className="flex lg:text-2xl text-xl">Nike</h1>
            </a>
          </DrawerTrigger>

          <DrawerContent className='h-full overflow-hidden bg-gray-100'>
            <div className="flex w-full flex-row justify-between items-cente p-2 md:px-8 border-b-2 border-gray-400 shadow-xl">

              <DrawerHeader className="flex w-full justify-between gap-2">
                <div className="flex w-3/4 gap-2">
                  <Location />
                  <Button>
                    <Dialog>
                      <DialogTrigger>Category</DialogTrigger>
                      <DialogContent className="flex bg-slate-400/85">
                        <DialogHeader>
                          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                          <DialogDescription>
                            <div className="flex flex-wrap gap-5 items-center justify-center p-4">
                              <a href='#' className="flex items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                  </Button>
                </div>
                <DrawerClose className="flex gap-5">
                  <Button variant="outline" className="flex bg-transparent border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </Button>

                </DrawerClose>
              </DrawerHeader>

            </div>
            <div className="flex w-full items-center justify-center px-5">
              <Input type="Text" placeholder="Enter the item you want to search" className="flex w-3/4 mt-2" />
            </div>
            <Cards />
          </DrawerContent>
        </Drawer>



        <Drawer>
          <DrawerTrigger>
            <a href='#' className="flex flex-col items-center w-[8rem] md:w-[15rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
              <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
              <h1 className="flex lg:text-2xl text-xl">Rare Rabbit</h1>
            </a>
          </DrawerTrigger>

          <DrawerContent className='h-full overflow-hidden bg-gray-100'>
            <div className="flex w-full flex-row justify-between items-cente p-2 md:px-8 border-b-2 border-gray-400 shadow-xl">

              <DrawerHeader className="flex w-full justify-between gap-2">
                <div className="flex w-3/4 gap-2">
                  <Location />
                  <Button>
                    <Dialog>
                      <DialogTrigger>Category</DialogTrigger>
                      <DialogContent className="flex bg-slate-400/85">
                        <DialogHeader>
                          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                          <DialogDescription>
                            <div className="flex flex-wrap gap-5 items-center justify-center p-4">
                              <a href='#' className="flex items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                  </Button>
                </div>
                <DrawerClose className="flex gap-5">
                  <Button variant="outline" className="flex bg-transparent border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </Button>

                </DrawerClose>
              </DrawerHeader>

            </div>
            <div className="flex w-full items-center justify-center px-5">
              <Input type="Text" placeholder="Enter the item you want to search" className="flex w-3/4 mt-2" />
            </div>
            <Cards />
          </DrawerContent>
        </Drawer>



        <Drawer>
          <DrawerTrigger>
            <a href='#' className="flex flex-col items-center w-[8rem] md:w-[15rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
              <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
              <h1 className="flex lg:text-2xl text-xl">Soch</h1>
            </a>
          </DrawerTrigger>

          <DrawerContent className='h-full overflow-hidden bg-gray-100'>
            <div className="flex w-full flex-row justify-between items-cente p-2 md:px-8 border-b-2 border-gray-400 shadow-xl">

              <DrawerHeader className="flex w-full justify-between gap-2">
                <div className="flex w-3/4 gap-2">
                  <Location />
                  <Button>
                    <Dialog>
                      <DialogTrigger>Category</DialogTrigger>
                      <DialogContent className="flex bg-slate-400/85">
                        <DialogHeader>
                          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                          <DialogDescription>
                            <div className="flex flex-wrap gap-5 items-center justify-center p-4">
                              <a href='#' className="flex items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                  </Button>
                </div>
                <DrawerClose className="flex gap-5">
                  <Button variant="outline" className="flex bg-transparent border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </Button>

                </DrawerClose>
              </DrawerHeader>

            </div>
            <div className="flex w-full items-center justify-center px-5">
              <Input type="Text" placeholder="Enter the item you want to search" className="flex w-3/4 mt-2" />
            </div>
            <Cards />
          </DrawerContent>
        </Drawer>



        <Drawer>
          <DrawerTrigger>
            <a href='#' className="flex flex-col items-center w-[8rem] md:w-[15rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
              <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
              <h1 className="flex lg:text-2xl text-xl">Zudio</h1>
            </a>
          </DrawerTrigger>

          <DrawerContent className='h-full overflow-hidden bg-gray-100'>
            <div className="flex w-full flex-row justify-between items-cente p-2 md:px-8 border-b-2 border-gray-400 shadow-xl">

              <DrawerHeader className="flex w-full justify-between gap-2">
                <div className="flex w-3/4 gap-2">
                  <Location />
                  <Button>
                    <Dialog>
                      <DialogTrigger>Category</DialogTrigger>
                      <DialogContent className="flex bg-slate-400/85">
                        <DialogHeader>
                          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                          <DialogDescription>
                            <div className="flex flex-wrap gap-5 items-center justify-center p-4">
                              <a href='#' className="flex items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                  </Button>
                </div>
                <DrawerClose className="flex gap-5">
                  <Button variant="outline" className="flex bg-transparent border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </Button>

                </DrawerClose>
              </DrawerHeader>

            </div>
            <div className="flex w-full items-center justify-center px-5">
              <Input type="Text" placeholder="Enter the item you want to search" className="flex w-3/4 mt-2" />
            </div>
            <Cards />
          </DrawerContent>
        </Drawer>


        <Drawer>
          <DrawerTrigger>
            <a href='#' className="flex flex-col items-center w-[8rem] md:w-[15rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
              <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
              <h1 className="flex lg:text-2xl text-xl">Zara</h1>
            </a>
          </DrawerTrigger>

          <DrawerContent className='h-full overflow-hidden bg-gray-100'>
            <div className="flex w-full flex-row justify-between items-cente p-2 md:px-8 border-b-2 border-gray-400 shadow-xl">

              <DrawerHeader className="flex w-full justify-between gap-2">
                <div className="flex w-3/4 gap-2">
                  <Location />
                  <Button>
                    <Dialog>
                      <DialogTrigger>Category</DialogTrigger>
                      <DialogContent className="flex bg-slate-400/85">
                        <DialogHeader>
                          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                          <DialogDescription>
                            <div className="flex flex-wrap gap-5 items-center justify-center p-4">
                              <a href='#' className="flex items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                              <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
                                <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
                              </a>
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>

                  </Button>
                </div>
                <DrawerClose className="flex gap-5">
                  <Button variant="outline" className="flex bg-transparent border-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  </Button>

                </DrawerClose>
              </DrawerHeader>

            </div>
            <div className="flex w-full items-center justify-center px-5">
              <Input type="Text" placeholder="Enter the item you want to search" className="flex w-3/4 mt-2" />
            </div>
            <Cards />
          </DrawerContent>
        </Drawer>



























      </section>
    </>
  )
}

export default Company_List
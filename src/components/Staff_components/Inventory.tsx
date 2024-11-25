import { Products } from '@/Data/Products'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"



interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    quantity: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

const Inventory = () => {

    return (
        <>
            <div className="flex flex-col md:flex-row bg-gray-300 justify-between space-x-4 md:space-x-0 p-4">
                <div className="flex w-full lg:w-1/2 space-x-5 p-4">
                    <Input placeholder='Enter Name / Barcode' />
                    <Button>Search</Button>
                </div>
            </div>
            <main className="grid grid-cols gap-5 bg-gray-300 w-full p-4 items-center justify-center grid-cols-2 sm:px-1 lg:grid-cols-6 lg:px-5">
                {Products.map((product:any) => (
                    <div className=" w-full overflow-hidden bg-white rounded-lg shadow-2xl">
                        <div key={product.id} className="relative w-full overflow-hidden rounded-lg shadow-md">
                            <a className="flex h-[100px] items-center justify-center overflow w-full p-1">
                                <img className="rounded-t-lg w-fit" src={product.images[0]} alt="product image" style={{ width: "fit", height: "100%" }} />
                            </a>
                            <div className="mt-4">
                                <a>
                                    <h5 className="text-sm md:text-md px-5 pb-5 font-semibold tracking-tight text-slate-900">{product.title}</h5>
                                </a>
                                <div className="flex gap-5 bg-gray-200 w-full p-3 items-center justify-between">
                                    <p className="flex flex-col">
                                        <span className="md:text-xl text-sm font-bold text-slate-900">Rs {Math.abs(product.price - (product.price * product.discountPercentage / 100)).toFixed(1)}</span>
                                        <span className="text-sm opacity-75 text-slate-900 line-through">Rs {product.price}</span>
                                    </p>
                                    <Dialog>
                                        <DialogTrigger className='flex shadow-2xl'>
                                            <button className="flex items-center rounded-md bg-slate-900 p-2 text-center text-xs md:text-sm font-medium text-white hover:bg-gray-700 focus:outline-none">
                                                Details
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Product Details</DialogTitle>
                                                <DialogDescription>
                                                    Permission to make any changes is not given.
                                                    Contact the Head Office.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="grid gap-4 py-4 justify-center items-center">

                                                <div className="flex h-[100px] items-center justify-center w-full">
                                                    <img className="rounded-t-lg w-fit items-center justify-center" src={product.images[0]} alt="product image" style={{ width: "fit", height: "100%" }} />
                                                </div>

                                                <div className=" items-center">
                                                    <Label htmlFor="name" className="flex w-full text-xl">
                                                        Name: {product.title}
                                                    </Label>

                                                </div>
                                                <div className=" items-center">
                                                    <Label htmlFor="Barcode" className="flex w-full text-xl">
                                                        Barcode no:
                                                    </Label>

                                                </div>
                                                <div className=" items-center">
                                                    <Label htmlFor="Cost" className="flex w-full text-xl">
                                                        Cost: {product.price}
                                                    </Label>

                                                </div>
                                                <div className=" items-center">
                                                    <Label htmlFor="Discount" className="flex w-full text-xl">
                                                        Discount: {product.discountPercentage}
                                                    </Label>
                                                </div>
                                                <div className=" items-center">
                                                    <Label htmlFor="Quantity" className="flex w-full text-xl">
                                                        Quantity: {product.stock}
                                                    </Label>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}



            </main >
        </>
    )
}

export default Inventory
// import Products from '@/components/Products'
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import ProductCards from './ProductCards'



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
            <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl m-3 bg-gray-700/85 justify-between space-x-4 md:space-x-0 p-4">
                <div className="flex w-full lg:w-1/2 space-x-5 p-4">
                    <Input placeholder='Enter Name / Barcode' />
                    <Button>Search</Button>
                </div>

                <div className="flex flex-row gap-4 p-4 justify-center items-center">

                    <Dialog>
                        <DialogTrigger>
                            {/* <Button>Add new item</Button> */}
                            <img src="/images/Shop/add.svg" alt="" className='flex w-10 h-10 bg-white p-2 rounded-full' />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">

                                <div className="flex items-center justify-center w-full">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>

                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="Barcode" className="text-right">
                                        Barcode no.
                                    </Label>
                                    <Input
                                        id="Barcode"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="Cost" className="text-right">
                                        Cost
                                    </Label>
                                    <Input
                                        id="Cost"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="Quantity" className="text-right">
                                        Quantity
                                    </Label>
                                    <Input
                                        id="Quantity"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Save changes</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Stores" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Overall">Overall</SelectItem>
                            <SelectItem value="A">A</SelectItem>
                            <SelectItem value="B">B</SelectItem>
                            <SelectItem value="C">C</SelectItem>
                            <SelectItem value="D">D</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>


            <main className="flex flex-wrap gap-4 md:gap-8 w-full p-3 md:p-7 items-center justify-center">
                {/* <Products /> */}

                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />
                <ProductCards />


            </main >
        </>
    )
}

export default Inventory
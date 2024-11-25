import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const page = () => {
    return (
        <>
            <section className="flex flex-col gap-6 bg-gradient-to-br from-green-200 via-yellow-200 to-orange-300 h-screen w-full items-center justify-center">
                {/* Company name, User name, company number, location of HQ or the main shop  */}
                <h1 className="flex text-2xl md:text-5xl opacity-70">Register your store</h1>
                <div className="flex flex-col p-3 gap-5 bg-gray-400 w-1/2 h-1/2 shadow-xl rounded-xl">
                    <Input type="text" placeholder='Company Name' className='flex p-4 text-white bg-gray-800 rounded-xl border-none' />
                    <Input type="text" placeholder='User Name' className='flex p-4 text-white bg-gray-800 rounded-xl border-none' />
                    <Input type="number" placeholder='Register Number' className='flex p-4 text-white bg-gray-800 rounded-xl border-none' />
                    <Input type="text" placeholder='Location' className='flex p-4 text-white bg-gray-800 rounded-xl border-none' />
                    <div className="flex  justify-end p-5">
                        <Button>Register</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page
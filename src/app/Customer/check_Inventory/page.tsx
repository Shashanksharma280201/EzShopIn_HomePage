import { Button } from '@/components/ui/button'
import React from 'react'
import Customer_Navbar from '@/components/Customer_components/inventory_check_components/Customer_Navbar'

const page = () => {
    return (
        <>
            <nav className='flex w-full z-10 p-2 bg-transparent items-center justify-between'>
                <div className="flex p-3 text-3xl">
                    EzShop-In
                </div>
                {/* <Button>Back</Button> */}
            </nav>

            <Customer_Navbar />
        </>
    )
}

export default page
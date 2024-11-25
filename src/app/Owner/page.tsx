
import React from 'react'
import Link from "next/link"
import Owner_Navbar from '../../components/shop-owner_components/Owner_Navbar'

const page = () => {
    // const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            < nav className="bg-gray-500 border-gray-200 dark:bg-gray-900" >
                <div className="flex flex-wrap justify-between items-center mx-auto w-full p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Zerocue</span>
                    </div>
                </div>
            </nav>

            <Owner_Navbar />

        </>
    )
}

export default page





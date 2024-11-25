
import Link from 'next/link'
import Staff_Navbar from '../../components/Staff_components/Staff_Navbar';



const page = () => {

    return (
        <>
            < nav className="bg-gray-500 border-gray-200 dark:bg-gray-900" >
                <div className="flex flex-wrap justify-between items-center mx-auto w-full p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">Zerocue</span>
                    </div>
                </div>
            </nav>


            <Staff_Navbar />

        </>
    )
}

export default page





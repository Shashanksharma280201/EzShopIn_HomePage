import React from 'react'

const ProductCards = () => {
    return (
        <>
            <div className="flex flex-col bg-gray-700 hover:bg-gray-800 text-white rounded-xl shadow-xl hover:shadow-2xl transition-all delay-100 h-[15rem] w-[9rem] md:h-[16rem] md:w-[12rem]">
                <img src="/images/barcode.jpg" alt="product image" className='flex h-full w-full rounded-t-xl' style={{ width: "100%", height: "100%" }} />
                <div className="flex flex-col p-2">
                    <h1 className="flex w-full text-sm md:text-2xl justify-center">Polo T-Shirt</h1>
                    <div className="flex flex-col md:flex-row justify-between">
                        <h1 className="flex opacity-60 text-sm">Rs 2000</h1>
                        <h1 className="flex opacity-60 text-sm">12 left</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCards
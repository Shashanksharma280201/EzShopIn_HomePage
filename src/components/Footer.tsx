import React from 'react'


const Footer = () => {
    return (
        <>
            < footer className="block bg-gray-400 opacity-75 rounded-3xl m-4 shadow-xl z-0">
                <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
                    <div className="flex-row flex justify-between max-[767px]:flex-col max-[767px]:items-start">
                        <div className="w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:">
                            <h2 className="font-bold text-3xl md:text-5xl">EzShopIn</h2>
                            <h2 className="flex text-xl opacity-55">A new way of shopping</h2>
                        </div>
                        <div className="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]: max-[767px]:mt-8">
                            <div className="mb-4 flex max-w-[272px] items-center gap-5 justify-center">
                                <div className='flex justify-center items-center w-[20px]'>
                                    <a href="#">
                                        <img src="images\facebook.svg" alt="instagram" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                    </a>
                                </div>
                                <div className='flex justify-center items-center w-[22px]'>
                                    <a href="#">
                                        <img src="images\instagram.svg" alt="instagram" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                    </a>
                                </div>
                                <div className='flex justify-center items-center w-[25px]'>
                                    <a href="#">
                                        <img src="images\linkedin.svg" alt="instagram" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                    </a>
                                </div>
                                <div className='flex justify-center items-center w-[25px]'>
                                    <a href="#">
                                        <img src="images\twitter.svg" alt="instagram" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                    </a>
                                </div>
                            </div>
                            <div className="mb-4 flex max-w-[272px] items-start justify-start">
                                <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944119e6cf76_EnvelopeSimple-2.svg" alt="" className="inline-block mr-3" />
                                <p className="text-[#636262] max-[479px]:text-sm">ezshopinindia@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-14 w-full [border-bottom:1.7px_solid_rgb(0,_0,_0)] mt-16 opacity-40">
                    </div>
                    <div className="flex-row flex justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
                        <div className="font-semibold max-[991px]: max-[479px]:mb-4 max-[991px]:py-1 text-center sm:text-center">
                            <a href="#Home" className="inline-block font-normal text-[#636262] transition hover:text-[#5b86b8] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">Home</a>
                            <a href="#About" className="inline-block font-normal text-[#636262] transition hover:text-[#5b86b8] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">About</a>
                            <a href="#Pricing" className="inline-block font-normal text-[#636262] transition hover:text-[#5b86b8] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">Pricing</a>
                            <a href="#Team" className="inline-block font-normal text-[#636262] transition hover:text-[#5b86b8] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">Team</a>
                            <a href="#FAQ" className="inline-block font-normal text-[#636262] transition hover:text-[#5b86b8] sm:pr-6 lg:pr-12 py-1.5 sm:py-2 pr-6">FAQ</a>
                        </div>
                    </div>
                </div>
            </footer >


        </>
    )

}

export default Footer;
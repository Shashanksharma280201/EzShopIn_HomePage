import React from 'react'
import Product_cards from './Product_cards'

const Cards = () => {
  return (
    <>
      <section className="flex flex-row overflow-auto w-full p-2">

        {/* filter for what you want  */}
        {/* <div className="flex shadow-2xl overflow-scroll flex-col gap-3 p-4 bg-slate-400/55 rounded-2xl items-center">
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
          <a href='#' className="flex flex-col items-center w-[4rem] md:w-[6rem] h-full p-4 shadow-lg rounded-2xl bg-orange-400 hover:shadow-2xl delay-100 transition-all">
            <img src="/images/home.svg" alt="company logo" style={{ width: "100%", height: "100%" }} />
          </a>
        </div> */}

        {/* Product cards  */}
        <div className="flex flex-wrap gap-9 p-3 w-full items-center justify-center overflow-scroll delay-100 transition-all">
          <Product_cards />

        </div>


      </section>
    </>
  )
}

export default Cards
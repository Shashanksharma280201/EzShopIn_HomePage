"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useAtom } from "jotai";
import { cartAtom, cartItemValueAtom } from "@/lib/atoms";
// import { Product, CartItem } from "@/types";
import { useUser } from "@clerk/nextjs";
import useDebounce from "@/app/hooks/useDebounce";

// Define the types
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}


export interface CartItem {
  product: Product;
  quantity: number;
}

const Products = () => {
  const [search, setSearch] = React.useState<string>("");
  const [cartItems, setCartItems] = useAtom(cartAtom);
  const [totalCartValue] = useAtom(cartItemValueAtom);
  const [products, setProducts] = React.useState<Product[]>([]);
  const [filteredData, setFilteredData] = React.useState<Product[]>([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/api/products");
    const data = await response.json();
    setProducts(data);
    setFilteredData(data);
  };
  React.useEffect(() => {
    fetchProducts();
  }, []);

  const handleResetProducts = () => {
    setFilteredData(products);
  };

  function addProductToCart(product: Product) {
    const currentCartItem = cartItems.find(
      (cartItem) => cartItem.product.id === product.id
    );
    if (currentCartItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.product.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
      return;
    }
    setCartItems((prevValue: any) => [
      ...prevValue,
      { product: product, quantity: 1 },
    ]);
  }

  const { user } = useUser();

  if (!user) {
    return <div>User not logged in</div>;
  }
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePriceFilter = () => {
    const maxValue = inputRef.current
      ? parseFloat(inputRef.current.value)
      : 4000;
    console.log(maxValue);
    const newData = products.filter(
      (product) =>
        parseFloat(((product.price * 85 * 45) / 100).toFixed(2)) <= maxValue
    );
    setFilteredData(newData);
    console.log(filteredData);
  };

  const handleSortUp = () => {
    const newData = [...filteredData].sort(
      (a, b) => (a.price * 85 * 45) / 100 - (b.price * 85 * 45) / 100
    );
    setFilteredData(newData);
  };

  const handleSortDown = () => {
    const newData = [...filteredData].sort(
      (a, b) => (b.price * 85 * 45) / 100 - (a.price * 85 * 45) / 100
    );
    setFilteredData(newData);
  };

  // SEARCHING FUNCTION
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedSearch(e.target.value);
  };

  const debouncedSearch = useDebounce((value: string) => {
    const filteredProducts = products.filter(
      (product: Product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      // .filter function return type is boolean
    );
    setFilteredData(filteredProducts);
  }, 300);

  return (
    <div className="m-auto max-w-[90vw] grid grid-cols gap-5 bg-gray-300 w-full p-4 items-center justify-center grid-cols-2 sm:px-1 lg:grid-cols-4 lg:px-5">
      <div className="filters min-w-[15vw] border-2 border-red-700 ">
        <p className="text-center font-bold">FILTERS:</p>

        <div className="price">
          {"Min"}
          <input
            type="range"
            min={100}
            max={5000}
            name=""
            id=""
            ref={inputRef}
          />
          {"Max"}
          <div className="flex gap-5">
            <button
              onClick={handlePriceFilter}
              className="bg-black text-white rounded-md p-4"
            >
              Filter
            </button>
            <button
              onClick={handleResetProducts}
              className="bg-black text-white rounded-md p-4"
            >
              Reset
            </button>
          </div>
        </div>
        <div className="w-20 sort mt-10 flex justify-around gap-4">
          <button
            className="bg-black text-white rounded-md p-4"
            onClick={handleSortUp}
          >
            SORT Up
          </button>
          <button
            className="bg-black text-white rounded-md p-4"
            onClick={handleSortDown}
          >
            SORT down
          </button>
        </div>
      </div>
      {/* SEARCH BAR */}
      <h3 className="text-2xl">Search for products</h3>
      <input
        type="text"
        className="w-[40vw] text-black rounded-md p-2 my-3"
        placeholder="Search for products"
        value={search}
        onChange={handleSearch}
      />
      <button
        onClick={handleResetProducts}
        className="bg-black text-white rounded-md p-4"
      >
        Reset
      </button>
      {filteredData.map((product, i) => (
        <div className="flex flex-col relative h-full" key={i}>
          <div className="flex-grow bg-white rounded-lg shadow-2xl h-[54vh] w-[20vw] p-3">
            <div
              key={product.id}
              className="relative w-full rounded-lg h-64 shadow-md p-4"
            >
              <Image
                className="cursor-pointer rounded-t-lg w-fit items-center justify-center m-auto hover:scale-105 transform transition duration-300 ease-in-out"
                src={product.images[0]}
                alt="product image"
                width={400}
                height={200}
                style={{
                  width: "70%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
              <div className="flex flex-col h-full mt-4">
                <h5 className=" text-left text-sm md:text-md p-5 font-semibold tracking-tight text-slate-900">
                  {product.title}
                </h5>
              </div>
            </div>
          </div>
          <div className="flex absolute bottom-0 h-22 rounded-lg rounded-tr-none rounded-tl-none bg-gray-200 w-[102.1%] p-3 items-center justify-between">
            <p className="flex flex-col">
              <span className="md:text-xl text-sm font-bold text-slate-900">
                Rs {((product.price * 85 * 45) / 100).toFixed(2)}
              </span>
              <span className="text-sm opacity-75 text-slate-900 line-through">
                Rs {product.price * 45}
              </span>
            </p>
            <button
              onClick={() => addProductToCart(product)}
              className="flex items-center rounded-md bg-slate-900 p-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 sm:hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

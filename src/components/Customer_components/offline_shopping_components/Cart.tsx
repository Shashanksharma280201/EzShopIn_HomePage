"use client";

import Footer from "@/components/Footer";
import { cartAtom, cartItemValueAtom, cartItemQuantityAtom } from "@/lib/atoms";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useAtomValue, useSetAtom } from "jotai";
import { Product, CartItem } from "@/types";

const Cart = () => {
  const cartItems = useAtomValue(cartAtom);
  const cartItemValue = useAtomValue(cartItemValueAtom);
  const cartItemQuantity = useAtomValue(cartItemQuantityAtom);
  const setCartItems = useSetAtom(cartAtom);

  const [shippingCost, setShippingCost] = useState(0);

  React.useEffect(() => {
    if (cartItems.length === 0) {
      setShippingCost(0);
    } else {
      setShippingCost(8);
    }
  }, [cartItems]);

  const incrementQuantity = (productId: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productId: number) => {
    setCartItems((items) =>
      items.reduce((updatedItems, item) => {
        if (item.product.id === productId) {
          const newQuantity = item.quantity - 1;
          if (newQuantity > 0) {
            return [...updatedItems, { ...item, quantity: newQuantity }];
          } else {
            return updatedItems;
          }
        } else {
          return [...updatedItems, item];
        }
      }, [] as typeof items)
    );
  };
  

  const removeItem = (productId: number) => {
    setCartItems((items) =>
      items.filter((item) => item.product.id !== productId)
    );
  };

  const { user } = useUser();
  const [Items, setItems] = useState(null); // Initialize as null or an appropriate type

  if (!user) {
    return <div>User not logged in</div>;
  }

  const addCartItems = async (e:any) => {
    e.preventDefault();

    // Create the items to send
    const userItems = {
      Name: user?.fullName,
      Number: user?.phoneNumbers,
      cartItems,
    };

    try {
      // Log the data you're about to send
      console.log('Data to send:', userItems);

      // Use userItems directly instead of relying on state
      const response = await fetch('/api/TempFile/Push', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userItems), // Send directly
      });

      if (response.ok) {
        console.log('Product added successfully');
        return({})
      } else {
        console.error('Error while adding product in the database');
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <>
      <section className="h-screen flex flex-col w-full bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>

          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="-my-8">
                    {cartItems.map((item) => (
                      <li
                        key={item.product.id}
                        className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                      >
                        <div className="shrink-0">
                          <img
                            className="h-[20vh] w-24 max-w-full rounded-lg object-cover"
                            src="/images/home.svg"
                            alt="product image"
                            style={{ width: "fit", height: "100%" }}
                          />
                        </div>

                        <div className="relative flex flex-1 flex-col justify-between">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">
                                {item.product.title}
                              </p>
                            </div>

                            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                <span className="text-lg font-normal text-gray-400">
                                  Rs
                                </span> {item.product.price.toFixed(2)}
                              </p>

                              <div className="sm:order-1">
                                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                  <button
                                    className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                    onClick={() =>
                                      decrementQuantity(item.product.id)
                                    }
                                  >
                                    -
                                  </button>
                                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                    {item.quantity}
                                  </div>
                                  <button
                                    className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                    onClick={() =>
                                      incrementQuantity(item.product.id)
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button
                              type="button"
                              className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                              onClick={() => removeItem(item.product.id)}
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-b py-2">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">
                      <span className="text-lg font-normal text-gray-400">
                        Rs
                      </span> {cartItemValue.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">
                      <span className="text-lg font-normal text-gray-400">
                        Rs
                      </span> {shippingCost.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-lg font-normal text-gray-400">
                      Rs
                    </span>{" "}
                    {(cartItemValue + shippingCost).toFixed(2)}
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={addCartItems}
                    className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Payment
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Cart;

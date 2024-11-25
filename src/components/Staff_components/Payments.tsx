"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  quantity: number;
}

interface Item {
  id: string; // Unique identifier for the item
  name: string;
  number: string; // Phone number as string
  quantity: number;
  cartItems: CartItem[];
}

export default function Payments() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    GetItems();
  }, []);

  const DeleteItem = async (itemId: string) => {
    try {
      const response = await fetch("/api/TempFile/Delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: itemId }), // Delete by ID
      });

      if (response.ok) {
        console.log(`Item with ID "${itemId}" deleted successfully`);
        GetItems(); // Refresh items after deletion
      } else {
        const errorData = await response.json();
        console.error(`Failed to delete item with ID "${itemId}":`, errorData.error || response.statusText);
      }
    } catch (error) {
      console.error(`Error deleting item with ID "${itemId}":`, error);
    }
  };

  const GetItems = async () => {
    try {
      const response = await fetch("/api/TempFile/Pull", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        if (!data.items || data.items.length === 0) {
          console.log("Data is empty");
          setItems([]);
        } else {
          const mappedItems = data.items.map((item: any) => ({
            id: item.id, // Map the unique ID
            name: item.Name,
            number: item.Number?.[0]?.phoneNumber || "N/A",
            quantity: item.cartItems?.length || 0,
            cartItems:
              item.cartItems?.map((cartItem: any) => ({
                id: cartItem.product?.id || "N/A",
                title: cartItem.product?.title || "N/A",
                price: cartItem.product?.price || 0,
                description: cartItem.product?.description || "No description",
                image: cartItem.product?.images?.[0] || "",
                quantity: cartItem.quantity || 0,
              })) || [],
          }));
          setItems(mappedItems);
        }
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function mappedData() {
    if (items.length > 0) {
      return (
        <ul>
          {items.map((item) => (
            <li className="flex p-4" key={item.id}>
              <Dialog>
                <DialogTrigger className="flex border md:h-[20vh] bg-gray-800 text-white shadow-lg w-full hover:shadow-2xl rounded-xl p-5">
                  <div className="flex flex-col text-start h-full justify-between w-3/4">
                    <label className="flex text-lg lg:text-xl">{item.name}</label>
                    <label className="flex text-sm lg:text-xl opacity-70">{item.number}</label>
                  </div>
                  <div className="flex w-1/4">
                    <label className="flex text-md lg:text-3xl w-full opacity-75 justify-center">
                      Rs{" "}
                      {item.cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)}
                    </label>
                  </div>
                </DialogTrigger>
                <DialogContent className="flex flex-col overflow-auto h-3/4">
                  <DialogHeader>
                    <DialogTitle className="flex mt-5 p-1">
                      Items shopped by {item.name} are:
                    </DialogTitle>
                    <DialogDescription className="flex flex-col p-5 h-full">
                      <ul className="-my-8">
                        {item.cartItems.length > 0 ? (
                          item.cartItems.map((cartItem, index) => (
                            <li
                              key={index}
                              className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                            >
                              <div className="flex flex-col bg-gray-800 text-white text-opacity-70 items-center rounded-xl p-2">
                                <div className="flex w-1/2 h-full">
                                  <img
                                    src={cartItem.image}
                                    alt={cartItem.title}
                                    style={{ width: "100%", height: "100%" }}
                                  />
                                </div>
                                <div className="flex flex-col w-full p-1">
                                  <p>Item ID: {cartItem.id}</p>
                                  <p>Item Name: {cartItem.title}</p>
                                  <p>Price: {cartItem.price}</p>
                                  <p>Quantity: {cartItem.quantity}</p>
                                </div>
                              </div>
                            </li>
                          ))
                        ) : (
                          <li>No items found in cart</li>
                        )}
                      </ul>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose>
                      <Button onClick={() => DeleteItem(item.id)} type="button" variant="secondary">
                        Delete
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <div className="flex justify-center items-center text-2xl w-full">
          No Customers have shopped anything yet!!
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col w-full bg-gray-300 h-auto items-center">
      <div className="flex w-full lg:w-1/2 space-x-5 p-4">
        <Input placeholder="Enter Name / Barcode" />
        <Button onClick={GetItems}>Refresh</Button>
      </div>

      <div className="flex flex-col lg:w-1/2 w-full p-4 space-y-5">{mappedData()}</div>
    </div>
  );
}

// src/components/ProductCards.tsx
import React, { useState, useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { cartAtom } from '@/lib/atoms';
import { Products } from '@/Data/Products';
import { Input } from '@/components/ui/input';

// Define shared types here
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


const ProductCards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(Products); // Use static product data
    const setCartItems = useSetAtom(cartAtom);

    const addToCart = (product: Product) => {
        setCartItems((prevCartItems) => {
            const existingItem = prevCartItems.find(item => item.product.id === product.id);
            if (existingItem) {
                return prevCartItems.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCartItems, { product, quantity: 1 }];
            }
        });
    };

    return (
        <>

            <Input placeholder="Search" className="bg-gray-200 text-white rounded-lg p-2 w-full mx-4 md:w-1/2" />
            <div className="flex flex-wrap items-center justify-center gap-4 p-4">

                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex flex-col font-sans bg-gray-700 hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all delay-100 h-fit w-[9rem] md:w-[12rem]"
                    >
                        <img
                            src={product.images[0] || '/images/barcode.jpg'}
                            alt={product.title}
                            className="flex h-full bg-slate-400 w-full rounded-t-xl"
                            style={{ objectFit: "cover" }}
                        />
                        <div className="flex flex-col gap-1 p-2 h-fit bg-gray-700 rounded-b-xl">
                            <h1 className="flex w-full text-sm md:text-sm justify-center">{product.title.slice(0, 12)}</h1>
                            <div className="flex flex-col md:flex-row justify-between">
                                <h1 className="flex opacity-60 text-sm">Rs {product.price}</h1>
                                <h1 className="flex opacity-60 text-sm">{product.category}</h1>
                            </div>
                            <button
                                type="button"
                                onClick={() => addToCart(product)}
                                className="group inline-flex w-full items-center justify-center rounded-md bg-white p-2 text-md font-semibold text-black transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-200"
                            >
                                Add
                                <img
                                    src="/images/Shop/add_to_cart.svg"
                                    className="group-hover:ml-4 ml-8 h-5 w-5 transition-all"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductCards;

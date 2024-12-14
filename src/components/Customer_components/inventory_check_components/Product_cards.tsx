import React, { useState, useEffect } from 'react';
import { Products } from '@/Data/Products';

// Define the interface for the product type
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

const Product_cards: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    // useEffect(() => {
    //     // Fetch data from the API
    //     fetch('https://api.escuelajs.co/api/v1/products')
    //         .then((response) => response.json())
    //         .then((data: Product[]) => setProducts(data.slice(0, 15))) // Limit to 15 items
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);

    return (
        <>
            {products.map((product) => (
                <div key={product.id} className="flex flex-wrap font-sans bg-gray-700 hover:bg-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all delay-100 h-fit w-[10rem] md:w-[12rem]">
                    <img
                        src={product.images[0] || '/images/barcode.jpg'}
                        alt="product image"
                        className='flex h-full w-full rounded-t-xl'
                        style={{ width: "100%", height: "100%" }}
                    />
                    <div className="flex flex-col w-full gap-1 p-2">
                        <div className="flex flex-row md:flex-row justify-between">
                            <h1 className="flex opacity-60 text-sm">Rs {product.price}</h1>
                            <h1 className="flex opacity-60 text-sm">10 left</h1> {/* Display quantity if available */}
                        </div>
                        <h1 className="flex w-full text-sm opacity-75 justify-start">{product.title.slice(0, 20)}</h1>
                        <button
                            type="button"
                            className="group inline-flex w-full items-center justify-center rounded-md bg-white p-2 text-lg font-sans text-black transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-200"
                        >
                            Book
                            <img
                                src="/images/Shop/add_to_cart.svg"
                                className="group-hover:ml-4 ml-8 h-5 w-5 transition-all"
                            />
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Product_cards;

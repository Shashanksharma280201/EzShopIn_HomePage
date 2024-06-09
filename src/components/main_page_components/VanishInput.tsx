"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export function VanishInput() {
    const placeholders = [
        "Cargo Pants",
        "Chunky Sneakers",
        "Boxy T-shirts",
        "Sweatshirts and Hoodies",
        "Track Pants and Joggers",
        "Baggy Jeans",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
    return (
        <div className=" flex flex-col justify-center items-center px-4 space-y-4">
            <h2 className="sm:mb-10 text-center sm:text-3xl font-semibold text-black">
                You can search for your favourite item on EzShopIn
            </h2>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
}

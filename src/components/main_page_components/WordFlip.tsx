import React from "react";
import { FlipWords } from "../ui/flip-words";

export function WordFlip() {
    const words = ["better", "easier", "faster", "effortless"];

    return (
        <div className="flex justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-center text-neutral-600 dark:text-neutral-400">
                Make your Shopping
                <FlipWords words={words} /> <br />
                with EzShopIn
            </div>
        </div>
    );
}

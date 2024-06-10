"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function ScrollEffect() {
    return (
        <TracingBeam className="px-6 bg-gradient-to-r from-purple-300 to-pink-100 rounded-xl shadow-xl">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className={twMerge("text-xl mb-4")}>
                            {item.title}
                        </p>

                        <div className="text-md prose prose-sm items-center justify-center dark:prose-invert">
                            {item?.image && (
                                <Image
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="500"
                                    width="500"
                                    className="rounded-lg mb-10 object-cover w-full"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}

const dummyContent = [
    {
        title: "How to shop at our platform",
        description: (
            <>
                <p>
                    <b>Check-In:</b> Upon entering your preferred store,
                    simply open the EzShopIn app and check-in to let the store staff know you're here.
                    This allows them to provide you with personalized assistance and ensures a seamless shopping experience.
                </p>
                <p>
                    <b>Browse and Shop:</b> Feel free to browse the aisles at your own pace, knowing that our live inventory
                    updates are keeping track of stock levels in real-time.
                    If you have any questions or need assistance, our friendly staff is always ready to help.
                </p>
                <p>
                    <b>Easy Check-Out:</b> Once you've found everything you need, head to the designated check-out area
                    where you can conveniently scan your items using the EzShopIn app.
                    Say goodbye to long lines and hello to a faster, more efficient way to pay.
                </p>
            </>
        ),
        badge: "For Customers",
        image:
            "/images/scan.jpeg",
    },
    {
        title: "How the Store or the brand can use our platform",
        description: (
            <>
                <p>
                    <b>Live Inventory Updates:</b> Our system not only benefits you, but it also provides invaluable
                    insights for store staff and our company. With live inventory updates, we can ensure that popular
                    items are always in stock and quickly replenished when necessary.
                </p>
                <p>
                    <b>Security Updates :</b>
                    Our system is engineered to continuously track which customers purchase specific items,
                    enabling us to maintain a loyalty check to ensure that customers who check out have previously purchased
                    the same products they are billing for.
                </p>
            </>
        ),
        badge: "For the Store",
        image:
            "/images/inventory_check.jpg",
    },
    {
        title: "Unlock the benefits of a new way of shopping",
        description: (
            <>
                <p>
                    Ready to simplify your shopping experience? Shop at your favourite store using EzShopIn app today and
                    start enjoying the benefits of our easy check-in and check-out system with live inventory updates.
                </p>
            </>
        ),
        badge: "Join EzshopIn",
        image:
            "/images/checkin_checkout.jpg",
    },
];

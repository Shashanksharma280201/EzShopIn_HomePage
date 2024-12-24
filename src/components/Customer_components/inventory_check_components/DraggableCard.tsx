import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useAnimation, PanInfo } from 'framer-motion';
import Image from 'next/image';

interface CardData {
    id: number;
    image: string;
    title: string;
    description: string;
}

const cardData: CardData[] = [
    {
        id: 1,
        image: "/images/facebook.svg",
        title: "Nature",
        description: "Breathtaking landscapes and natural wonders."
    },
    {
        id: 2,
        image: "/images/instagram.svg",
        title: "Urban",
        description: "Vibrant cityscapes and urban architecture."
    },
    {
        id: 3,
        image: "/images/scan.svg",
        title: "Technology",
        description: "Cutting-edge gadgets and innovations."
    },
    {
        id: 4,
        image: "/images/cart.svg",
        title: "Cuisine",
        description: "Delicious dishes from around the world."
    }
];

const DraggableCard: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rightSwipes, setRightSwipes] = useState(0);
    const [showAlert, setShowAlert] = useState(false);
    const motionValue = useMotionValue(0);
    const rotateValue = useTransform(motionValue, [-200, 200], [-10, 10]);
    const opacityValue = useTransform(
        motionValue,
        [-200, -150, 0, 150, 200],
        [0.5, 1, 1, 1, 0.5]
    );
    const animControls = useAnimation();

    useEffect(() => {
        if (rightSwipes > 50) {
            setShowAlert(true);
        }
    }, [rightSwipes]);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (showAlert) return; // Prevent swiping if alert is shown

        if (Math.abs(info.offset.x) > 100) {
            if (info.offset.x < 0) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
                );
            } else {
                setRightSwipes(prevSwipes => prevSwipes + 1);
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
                );
            }
        }
        animControls.start({ x: 0 });
    };

    return (
        <section className="flex flex-col-reverse md:flex-row w-full h-screen items-center justify-center -mt-9">
            <div className="flex flex-col gap-6 justify-center items-center h-3/4 rounded-3xl p-4 w-full lg:w-1/2">
                <h1 className="flex text-3xl">Swipe right or left</h1>
                {showAlert && (
                    <div className="bg-red-100 border border-red-400 fixed text-red-700 px-4 py-3 rounded z-10 lg:bottom-0 right-0 m-3" role="alert">
                        <strong className="font-bold">Alert!</strong>
                        <span className="block sm:inline"> You're out of likes. Buy more to swipe more.</span>
                    </div>
                )}
                <motion.div
                    className="lg:w-1/2 w-full max-w-4xl aspect-[3/4] bg-white rounded-xl shadow-2xl overflow-hidden"
                    style={{
                        x: motionValue,
                        rotate: rotateValue,
                        opacity: opacityValue,
                    }}
                    drag={showAlert ? false : "x"} // Disable drag if alert is shown
                    dragConstraints={{ left: 0, right: 0 }}
                    animate={animControls}
                    onDragEnd={handleDragEnd}
                >
                    <div className="relative w-full h-2/3">
                        <Image
                            src={cardData[currentIndex].image}
                            alt={cardData[currentIndex].title}
                            layout="fill"
                            objectFit="contain"
                            style={{ width: "100%", height: "100%" }}
                        />
                    </div>
                    <div className="p-6 h-1/3 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">{cardData[currentIndex].title}</h2>
                            <p className="text-lg md:text-xl text-gray-600">{cardData[currentIndex].description}</p>
                        </div>
                        {/* <div className="text-sm md:text-base text-gray-500">
                            Card {currentIndex + 1} of {cardData.length}
                        </div> */}
                    </div>
                </motion.div>
            </div>

            {/* <div className="flex bg-green-400 w-full rounded-3xl shadow-2xl lg:w-1/4 h-1/2 p-8">
                <h1 className="flex">the above cards have the item name and cost, but this would have the other details of the 
                    item that is which brand, location of the nearest store(name) and other details
                    This also 
                </h1>
            </div> */}
        </section>
    );
};

export default DraggableCard;
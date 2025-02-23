"use client";

import { useState } from "react";

// export const metadata = {
//     title: "Counter",
//     description: "Counter page",
//     keywords: "counter, page"
// }

export default function CounterPage() {
    const [counter, setCounter] = useState(10);

    const handleCounter = (value: number) => {
        if (counter + value < 0) return;
        setCounter(counter + value);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <span className="text-9xl"> {counter} </span>

            <div className="flex">
                <button onClick={() => handleCounter(1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 translate-all w-[100px] mr-2">
                    +1
                </button>
                <button onClick={() => handleCounter(-1)}
                    className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 translate-all w-[100px] mr-2">
                    -1
                </button>
            </div>
        </div>
    )
}
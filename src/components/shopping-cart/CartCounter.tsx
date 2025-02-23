"use client";

import { useState } from "react";

interface Props {
    value: number;
}

export const CartCounter = ({ value = 10 }: Props) => {
    const [counter, setCounter] = useState(value);

    const handleCounter = (value: number) => {
        if (counter + value < 0) return;
        setCounter(counter + value);
    }

    return (
        <>
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
        </>
    );
}
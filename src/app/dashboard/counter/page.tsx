import { CartCounter } from "@/components/shopping-cart/CartCounter";

export const metadata = {
    title: "Counter",
    description: "Counter page",
    keywords: "counter, page"
}

export default function CounterPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            {<CartCounter value={10} />}
        </div>
    )
}
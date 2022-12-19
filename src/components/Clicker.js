import { useState } from "react"

const Clicker = () => {

    const [count, setCount] = useState(0)

    const menos = () => { setCount(count - 1) }
    const mas = () => { setCount(count + 1) }

    return (
        <div 
            className="flex justify-around items-center
            border-[2px] rounded-[24px] border-[#BED887]
            text-[30px] w-full h-[50px] px-[10px]">
            <button 
                onClick={menos}
                className="cursor-pointer font-semibold
                flex items-center">
                -
            </button>
            <strong> {count} </strong>
            <button 
                onClick={mas}
                className="cursor-pointer font-semibold
                flex items-center">
                +
            </button>
        </div>
    )
}

export default Clicker

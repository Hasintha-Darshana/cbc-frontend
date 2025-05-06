import { useState } from "react"

export default function TestPage() {
    const [count, setCount] = useState(0)
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[450px] h-[250px] shadow flex items-center justify-center ">
                <button onClick={()=> {setCount(count-1)}} className="bg-blue-400 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer">-</button>
                <span className="text-[20px] font-bold text-center w-[100px] h-[40px] mx-[10px] flex items-center justify-center">{count}</span>
                <button onClick={() => {setCount(count+1)}} className="bg-blue-400 text-white font-bold text-center w-[100px] h-[40px] text-[20px] cursor-pointer">+</button>
            </div>

        </div>
    )
}
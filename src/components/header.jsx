import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function Header(){
    const [sideDrawerOpened, setSideDrawerOpened] = useState(false)
    const navigate = useNavigate();
    return( 
        <header className="w-full h-[80px] shadow-2xl flex relative justify-center">
            <GiHamburgerMenu className="h-full text-3xl md:hidden absolute left-2" onClick={
                ()=>{
                    setSideDrawerOpened(true)
                }
            }/>
           <img onClick={()=>{
                navigate("/")
           }} src="/logo.png" alt="Logo" className="w-[80px] h-[80px] object-cover cursor-pointer" />
           <div className="w-[calc(100%-160px)] h-full hidden md:flex justify-center items-center">
                <Link to="/" className="text-2xl font-bold">Home</Link>
                <Link to="/products" className="text-2xl font-bold mx-5">Products</Link>
                <Link to="/about" className="text-2xl font-bold">About</Link>
                <Link to="/contact" className="text-2xl font-bold mx-5">Contact</Link>
               
                

           </div>
           <div className="w-[80px] h-full hidden md:flex justify-center items-center">
                 <Link to="/cart" className="text-2xl font-bold">
                    <RiShoppingCart2Fill />
                 </Link>
            </div>
           {
                sideDrawerOpened&&
                <div className="fixed  h-screen w-full bg-[#00000060] flex md:hidden">
                    <div className="w-[350px] bg-white h-full">
                        <div className="w-full h-[80px] shadow-2xl flex justify-center items-center relative">
                            <GiHamburgerMenu className="h-full text-3xl absolute left-2 cursor-pointer" onClick={()=>{
                                setSideDrawerOpened(false)
                            }} />
                            <img onClick={()=>{
                                window.location.href = "/"
                            }} src="/logo.png" alt="Logo" className="w-[80px] h-[80px] object-cover cursor-pointer"/>

                        </div>
                        <div className="w-full h-[calc(100%-80px)] flex flex-col items-center gap-2">
                            <a href="/" className="text-[20px] font-bold mx-2 my-4">Home</a>
                            <a href="/products" className="text-[20px] font-bold mx-2 my-4">Products</a>
                            <a href="/about" className="text-[20px] font-bold mx-2 my-4">About</a>
                            <a href="/contact" className="text-[20px] font-bold mx-2 my-4">Contact</a>
                            <a href="/cart" className="text-[20px] font-bold mx-2 my-4">
                                <BsCart3 />
                            </a>
                        </div>

                    </div>

                </div>
            }
        </header>
    )
}
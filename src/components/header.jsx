import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export default function Header(){
    const navigate = useNavigate();
    return( 
        <header className="w-full h-[80px] shadow-2xl flex">
           <img onClick={()=>{
                navigate("/")
           }} src="/logo.png" alt="Logo" className="w-[80px] h-[80px] object-cover cursor-pointer" />
           <div className="w-[calc(100%-160px)] h-full flex justify-center items-center">
                <Link to="/" className="text-2xl font-bold">Home</Link>
                <Link to="/products" className="text-2xl font-bold mx-5">Products</Link>
                <Link to="/about" className="text-2xl font-bold">About</Link>
                <Link to="/contact" className="text-2xl font-bold mx-5">Contact</Link>
               
                

           </div>
           <div className="w-[80px] h-full flex justify-center items-center">
                 <Link to="/cart" className="text-2xl font-bold">
                    <RiShoppingCart2Fill />
                 </Link>
            </div>
           
        </header>
    )
}
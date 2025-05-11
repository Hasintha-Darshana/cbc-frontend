import axios from "axios"
import { sampledata } from "../../assets/sampledata"
import { useState } from "react"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaEdit, FaTrash } from "react-icons/fa"
import toast from "react-hot-toast"

export default function AdminProductPage() {
    const [products, setProducts] = useState(sampledata)
    const [isLoading , setIsLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(
        ()=>{
            if(isLoading == true){
                axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then((res)=>{
                console.log(res.data)
                setProducts(res.data)
                setIsLoading(false)
            })
            } 
           
        }, [isLoading]);

    function deleteProduct(productId){
        const token = localStorage.getItem("token")
        if(token == null){
            toast.error("Please login first")
            return
        }
        axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/products/"+productId, {
            headers : {
                "Authorization" : "Bearer "+token
            }
        }).then(()=>{
            toast.success("Product deleted successfully")
            setIsLoading(true)
        }).catch((e)=>{
            toast.error(e.response.data.message)
        })
    }

    return(
        
        <div className="w-full h-full max-h-full overflow-y-scroll relative">
            <Link to="/admin/add-product" className="absolute text-xl cursor cursor-pointer bottom-5 right-5 bg-green-500 text-white font-bold py-2 px-4 rounded text-center">+</Link>
            <table className="w-full text-center ">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Labelled Price</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                  {
                    products.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.productId}</td>
                                <td>{item.name}</td>
                                <td><img src={item.images[0]} className="w-[50px] h-[50px]"/></td>
                                <td>{item.labeledPrice}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td>
                                    <div className="flex justify-center items-center w-full">
                                        <FaEdit onClick={()=>{
                                            navigate("/admin/edit-product",{
                                                state :item
                                            })
                                        }} className="text-blue-500 mx-2 cursor-pointer"/> 
                                        <FaTrash onClick={()=>{
                                            deleteProduct(item.productId)
                                        }} className="text-red-500 mx-2 cursor-pointer"/>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                  }
                  
                </tbody>
            </table>
        </div>
    )
} 
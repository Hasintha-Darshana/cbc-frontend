
import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import ImageSlider from "../../components/imageSlider"
import Loading from "../../components/loading"

export default function ProductOverviewPage() {
    const params = useParams()
    const productId = params.id
    const [status, setStatus] = useState("loading")//loading, success, error

    const[product, setProduct] = useState(null)

    useEffect(
       ()=>{
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"+productId).then(
                (response)=>{
                    console.log(response.data)
                    setProduct(response.data)
                    setStatus("success")
                }
            ).catch(
                (err)=>{
                    console.log(err.response.data)
                    setStatus("error")
                    toast.error("Error fetching product details.")
                }
            )
           
        }
       
    ,[])
    return (
        <>
            {status == "success" && (
                <div className="w-full h-full flex">
                    <div className="w-[50%] h-full flex justify-center items-center">
                        <ImageSlider images= {product.images}/>
                    </div>
                    <div className="w-[50%] h-full flex justify-center items-center">
                        <div className="w-[400px] h-[500px] flex flex-col items-center">
                            <h1 className="w-full text-3xl text-center text-secondary font-semibold">{product.name}
                                {product.altNames.map(
                                    (altName, index) => {
                                        return(
                                            <span key= {index} className="text-3xl text-gray-600">{" | "+altName}</span>
                                        )
                                    }
                                )}
                            </h1>
                            <h1 className="w-full text-center my-2 text-md text-gray-600 font-semibold">{product.productId}</h1>
                            <p className="w-full text-center my-2 text-md text-gray-600 font-semibold">{product.description}</p>
                            {
                                product.labeledPrice > product.price && 
                               <div>
                                    <span className="text-4xl mx-4 text-gray-500 line-through">{product.labeledPrice.toFixed(2)}</span>
                                    <span className="text-4xl mx-4 font-bold text-accent">{product.price.toFixed(2)}</span>
                                </div>
                            }
                    
                        </div>

                    </div>
                </div>
            )}
            {status == "loading" && <Loading />}
        </>
    )
}
import { useState } from "react"

export default function ImageSlider(props) {

    const images = props.images
    const[currentIndex, setCurrentIndex] = useState(0)
    return(
        <div className="w-[400px] h-[500px] ">
            <img src={images[currentIndex]} className="w-full h-[400px] object-cover rounded-3xl"/>
            <div className="w-full h-[100px] flex justify-center items-center">
                {
                    images.map(
                        (image, index)=>{
                            return(
                                <img key={index} className ={" w-[90px] h-[90px] rounded-2xl m-2 object-cover cursor-pointer hover:border-4 hover:border-accent " +(index==currentIndex &&"border-accent border-4" )} src={image}  onClick={
                                    ()=>{
                                        setCurrentIndex(index)
                                    }
                                }/>
                            )
                        }
                    )
                }

            </div>
        </div>   
    )
}
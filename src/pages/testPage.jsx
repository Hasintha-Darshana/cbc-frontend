
import {useState}from "react";
import mediaUpload from "../utils/mediaUpload";

export default function TestPage() {
    const[image, setImage] = useState(null);

    function imageUpload(){
       mediaUpload(image).then(
        (res)=>{
            console.log(res)
        }
       ).catch(
         (res)=>{
            console.log(res)
         }
       )
    }
   
    return(
        <div className="w-full h-screen flex items-center justify-center ">
           <input type = "file" className="file-input file-input-bordered w-full max-w-xs" onChange={
            (e)=>{
                setImage(e.target.files[0]);
            }
           }></input>
            <button onClick={imageUpload} className="font-bold bg-green-500 text-white py-2 px-4 rounded">Upload</button>
        </div>
    )
}
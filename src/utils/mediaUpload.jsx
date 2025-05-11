import { createClient } from "@supabase/supabase-js"

const url = import.meta.env.VITE_SUPABASE_URL 
const key = import.meta.env.VITE_SUPABASE_KEY

const supabase = createClient(url, key);

export default function mediaUpload(image){
    const imageuploadPromise = new Promise(
        (resolve,reject) =>{
            if(image == null){
                reject("No image selected")
                return
            }

            const timestamp = new Date().getTime()
            const newName = timestamp + image.name

            supabase.storage.from("images").upload(newName, image , 
                {
                    upsert : false,
                    cacheControl : "3600",
                }).then(
                    ()=>{
                        const publicUrl = supabase.storage.from("images").getPublicUrl(newName).data.publicUrl;
                        
                        resolve(publicUrl)
                    }
                ).catch(
                    ()=>{
                       
                        reject("Error uploading image")
                    }
                )
        }
    )

    return imageuploadPromise
}
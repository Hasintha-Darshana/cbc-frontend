import { createClient } from "@supabase/supabase-js"

const url ="https://amwxtjqhnuqztmuvekut.supabase.co"
const key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtd3h0anFobnVxenRtdXZla3V0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NTUwMTAsImV4cCI6MjA2MjQzMTAxMH0.1HAOkhPyFdTDFGA4gK4nuTv6fuX94GsOqRWlDflk9X4"

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
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function LoginPage(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    async function handleLogin() {
       try{
       
        const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/users/login", {
            email:email, 
            password:password})

        toast.success('Logging successful')
        console.log(response.data)
        localStorage.setItem('token', response.data.token)

        if(response.data.role === 'admin'){
            navigate('/admin')
        }else{
            navigate('/')
        }
       }catch(err){
        toast.error(err.response.data.message)
        console.log(err)
       }
        
    }

    return (
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex justify-evenly items-center">
            <div className="w-[50%] h-full"></div>  
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[500px] h-[500px] backdrop-blur-md shadow-xl rounded-[20px] flex flex-col justify-center items-center">
                    <input onChange={(e)=>{
                        setEmail(e.target.value)
                    }} value={email} className="w-[300px] h-[50px] bg-[#cdc9c6] border border-[#aaa7a2] rounded-[20px] my-[20px]" />
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }} value={password} type="password" className="w-[300px] h-[50px] bg-[#cdc9c6] border border-[#aaa7a2] rounded-[20px] mb-[20px]" />

                    <button onClick={handleLogin} className="w-[300px] h-[50px] bg-[#aaa7a2] rounded-[20px] my-[20px] font-bold text-white cursor-pointer">Login</button>
                </div>
            </div>
        </div>
    )
}
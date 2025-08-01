import { Link, Routes, Route, useLocation } from "react-router-dom";
import AddProductPage from "./admin/addProductPage";
import AdminProductPage from "./admin/productPage";
import EditProductPage from "./admin/editProduct";
import AdminOrdersPage from "./admin/adminOrdersPage";


export default function AdminPage(){

    const location = useLocation();
    const path = location.pathname

    function getClass(name){
        if(path.includes(name)){
            return "bg-accent text-white p-4"
        }else{
            return "text-accent p-4"
        }
    }
    return(
        <div className="w-full h-screen  flex bg-accent">
            <div className="h-full w-[300px] text-accent font-bold text-xl flex flex-col bg-white">
                <Link className={getClass("products")} to='/admin/products'>Products</Link>
                <Link className={getClass("users")} to='/admin/users'>Users</Link>
                <Link className={getClass("orders")} to='/admin/orders'>Orders</Link>
                <Link className={getClass("reviews")} to='/admin/reviews'>Reviews</Link>
            </div>
             
            <div className="h-full w-[calc(100%-300px)] bg-white  border-accent border-2 rounded-2xl">
                <Routes path ="/*">
                    <Route path = '/products' element = {<AdminProductPage/>}/>
                    <Route path = '/users' element = {<h1>Users</h1>}/>
                    <Route path = '/orders' element = {<AdminOrdersPage />}/>
                    <Route path = '/reviews' element = {<h1>Reviews</h1>}/>
                    <Route path = '/add-product' element = {<AddProductPage/>}/>
                    <Route path = '/edit-product' element = {<EditProductPage/>}/>
                </Routes>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom";

export default function Header(){
    return( 
        <header className="bg-yellow-400">
            <Link to="/"> Home </Link>
            <Link to ='/login'>Login</Link>
        </header>
    )
}
import { Link } from "react-router-dom";

export default function Navbar({user}) {
    return ( 
        <nav>
            <div>
                Welcome to React Movies, {user} !! 
            </div>
            <Link to = '/'>Movies List</Link>
            &nbsp; | &nbsp; 
            <Link to = '/actors'>Actors List</Link>
        </nav>
    )
}
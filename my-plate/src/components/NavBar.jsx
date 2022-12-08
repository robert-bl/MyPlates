import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../DataContext"
import { useEffect } from "react"

export default function NavBar () {

    let navigate = useNavigate()

    const { handleLogOut, user } = useContext(DataContext)


    return (
        <div className="nav">
            <div className="navbar-links">
                <Link to="/" className="link">Home</Link>
                <Link to='/recipelist' className="link">All Recipes</Link>
                <Link to='randomrecipe' className="link">Random recipe</Link>
                
                {!user ? null : <Link to={`/user/${user.id}`} className="link">User Page</Link>}
                {!user ? null : <Link onClick={handleLogOut} to='/' className="link">Logout</Link>}
                {user ? null : <Link to="/login" className="link">Login</Link>}
            </div>
        </div>
    )
}
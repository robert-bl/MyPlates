import { Link } from "react-router-dom"

export default function NavBar () {
    return (
        <div className="nav">
            <div className="navbar-links">
                <button> <Link to="/" className="link">Home</Link></button>
                <button><Link to="/register" className="link">Register</Link></button>
                <button><Link to="/login" className="link">Login</Link></button>
                <button><Link to='/createrecipe' className="link">Add Your Recipe</Link></button>
                <button><Link to='/recipelist' className="link">All Recipes</Link></button>
                <button><Link to='randomrecipe' className="link">Random recipe</Link></button>
                {/* <button><Link to='reviews' className="link">All Reviews</Link></button> */}
            </div>
        </div>
    )
}
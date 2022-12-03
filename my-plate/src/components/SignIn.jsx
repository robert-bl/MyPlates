import { Link } from "react-router-dom"


export default function SignIn () {
    return (
        <div className="test-wrapper">
            <h3>SignIn</h3>
            <button><Link to="/register" className="link">Make an Account</Link></button>
        </div>
    )
}
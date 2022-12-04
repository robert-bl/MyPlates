import { Link } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../DataContext"


export default function SignIn () {

    const { userInfo, setUserInfo } = useContext(DataContext)

    const handleChange = (event) => {
        setUserInfo({...userInfo, [event.target.id]: event.target.value})
    }

    return (
        <div className="test-wrapper">
            <h3>SignIn</h3>

            {/* Temporary way to switch user. Remove once Auth is implemented */}
            <form>
                <label>Sign In as:</label>
                <select id="userId" onChange={handleChange}>
                    <option value="1">User 1</option>
                    <option value="2">User 2</option>
                    <option value="3">User 3</option>
                    <option value="4">User 4</option>
                    <option value="5">User 5</option>
                </select>
            </form>



            <button><Link to="/register" className="link">Make an Account</Link></button>
        </div>
    )
}
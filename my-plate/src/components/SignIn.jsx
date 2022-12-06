import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { DataContext } from "../DataContext"
import axiosCreate from "../services/apiServices"


export default function SignIn () {

    let navigate = useNavigate()

    // const { userInfo, setUserInfo } = useContext(DataContext)

    const { setUser, toggleAuthenticated } = useContext(DataContext)

    const initialFormState = {
        username: '',
        password: ''
    }

    const [formInput, setFormInput] = useState(initialFormState)


    const SignInUser = async (data) => {
        try {
            const response = await axiosCreate.post('/api/users/login', data)
        //store token in local storage
            localStorage.setItem('token', response.data.token)
            return response.data.user
        } catch (error) {
            throw error
        }
    }


    const handleChange = (event) => {
        setFormInput({...formInput, [event.target.id]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const payload = await SignInUser(formInput)
        setFormInput(initialFormState)
        setUser(payload)
        toggleAuthenticated(true)
        navigate('/')
    }

    return (
        <div className="test-wrapper">
            <h3>SignIn</h3>


            <div className="card-overlay centered">
                <form className="col" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username:</label>
                        <input
                            onChange={handleChange}
                            id="username"
                            type="text"
                            placeholder="username"
                            value={formInput.username}
                            required
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={handleChange}
                            type="password"
                            id="password"
                            value={formInput.password}
                            required
                        />
                    </div>
                    <button type="submit">
                    Sign In
                    </button>
                </form>
            </div>


            <button><Link to="/register" className="link">Make an Account</Link></button>
        </div>
    )
}
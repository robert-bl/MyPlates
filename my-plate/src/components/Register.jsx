import { useState } from 'react'
import axiosCreate from '../services/apiServices'
import { Link } from "react-router-dom"


export default function Register () {

    //Blank form state
    const initialState = {
        username: '',
        password: ''
    }

    //state variable for form data
    const [registerForm, setRegisterForm] = useState(initialState)

    //axios post function for registering user
    const RegisterUser = async (data) => {
        try {
            const response = await axiosCreate.post('/api/users', data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    //store form input in real time
    const handleChange = (event) => {
        setRegisterForm({...registerForm, [event.target.id]: event.target.value})
    }

    //on ubmit button click: make axios call using form data and resent form data to initial state
    const handleSubmit = async (event) => {
        event.preventDefault()
        await RegisterUser(registerForm)
        setRegisterForm(initialState)
    }


    return (
        <div className="test-wrapper">
            <h3>Register</h3>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" id="username" onChange={handleChange} value={registerForm.username}></input>
                <label>Password:</label>
                <input type="text" id="password" onChange={handleChange} value={registerForm.password}></input>
                <button type="submit">Submit</button>
            </form>
            <button><Link to="/login" className="link">Already a member? Sign in here</Link></button>
        </div>
    )
}
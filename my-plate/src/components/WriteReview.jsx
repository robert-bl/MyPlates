import { useState } from 'react'
import axiosCreate from '../services/apiServices'
import { useContext } from "react"
import { DataContext } from "../DataContext"
import { useNavigate } from 'react-router-dom'



export default function WriteReview (props) {
    const { user } = useContext(DataContext)
    // const { recipeInfo } = useContext(DataContext)

let navigate = useNavigate()
  
  const initialState = {
    rating: 1,
    comment: ''
}

const [reviewForm, setReviewForm] = useState(initialState)


const EnterReview = async (data) => {
    try {
        const response = await axiosCreate.post(`/api/reviews/${user.id}/${props.id}`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

const handleChange = (event) => {
    setReviewForm({...reviewForm, [event.target.id]: event.target.value})
}

const handleChange2 = (event) => {
    setReviewForm({...reviewForm, [event.target.id]: parseInt(event.target.value)})
}



const handleSubmit = async (event) => {
    event.preventDefault()
    await EnterReview(reviewForm)
    setReviewForm(initialState)
    navigate(`/displayrecipe/${props.id}`)
}


return (
    <div className="test-wrapper">
        <h3>Write a review</h3>

        {/* Tracks active user for testing, remove before deploymet */}
        <h4>User {user?user.username:''}</h4>

        <form onSubmit={handleSubmit}>
            
            <label>Enter a number out of 5:</label>
            
            <select type='text' id='rating' value={reviewForm.rating} onChange={handleChange2}>
            
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>

            <label>Write your opinion on this recipe:</label>
            <input style={{width: "500px", paddingBottom:"100px" }} type="text" id="comment" onChange={handleChange} value={reviewForm.comment}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}
import { useState } from 'react'
import axiosCreate from '../services/apiServices'
import { useContext } from "react"
import { DataContext } from "../DataContext"
import { useNavigate } from 'react-router-dom'



export default function WriteReview (props) {
    const { userInfo } = useContext(DataContext)
    // const { recipeInfo } = useContext(DataContext)
let navigate = useNavigate()
  
  const initialState = {
    rating: '',
    comment: ''
}

const [reviewForm, setReviewForm] = useState(initialState)


const EnterReview = async (data) => {
    try {
        const response = await axiosCreate.post(`/api/reviews/${userInfo.userId}/${props.id}`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

const handleChange = (event) => {
    setReviewForm({...reviewForm, [event.target.id]: event.target.value})
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
        <h4>User {userInfo.userId}</h4>

        <form onSubmit={handleSubmit}>
            
            <label>Enter a number out of 5:</label>
            <input type="text" id="rating" onChange={handleChange} value={reviewForm.rating}></input>
            <label>Write your opinion on this recipe:</label>
            <input type="text" id="comment" onChange={handleChange} value={reviewForm.comment}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
)
}
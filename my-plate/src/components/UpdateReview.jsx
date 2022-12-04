import { useState } from 'react'
import axiosCreate from '../services/apiServices'
// import { useContext } from "react"
// import { DataContext } from "../DataContext"



export default function UpdateReview ({id}) {
    // const { userInfo } = useContext(DataContext)
    // const { recipeInfo } =useContext(DataContext)

  
  const initialState = {
    
    rating: '',
    comment: '',
    // user_id:'',
    // recipe_id:''

}

const [reviewForm, setReviewForm] = useState(initialState)


const EnterReview = async (data) => {
    try {
        const response = await axiosCreate.put(`/api/reviews/${id}`, data)
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
}


return (
    <div className="test-wrapper">
        <h3>Update your review</h3>
        <form onSubmit={handleSubmit}>
            
            <label>Enter a number out of 5:</label>
            <input type="text" id="rating" onChange={handleChange} value={reviewForm.rating}></input>
            <label>Rewrite your opinion on this recipe:</label>
            <input type="text" id="comment" onChange={handleChange} value={reviewForm.comment}></input>
            <button type="submit">Submit</button>

            {/* <label>Enter userid:</label>
            <input type="text" id="user_id" onChange={handleChange} value={reviewForm.user_id}></input>
            <label>Enter recipeid:</label>
            <input type="text" id="recipe_id" onChange={handleChange} value={reviewForm.recipe_id}></input>
            <button type="submit">Submit</button> */}
        </form>
     
    </div>
)
}
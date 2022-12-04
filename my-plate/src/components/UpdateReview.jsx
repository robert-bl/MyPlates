import { useState } from 'react'
import axiosCreate from '../services/apiServices'




export default function UpdateReview ({id}) {
  

  
  const initialState = {
    
    rating: '',
    comment: '',


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

    
        </form>
     
    </div>
)
}
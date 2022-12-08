import { useState } from 'react'
import axiosCreate from '../services/apiServices'
import { useContext } from "react"
import { DataContext } from "../DataContext"
import { useNavigate } from 'react-router-dom'



export default function WriteReview (props) {
    const { user } = useContext(DataContext)

let navigate = useNavigate()
  
  const initialState = {
    rating: 5,
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
    <div className="write-review-wrapper">
        <div className="prompt-review">
            
        <div>Write a review as {user?user.username:''}</div>
        </div>

        <form onSubmit={handleSubmit}>
            
            <label>Enter a number out of 5: </label>
            
            <select type='text' id='rating' value={reviewForm.rating} onChange={handleChange2}>
                <option value="5">5</option> 
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </select>

            <label style={{display:'block', float:'bottom', marginLeft:'auto', marginRight:'auto' }}>Give your opinion on this recipe:</label>
            <textarea style={{width: "500px", paddingBottom:"100px", display:'block', float:'bottom', marginLeft:'auto', marginRight:'auto' }} type="text" id="comment" onChange={handleChange} value={reviewForm.comment}></textarea>
            <button type="submit">Submit</button>
            <div>
                <img src='https://media.tenor.com/KayBlLo95RoAAAAC/peach-cat.gif' width={150} height={150}/>
            </div>
        </form>
    </div>
)
}
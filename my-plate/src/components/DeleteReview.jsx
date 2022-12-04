import { useState } from 'react'
import axiosCreate from '../services/apiServices'
import { useContext } from "react"
import { DataContext } from "../DataContext"
import { Link } from "react-router-dom"




export default function DeleteReview ({id}) {

const DeleteReview = async (data) => {
    try {
        const response = await axiosCreate.delete(`/api/reviews/${id}`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

function messageDelete() {
    alert(`Your review of ${id} is deleted`)
}

function deletionComplete(){
    DeleteReview()
    messageDelete()
   
}

return (
    <div className="test-wrapper">
        <h2>You may delete this review</h2>
      <button onClick={deletionComplete}> <Link to='/reviews' className="link">Delete</Link>
</button>
     
    </div>
)
}
import { useState } from 'react'
import axiosCreate from '../services/apiServices'
import { useContext } from "react"
import { DataContext } from "../DataContext"
import { Link } from "react-router-dom"




export default function DeleteRecipe ({id}) {

const DeleteReview = async (data) => {
    console.log(id)
    try {
        const response = await axiosCreate.delete(`/api/recipes/${id}`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

function messageDelete() {
    alert(`Your recipe of id of ${id} is deleted`)
}

function deletionComplete(){
    DeleteReview()
    messageDelete()
   
}

return (
    <div className="test-wrapper">
        <h2>You may delete this recipe</h2>
      <button onClick={deletionComplete}> <Link to='/recipelist' className="link">Delete</Link>
</button>
     
    </div>
)
}
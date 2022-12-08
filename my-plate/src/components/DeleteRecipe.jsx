
import axiosCreate from '../services/apiServices'

import { useNavigate} from "react-router-dom"



export default function DeleteRecipe ({id}) {
    let navigate =useNavigate()

const DeleteRecipe = async (data) => {
  
    try {
        const response = await axiosCreate.delete(`/api/recipes/${id}`, data)
        return response.data
    } catch (error) {
        throw error
    }
}



function myConfirmFunction() {
    let text = "Press a button!\nEither OK or Cancel.";
    if (window.confirm(text) == true) {
      text = "You pressed OK!";
      DeleteRecipe()
      alert(`Your review of id of ${id} is deleted`)
      navigate(`/recipelist/`)


    } else {
      text = "You canceled!";
    }
}

return (
    <div className="test-wrapper">
        <h2>You may delete this recipe</h2>
      <button onClick={myConfirmFunction}> Delete Recipe</button>
     
    </div>
)
}
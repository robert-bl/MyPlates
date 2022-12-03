import { useState } from "react"
import { useContext } from "react"
import { DataContext } from "../DataContext"
import axiosCreate from "../services/apiServices"

//git check

export default function CreateRecipe () {

    const { userInfo } = useContext(DataContext)

    const initialRecipeState = {
        // userID: userInfo.userId,
        name: "",
        description: "",
        directions: "",
        ingredient1: "",
        ingredient2: null,
        ingredient3: null,
        ingredient4: null,
        ingredient5: null,
        ingredient6: null,
        ingredient7: null,
        ingredient8: null,
        ingredient9: null,
        ingredient10: null,
        ingredient11: null,
        ingredient12: null,
        ingredient13: null,
        ingredient14: null,
        ingredient15: null,
        ingredient16: null,
        ingredient17: null,
        ingredient18: null,
        ingredient19: null,
        ingredient20: null,
        measurement1: "",
        measurement2: null,
        measurement3: null,
        measurement4: null,
        measurement5: null,
        measurement6: null,
        measurement7: null,
        measurement8: null,
        measurement9: null,
        measurement10: null,
        measurement11: null,
        measurement12: null,
        measurement13: null,
        measurement14: null,
        measurement15: null,
        measurement16: null,
        measurement17: null,
        measurement18: null,
        measurement19: null,
        measurement20: null,
    }

    const [createRecipeForm, setCreateRecipeForm] = useState(initialRecipeState)
    const [ingredientNumber, setIngredientNumber] = useState([1])


    const addIngredientField = () => {
        setIngredientNumber([...ingredientNumber, ingredientNumber.length + 1])
    }

    const PostRecipe = async(data) => {
        try {
            const response = await axiosCreate.post(`/api/recipes/${userInfo.userId}`, data)
        } catch (error) {
            throw error
        }
    }

    const handleChange = (event) => {
        setCreateRecipeForm({...createRecipeForm, [event.target.id]: event.target.value})
        console.log(createRecipeForm)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        await PostRecipe(createRecipeForm)
        setCreateRecipeForm(initialRecipeState)
    }

    return (
        <div className="test-wrapper">
            <h3>CreateRecipe</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Recipe Name:</label>
                <input type="text" id="name" onChange={handleChange} placeholder="placeholder" value={createRecipeForm.name}></input>

                <label htmlFor="">Description:</label>
                <input type="text" id="description" onChange={handleChange}placeholder="placeholder" value={createRecipeForm.description}></input>

                <label htmlFor="">Ingredients:</label>
                    
                    {ingredientNumber.map((e) => 
                        <div key={e}>
                            <label htmlFor="">Ingredient:</label>
                            <input type="text" id={'ingredient'+ e} onChange={handleChange}placeholder="placeholder" value={createRecipeForm.ingredient1}></input>
                            <label htmlFor="">Ammount:</label>
                            <input type="text" id={'measurement1' + e} onChange={handleChange}placeholder="placeholder" value={createRecipeForm.measurement1}></input>
                        </div>
                        )}
                        <button onClick={(event) => {
                            event.preventDefault()
                            addIngredientField()}}>Add Ingredient</button>

                <label htmlFor="">Directions:</label>
                <input type="text" id="directions" onChange={handleChange}placeholder="placeholder" value={createRecipeForm.directions}></input>
                <button type="submit">Post Recipe</button>
            </form>
        </div>
    )
}
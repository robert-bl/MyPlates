import { useState } from "react"
import { useContext } from "react"
import { DataContext } from "../DataContext"
import axiosCreate from "../services/apiServices"

//git check

export default function CreateRecipe () {

    const { userInfo } = useContext(DataContext)

    const initialRecipeState = {
        name: "",
        description: "",
        directions: "",
        ingredient1: "",
        measurement1: "",
    }

    const [createRecipeForm, setCreateRecipeForm] = useState(initialRecipeState)
    const [ingredientNumber, setIngredientNumber] = useState([1])


    const addIngredientField = () => {
        if (ingredientNumber.length < 20) {
            setIngredientNumber([...ingredientNumber, ingredientNumber.length + 1])
            setCreateRecipeForm({...createRecipeForm, ['ingredient' + (ingredientNumber.length +1)]: "", ['measurement' + (ingredientNumber.length +1)]: ""})
        } else {
            alert("Maximum of 20 ingredients allowed")
        }
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
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await PostRecipe(createRecipeForm)
        setCreateRecipeForm(initialRecipeState)
        setIngredientNumber([1])
    }

    return (
        <div className="test-wrapper">
            <h3>CreateRecipe</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Recipe Name:</label>
                    <input type="text" id="name" onChange={handleChange} placeholder="placeholder" value={createRecipeForm.name}></input>
                </div>
                <div>
                <label htmlFor="">Description:</label>
                <input type="text" id="description" onChange={handleChange}placeholder="placeholder" value={createRecipeForm.description}></input>
                </div>
                <div>
                <label htmlFor="">Ingredients:</label>                    
                    {ingredientNumber.map((e) => 
                        <div key={e}>
                            <label htmlFor="">Ingredient:</label>
                            <input type="text" id={'ingredient'+ e} onChange={handleChange}placeholder="placeholder" value={createRecipeForm['ingredient' + e]}></input>
                            <label htmlFor="">Ammount:</label>
                            <input type="text" id={'measurement' + e} onChange={handleChange}placeholder="placeholder" value={createRecipeForm['measurement' + e]}></input>
                        </div>
                        )}
                        <button onClick={(event) => {
                            event.preventDefault()
                            addIngredientField()}}>Add Ingredient</button>
                </div>
                <div>
                <label htmlFor="">Directions:</label>
                <input type="text" id="directions" onChange={handleChange}placeholder="placeholder" value={createRecipeForm.directions}></input>
                </div>
                <button type="submit">Post Recipe</button>
            </form>
        </div>
    )
}
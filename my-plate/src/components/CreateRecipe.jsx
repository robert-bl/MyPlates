import { useState } from "react"
import { useContext } from "react"
import { DataContext } from "../DataContext"
import axiosCreate from "../services/apiServices"
import { useNavigate } from "react-router-dom"

//test
import UpdateRecipe from "./UpdateRecipe"


export default function CreateRecipe () {
    let navigate=useNavigate()

    //pull in user info to get user id
    const { userInfo } = useContext(DataContext)

    //initial form state for recipe
    const initialRecipeState = {
        name: "",
        description: "",
        directions: "",
        ingredient1: "",
        measurement1: "",
    }

    //store input recipe information
    const [createRecipeForm, setCreateRecipeForm] = useState(initialRecipeState)

    //track number of ingredient fields to be displayed
    const [ingredientNumber, setIngredientNumber] = useState([1])

    //adds new ingredient field, ups ingredientNumber and sets the key and value for the new ingredient in the createRecipeForm
    const addIngredientField = () => {
        if (ingredientNumber.length < 20) {
            let n = ingredientNumber.length + 1
            setIngredientNumber([...ingredientNumber, n])
            setCreateRecipeForm({...createRecipeForm, ['ingredient' + (n)]: "", ['measurement' + (n)]: ""})
        } else {
            alert("Maximum of 20 ingredients allowed")
        }
        console.log(createRecipeForm)
    }

    //delete ingredient field
    const removeIngredientField = () => {
        if (ingredientNumber.length > 1) {
        let localArr = [...ingredientNumber]
        let n = localArr.splice(localArr.length - 1, 1)
        setIngredientNumber(localArr)
        setCreateRecipeForm({...createRecipeForm, ['ingredient' + (n)]: null, ['measurement' + (n)]: null})
        }
        console.log(createRecipeForm)
    }

    //posts createRecipeForm to the database
    const PostRecipe = async(data) => {
        try {
            const response = await axiosCreate.post(`/api/recipes/${userInfo.userId}`, data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    //updates createRecipeForm on form input
    const handleChange = (event) => {
        setCreateRecipeForm({...createRecipeForm, [event.target.id]: event.target.value})
    }

    //handles form submit
    const handleSubmit = async (event) => {
        event.preventDefault()
        await PostRecipe(createRecipeForm)
        setCreateRecipeForm(initialRecipeState)
        setIngredientNumber([1])
        navigate(`/recipelist`)
    }

    return (
        <div className="test-wrapper">
            <h3>CreateRecipe</h3>

            {/* Tracks active user for testing, remove before deploymet */}
            <h2>User {userInfo.userId}</h2>


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
                            <label htmlFor="">Amount:</label>
                            <input type="text" id={'measurement' + e} onChange={handleChange}placeholder="placeholder" value={createRecipeForm['measurement' + e]}></input>
                        </div>
                        )}
                        <button onClick={(event) => {
                            event.preventDefault()
                            addIngredientField()}}>Add Ingredient</button>
                        <button onClick={(event) => {
                            event.preventDefault()
                            removeIngredientField()}}>Remove Ingredient</button>
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
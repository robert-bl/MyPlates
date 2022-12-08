import { useState } from "react"
import { useContext } from "react"
import { DataContext } from "../DataContext"
import axiosCreate from "../services/apiServices"
import { useNavigate } from "react-router-dom"
import '../styling/recipe-and-review.css'


export default function CreateRecipe () {
    let navigate=useNavigate()

    //pull in user info to get user id
    const { user } = useContext(DataContext)

    //initial form state for recipe
    const initialRecipeState = {
        name: "",
        imgUrl:"",
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
    }

    //delete ingredient field
    const removeIngredientField = () => {
        if (ingredientNumber.length > 1) {
        let localArr = [...ingredientNumber]
        let n = localArr.splice(localArr.length - 1, 1)
        setIngredientNumber(localArr)
        setCreateRecipeForm({...createRecipeForm, ['ingredient' + (n)]: null, ['measurement' + (n)]: null})
        }
    }

    //posts createRecipeForm to the database
    const PostRecipe = async(data) => {
        try {
            const response = await axiosCreate.post(`/api/recipes/${user.id}`, data)
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
        <div className="create-recipe-wrapper">
            <h3 style={{fontSize:"50px"}}>Create Recipe</h3>
            <form onSubmit={handleSubmit}>
                <div className="recipe-input-section">
                    <label htmlFor="">Recipe Name:</label>
                    <input style={{width: "300px" }} type="text" id="name" onChange={handleChange} placeholder="recipe name" value={createRecipeForm.name}></input>
                </div>
                <div className="recipe-input-section">
                <label htmlFor="">Image Url:</label>
                <input style={{width: "300px" }} type="text" id="imgUrl" onChange={handleChange} placeholder="url" value={createRecipeForm.imgUrl}></input>
                </div>
                <div className="recipe-input-section">
                <label htmlFor="">Description:</label>
                <textarea style={{width: "500px", paddingBottom:"100px" }} type="text" id="description" onChange={handleChange}placeholder="recipe description" value={createRecipeForm.description}></textarea>
                </div>
                <div className="recipe-input-section">
                <label htmlFor="">Ingredients:</label>                    
                    {ingredientNumber.map((e) => 
                        <div key={e}>
                            <label htmlFor="">Ingredient:</label>
                            <input style={{width: "300px" }} type="text" id={'ingredient'+ e} onChange={handleChange}placeholder="ingredient name" value={createRecipeForm['ingredient' + e]}></input>
                            <label htmlFor="">Amount:</label>
                            <input type="text" id={'measurement' + e} onChange={handleChange}placeholder="ingredient quantity" value={createRecipeForm['measurement' + e]}></input>
                        </div>
                        )}
                        <div className="buttons">
                            <button onClick={(event) => {
                                event.preventDefault()
                                addIngredientField()}}>Add Ingredient</button>
                            <button onClick={(event) => {
                                event.preventDefault()
                                removeIngredientField()}}>Remove Ingredient</button>
                        </div>
                </div>
                <div className="recipe-input-section">
                <label htmlFor="">Directions:</label>
                <textarea type="text" style={{width: "500px", paddingBottom:"100px" }} id="directions" onChange={handleChange}placeholder="cooking directions" value={createRecipeForm.directions}></textarea>
                </div>
                <button type="submit">Post Recipe</button>
            </form>
        </div>
    )
}
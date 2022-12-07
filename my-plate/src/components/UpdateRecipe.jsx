import { useState, useEffect } from "react"
import { BASE_URL } from "../services/apiServices"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import axiosCreate from "../services/apiServices"

export default function UpdateRecipe () {

    let navigate = useNavigate()

    //bring into context for deployment
    let { recipe_id } = useParams()

    //initial form state for recipe
    const initialRecipeState = {
        name: "",
        description: "",
        directions: "",
        ingredient1: "",
        measurement1: "",
    }

    //stores recipe info
    const [recipeInfo, setRecipeInfo] = useState(initialRecipeState)

    const [ingredientNumber, setIngredientNumber] = useState([1])

    //get existing recipe info from database and set ingredient form length to existing ingredients
    useEffect(() => {
        const GetData = async () => {
            const response = await axios.get(`${BASE_URL}/api/recipes/${recipe_id}`)
            setRecipeInfo(response.data)
            let testNullArr = []
            let entryExists = true
            for (let i = 1; entryExists && i < 21; i++) {
                if (response.data[`ingredient${i}`] !== null) {
                    testNullArr.push(i)
                } else {
                    entryExists = false
                }            
            }
            setIngredientNumber(testNullArr)
        }
        GetData()
    }, [])


    // Add new ingredient field
    const addIngredientField = () => {
        if (ingredientNumber.length < 20) {
            let n = ingredientNumber.length + 1
            setIngredientNumber([...ingredientNumber, n])
            setRecipeInfo({...recipeInfo, ['ingredient' + (ingredientNumber.length +1)]: "", ['measurement' + (n)]: ""})
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
            setRecipeInfo({...recipeInfo, ['ingredient' + (n)]: null, ['measurement' + (n)]: null})
            }
        }

    //Put recipe changes into database
    const UpdateRecipe = async(data) => {
        try {
            const response = await axiosCreate.put(`/api/recipes/${recipeInfo.id}`, data)
            return response.data
        } catch (error) {
            throw error
        }
    }

    //update recipeInfo when there is input in the forms
    const handleChange = (event) => {
        setRecipeInfo({...recipeInfo, [event.target.id]: event.target.value})
    }

    // submit form changes
    const handleSubmit = async (event) => {
        event.preventDefault()
        await UpdateRecipe(recipeInfo)
        setRecipeInfo(initialRecipeState)
        setIngredientNumber([1])
        navigate(`/displayrecipe/${recipe_id}`)
    }


    return (
        <div className="update-recipe-wrapper">
            <h1>Update Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Recipe Name:</label>
                    <input style={{width: "300px" }} type="text" id="name" onChange={handleChange} placeholder="placeholder" value={recipeInfo.name}></input>
                </div>
                <div>
                <label htmlFor="">Description:</label>
                <input style={{width: "500px", paddingBottom:"100px" }} type="text" id="description" onChange={handleChange}placeholder="placeholder" value={recipeInfo.description}></input>
                </div>
                <div>
                <label htmlFor="">Ingredients:</label>                    
                    {ingredientNumber.map((e) => 
                        <div key={e}>
                            <label htmlFor="">Ingredient:</label>
                            <input style={{width: "300px"}} type="text" id={'ingredient'+ e} onChange={handleChange}placeholder="placeholder" value={recipeInfo['ingredient' + e]}></input>
                            <label htmlFor="">Amount:</label>
                            <input type="text" id={'measurement' + e} onChange={handleChange}placeholder="placeholder" value={recipeInfo['measurement' + e]}></input>
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
                <input style={{width: "500px", paddingBottom:"100px" }} type="text" id="directions" onChange={handleChange}placeholder="placeholder" value={recipeInfo.directions}></input>
                </div>
                <button type="submit">Update Recipe</button>
            </form>
        </div>
    )
}
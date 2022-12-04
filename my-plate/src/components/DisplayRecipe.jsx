import axios from 'axios'
import {React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Review from './Review'
import WriteReview from './WriteReview'

export default function DisplayRecipe () {

    const [recipe, setRecipe]= useState({})
    const [user,setUser]=useState({})
    const [reviews, setReviews] = useState([])
    // const recipeId = userParams()
    let { id } = useParams() 
    useEffect(()=>{
        const getRecipe = async ()=>{
            const response = await axios.get(`http://localhost:3001/api/recipes/${id}`);
            
            setRecipe(response.data)

            const response2= await axios.get(`http://localhost:3001/api/users/${response.data.user_id}`)
            setUser(response2.data)

            const response3= await axios.get(`http://localhost:3001/api/reviews/by-recipe/${response.data.id}`)
            setReviews(response3.data)
            console.log(`please hold`)
    };
getRecipe()
},[])

console.log(recipe.id)
    return (
        <div className="test-wrapper">
            <h3>Display Recipe</h3>
            <h2>{recipe.name} by {user.username} </h2>
            <p>{recipe.description}</p>
            <hr></hr>
            <ul>
                <div>{recipe.ingredient1}</div>
                <div>{recipe.ingredient2}</div>
                <div>{recipe.ingredient3}</div>
                <div>{recipe.ingredient4}</div>
                <div>{recipe.ingredient5}</div>
                <div>{recipe.ingredient6}</div>
                <div>{recipe.ingredient7}</div>
                <div>{recipe.ingredient8}</div>
                <div>{recipe.ingredient9}</div>
                <div>{recipe.ingredient10}</div>
                <div>{recipe.ingredient11}</div>
                <div>{recipe.ingredient12}</div>
                <div>{recipe.ingredient13}</div>
                <div>{recipe.ingredient14}</div>
                <div>{recipe.ingredient15}</div>
                <div>{recipe.ingredient16}</div>
                <div>{recipe.ingredient17}</div>
                <div>{recipe.ingredient18}</div>
                <div>{recipe.ingredient19}</div>
                <div>{recipe.ingredient20}</div>
            </ul>
            <ul>
            <div>{recipe.measurement1}</div>
                <div>{recipe.measurement2}</div>
                <div>{recipe.measurement3}</div>
                <div>{recipe.measurement4}</div>
                <div>{recipe.measurement5}</div>
                <div>{recipe.measurement6}</div>
                <div>{recipe.measurement7}</div>
                <div>{recipe.measurement8}</div>
                <div>{recipe.measurement9}</div>
                <div>{recipe.measurement10}</div>
                <div>{recipe.measurement11}</div>
                <div>{recipe.measurement12}</div>
                <div>{recipe.measurement13}</div>
                <div>{recipe.measurement14}</div>
                <div>{recipe.measurement15}</div>
                <div>{recipe.measurement16}</div>
                <div>{recipe.measurement17}</div>
                <div>{recipe.measurement18}</div>
                <div>{recipe.measurement19}</div>
                <div>{recipe.measurement20}</div>
            </ul>
            <p>{recipe.directions}</p>
            <hr></hr>
            <h2>show reviews here</h2>
            <Review recipe_id={recipe.id} />
            <WriteReview recipe_id={recipe.id} />
        </div>
    )
}
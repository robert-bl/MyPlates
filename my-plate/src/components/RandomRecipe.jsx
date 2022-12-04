import axios from 'axios'
import { useEffect, useState } from 'react'

export default function RandomRecipe () {

    const [recipe, setRecipe]= useState({})
    const [user,setUser]=useState({})
    let userId = recipe.user_id

    useEffect(()=>{
        const getRecipe = async ()=>{
            try{
            const response = await axios.get(`http://localhost:3001/api/recipes/3`);
            
            setRecipe(response.data)

            const response2= await axios.get(`http://localhost:3001/api/users/${response.data.user_id}`)
            setUser(response2.data)

            // const response3= await axios.get(`http://localhost:3001/api/reviews/`)
        } catch(e){
            console.log(`please hold`)
        }
    };
getRecipe()
},[])

console.log(recipe)
    return (
        <div className="test-wrapper">
            <h3>random</h3>
            <h2>{recipe.name} by user {user.username} </h2>
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
        </div>
    )
}
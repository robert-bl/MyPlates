import axios from 'axios'
import {React, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Review from './Review'
import WriteReview from './WriteReview'
import DeleteRecipe from './DeleteRecipe'
export default function DisplayRecipe () {

    let navigate = useNavigate()

    const [recipe, setRecipe]= useState(null)
    // const [user,setUser]=useState({})

    //can be removed, reviews now displaying through linked review component
        // const [reviews, setReviews] = useState([])

    // const recipeId = userParams()
    let { id } = useParams() 
    useEffect(()=>{
        const getRecipe = async ()=>{
            try{
            const response = await axios.get(`http://localhost:3001/api/recipes/${id}`);
        
            setRecipe(response.data)

            // const response2= await axios.get(`http://localhost:3001/api/users/${response.data.user_id}`)
            // setUser(response2.data)

        //can be removed, reviews now displaying through linked review component
            // const response3= await axios.get(`http://localhost:3001/api/reviews/by-recipe/${response.data.id}`)
            // setReviews(response3.data)
            // console.log(`please hold`)
        } catch(e){
            console.log(`please hold`)
        }
    };
getRecipe()
},[])

//has issue with axios call, the controller merges two tables Recipes and Users causing a delay in promise. citing anything from associated table causes it to crash during the initial of the page
const goToUpdate = () => {
    navigate(`/updaterecipe/${id}`)
}

    return (
        (!recipe)?
        <h2>Loading...</h2>
        :
        <div className="test-wrapper">
            <h3>Display Recipe</h3>
            <h2>
            {recipe.name} by {recipe.user.username} 
            </h2>
            <button onClick={(event) => {
                event.preventDefault()
                goToUpdate()
            }}>Update Recipe</button>
            <p>{recipe.description}</p>
            <hr></hr>
            <ul>
                <div className="display-ingredient">
                    <div>{recipe.ingredient1}</div>
                    <div>{recipe.measurement1}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient2}</div>
                    <div>{recipe.measurement2}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient3}</div>
                    <div>{recipe.measurement3}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient4}</div>
                    <div>{recipe.measurement4}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient5}</div>
                    <div>{recipe.measurement5}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient6}</div>
                    <div>{recipe.measurement6}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient7}</div>
                    <div>{recipe.measurement7}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient8}</div>
                    <div>{recipe.measurement8}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient9}</div>
                    <div>{recipe.measurement9}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient10}</div>
                    <div>{recipe.measurement10}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient11}</div>
                    <div>{recipe.measurement11}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient12}</div>
                    <div>{recipe.measurement12}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient13}</div>
                    <div>{recipe.measurement13}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient14}</div>
                    <div>{recipe.measurement14}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient15}</div>
                    <div>{recipe.measurement15}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient16}</div>
                    <div>{recipe.measurement16}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient17}</div>
                    <div>{recipe.measurement17}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient18}</div>
                    <div>{recipe.measurement18}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient19}</div>
                    <div>{recipe.measurement19}</div>
                </div>
                <div className="display-ingredient">
                    <div>{recipe.ingredient20}</div>
                    <div>{recipe.measurement20}</div>
                </div>
            </ul>
            <p>{recipe.directions}</p>
            <hr></hr>
            <h2>show reviews here</h2>
            <Review recipe_id={recipe.id} />
             {/* <button><Link to='/reviews' className="link">Check reviews</Link></button> */}
            <WriteReview id={id} />
            <DeleteRecipe id={id}/>
        </div>
    )
}
import axios from 'axios'
import {React, useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Review from './Review'
import WriteReview from './WriteReview'
import DeleteRecipe from './DeleteRecipe'
import { useContext } from "react"
import { DataContext } from "../DataContext"
import '../styling/recipe-and-review.css'


export default function DisplayRecipe () {

    let navigate = useNavigate()

    const { user } = useContext(DataContext)

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
 
console.log(recipe)

//has issue with axios call, the controller merges two tables Recipes and Users causing a delay in promise. citing anything from associated table causes it to crash during the initial of the page
const goToUpdate = () => {
    navigate(`/updaterecipe/${id}`)
}

    return (
        (!recipe)?
        <h2>Loading...</h2>
        :
        <div className="display-recipe-wrapper">
            <div className='recipe-title'>
            {recipe.name} 
            </div>
            <div>
            by <Link to={`/user/${recipe.user.id}`} className="link">{recipe.user.username}</Link>
            </div>

            {!user? null:(user.id === recipe.userId ?
            <button onClick={(event) => {
                event.preventDefault()
                goToUpdate()
            }}>Update Recipe</button>
            :
            null
            // <div>Login as {recipe.user.username} to edit</div>
            )}
            
            <div className="description-wrapper">
                <div className="diplay-recipe-section-header">
                    About this Recipe:
                </div>
                <img src={recipe.imgUrl} />
                <div>{recipe.description}</div>
            </div>

            <hr></hr>
            <div className="ingredients-direction-wrapper">
                <div className="ingredients-wrapper">
                    <div className="diplay-recipe-section-header">
                        Ingredients:
                    </div>

                    <div className='display-ingredient'>
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
            </div>
                </div>
                <div className="directions-wrapper">
                    <div className="diplay-recipe-section-header">
                        Directions:
                    </div>
                    <div>{recipe.directions}</div>
                </div>
            </div>

            <hr></hr>

            <Review recipe_id={recipe.id} />
             {/* <button><Link to='/reviews' className="link">Check reviews</Link></button> */}

            {!user ? <Link to="/login" className="link">Login to write a review</Link> : <WriteReview id={id} />}
           
        </div>
    )
}
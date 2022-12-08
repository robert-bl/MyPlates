import axios from 'axios'
import { useEffect, useState } from 'react'
import Review from './Review'
import { useNavigate } from 'react-router-dom'

export default function RandomRecipe () {

    const navigate = useNavigate()
    const [recipe, setRecipe]= useState(null)
    // const [user,setUser]=useState({})
    // let userId = recipe.user_id
    //const [randomRecipe, setRandomRecipes]=[recipe[Math.floor(Math.random()*recipe.length)]]
  

    useEffect(()=>{
        const getRecipe = async ()=>{
            try{
            const response = await axios.get(`http://localhost:3001/api/recipes/`);

            console.log(response)
            const random = Math.floor(Math.random()*response.data.length) 
            
            setRecipe(response.data[random])
            navigate(`/displayrecipe/${recipe.id}`)
                    // test switch //
            // const response2 = await axios.get(`http://localhost:3001/api/recipes/1`);
            // setRecipe(response.data)
            // const response2= await axios.get(`http://localhost:3001/api/users/${response.data.user_id}`)
            // setUser(response2.data)

            // const response3= await axios.get(`http://localhost:3001/api/reviews/`)
        } catch(e){
            console.log(`please hold`)
        }
    };
getRecipe()

},[recipe])
 //hi

    return ( 
        (!recipe)?
    <h2>Loading...</h2>
    : null
        // <div className="test-wrapper">
        //     <h3>random</h3>
        //     <h2>{recipe.name} by {recipe.user.username} </h2>
        //     <p>{recipe.description}</p>
        //     <hr></hr>
            // <div className='display-ingredient'>
            // <ul>
            //     <div>{recipe.ingredient1}</div>
            //     <div>{recipe.ingredient2}</div>
            //     <div>{recipe.ingredient3}</div>
            //     <div>{recipe.ingredient4}</div>
            //     <div>{recipe.ingredient5}</div>
            //     <div>{recipe.ingredient6}</div>
            //     <div>{recipe.ingredient7}</div>
            //     <div>{recipe.ingredient8}</div>
            //     <div>{recipe.ingredient9}</div>
            //     <div>{recipe.ingredient10}</div>
            //     <div>{recipe.ingredient11}</div>
            //     <div>{recipe.ingredient12}</div>
            //     <div>{recipe.ingredient13}</div>
            //     <div>{recipe.ingredient14}</div>
            //     <div>{recipe.ingredient15}</div>
            //     <div>{recipe.ingredient16}</div>
            //     <div>{recipe.ingredient17}</div>
            //     <div>{recipe.ingredient18}</div>
            //     <div>{recipe.ingredient19}</div>
            //     <div>{recipe.ingredient20}</div>
            // </ul>
            // <ul>
            // <div>{recipe.measurement1}</div>
            //     <div>{recipe.measurement2}</div>
            //     <div>{recipe.measurement3}</div>
            //     <div>{recipe.measurement4}</div>
            //     <div>{recipe.measurement5}</div>
            //     <div>{recipe.measurement6}</div>
            //     <div>{recipe.measurement7}</div>
            //     <div>{recipe.measurement8}</div>
            //     <div>{recipe.measurement9}</div>
            //     <div>{recipe.measurement10}</div>
            //     <div>{recipe.measurement11}</div>
            //     <div>{recipe.measurement12}</div>
            //     <div>{recipe.measurement13}</div>
            //     <div>{recipe.measurement14}</div>
            //     <div>{recipe.measurement15}</div>
            //     <div>{recipe.measurement16}</div>
            //     <div>{recipe.measurement17}</div>
            //     <div>{recipe.measurement18}</div>
            //     <div>{recipe.measurement19}</div>
            //     <div>{recipe.measurement20}</div>
            // </ul>
            // </div>
        //     <p>{recipe.directions}</p>
        //     <div>
        //         <Review/>
        //     </div>
        // </div>
    )
}
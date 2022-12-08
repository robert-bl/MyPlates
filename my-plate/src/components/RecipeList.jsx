import axios from 'axios'
import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import "../styling/recipe-list.css"

export default function RecipeList () {
    const [recipe, setRecipe]= useState([])
    // const [user,setUser]=useState([])
    //let userId = recipe.user_id
    const navigate = useNavigate();
    useEffect(()=>{
        const getRecipe = async ()=>{
            try{
            const response = await axios.get(`http://localhost:3001/api/recipes/`);
            setRecipe(response.data)
           // const response2= await axios.get(`http://localhost:3001/api/users/`)
            // setUser(response2.data)

            // const response2= await axios.get(`http://localhost:3001/api/users/profiles`)
            // setUser(response2.data)
            // const response3= await axios.get(`http://localhost:3001/api/reviews/`)
        } catch(e){
            console.log(`please hold`)
        }
    };
getRecipe()

},[])

const goToRecipe = (x)=>{
    console.log(x.id)
    navigate(`/displayrecipe/${x.id}`)
    // navigate(`/randomrecipe`)
}
const goToUser = (x)=>{
    navigate(`/user/${x.user.id}`)
}

console.log(recipe)
// console.log(user[1])
// console.log(user)
    return (
        (!recipe)?
        <h2>Loading...</h2>
        :
        <div className="recipe-list-page">
        <h3>RecipeList</h3>
            <div className='recipe-list'>
                {recipe.map((x)=>(
                    <div onClick={()=>goToRecipe(x)} key={x.id} className='recipe-list-item test-wrapper'>
                        <div className='recipe-list-item-title'>{x.name}</div>
                        <div className='recipe-list-item-user'>by {x.user.username}</div>
                    </div>
                ))}
            </div>
            <img src='https://media.tenor.com/m6WOQkmX3wQAAAAi/tkthao219-bubududu.gif' width={300} height={300} style={{display:"block", marginLeft:"auto",marginRight:'auto'}}/>
        </div>
    )
}
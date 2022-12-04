import axios from 'axios'
import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"

export default function RecipeList () {
    const [recipe, setRecipe]= useState([])
    const [user,setUser]=useState([])
    //let userId = recipe.user_id
    const navigate = useNavigate();
    useEffect(()=>{
        const getRecipe = async ()=>{
            try{
            const response = await axios.get(`http://localhost:3001/api/recipes/`);
            setRecipe(response.data)

            const response2= await axios.get(`http://localhost:3001/api/users/`)
            setUser(response2.data)
            console.log(response2)
            // const response3= await axios.get(`http://localhost:3001/api/reviews/`)
        } catch(e){
            console.log(`please hold`)
        }
    };
getRecipe()

},[])

const goToRecipe = (x)=>{
    // navigate(`/displayrecipe/${x.id}`)
    navigate(`/randomrecipe`)
}

console.log(user[1])
// console.log(user)
    return (
        <div className="test-wrapper">
        <h3>RecipeList</h3>
        <div >{
            recipe.map((x)=>(
                <div onClick={()=>goToRecipe()}>{x.name} </div>
            ))
            }</div>
        </div>
    )
}
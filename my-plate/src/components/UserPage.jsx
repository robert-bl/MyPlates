import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams, useNavigate} from "react-router-dom"

export default function UserPage () {
    const [user,setUser]=useState(null)
    const navigate = useNavigate();
    let {id}=useParams()

    useEffect(()=>{
        const getRecipe = async ()=>{
            try{
            const response = await axios.get(`http://localhost:3001/api/users/get-user-and-recipes/${id}`);
        
            setUser(response.data)
            console.log(response)
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

return (
    (!user)?
    <h2>Loading...</h2>
    :
    <div className="test-wrapper">
        <h3>User's Page</h3>
        <h2>Welcome to {user.username}'s cookbook </h2>
        <hr></hr>
        <div>
            {
                user.recipe.map((x)=>(
                    <div onClick={()=>goToRecipe(x)} key={x.id}>{x.name} </div>
                ))
            }
        </div>
    </div>
)

//Sample Auth protection code
// return (user && authenticated) ? (
//     <div>
//         <h1>Display</h1>
//     </div>
// ) : (
//     <div>
//         <h1>Protected</h1>
//         <button>Navigate to login</button>
//     </div>
// )

}
import { useNavigate } from 'react-router-dom'
import{ useState, useEffect } from 'react'
import axiosCreate from '../services/apiServices'



export default function Review () {
    const [reviews, setReviews] = useState(null)
   

    useEffect(()=>{

        const getData= async()=>{
            const response =await axiosCreate.get('/api/reviews')
            setReviews(response.data)
            
            
        }
        getData()
    },[])
   
let navigate = useNavigate()
const showReviews=(reviews)=>{
    navigate(`${reviews.id}`)
}


if(!reviews){
    return <h2>Loading....</h2>
}else{
    return(
        <div>
        {
            reviews.map((review)=>(
            <div key={review.id} className='reviewlist' onClick={()=>showReviews(review)}>

            <h2>Current recipe has an user Id of {review.user_id} and review id of {review.recipe_id}. Reviewer states that the recipe was {review.rating} out of 5 and they said that {review.comment}  </h2>
           
            


            </div>
            ))
        }
        </div>
    )
}
}
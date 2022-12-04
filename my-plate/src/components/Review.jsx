import { useNavigate } from 'react-router-dom'
import{ useState, useEffect } from 'react'
import axiosCreate from '../services/apiServices'



export default function Review (props) {
    const [reviews, setReviews] = useState(null)

    useEffect(()=>{
        const getData= async()=>{
            let num = props.recipe_id
            console.log(`num is ${num}`)
            if (num) {
            const response = await axiosCreate.get(`api/reviews/by-recipe/${num}`)
            setReviews(response.data)
            console.log('hit')
            }
        }
        getData()
    },[props])


let navigate = useNavigate()

const showReviews=(reviews)=>{
    navigate(`${reviews.id}`)
}


if(reviews){
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

}else{
    return <h2>No Reviews To Display</h2>
}
}
import { useNavigate } from 'react-router-dom'
import{ useState, useEffect } from 'react'
import axiosCreate from '../services/apiServices'



export default function Review (props) {
    const [reviews, setReviews] = useState(null)
    let finalAverage
    

    useEffect(()=>{
        const getData= async()=>{

        //if statement works with uesEffect props dependency to make sure that the axios call only gets made after a valid recipe_id is passed in from DisplayRecipe
            if (props.recipe_id) {
            const response = await axiosCreate.get(`/api/reviews/by-recipe/${props.recipe_id}`)
            setReviews(response.data)
            console.log('hit')
            }
        }
        getData()
    },[props])


let navigate = useNavigate()

const showReviews=(reviews)=>{
    navigate(`/reviews/${reviews.id}`)
}
function getAverage(){
    let box =[]
    let averageAdd = 0
    let penultAverage
    reviews.map((review)=>{
        box.push(review.rating)
    })
    for (let i = 0; i < box.length; i++) {
        averageAdd += box[i]
        penultAverage = averageAdd/(box.length)
        finalAverage= Math.round(penultAverage * 100) / 100


      }

    return finalAverage
}


function getAverage(){
    let box =[]
    let averageAdd = 0
    let penultAverage
    reviews.map((review)=>{
        box.push(review.rating)
    })
    for (let i = 0; i < box.length; i++) {
        averageAdd += box[i]
        penultAverage = averageAdd/(box.length)
        finalAverage= Math.round(penultAverage * 100) / 100


      }
    
    return finalAverage
}


if(reviews){
    getAverage()
    return(
        <div>
        <div>
        {
            reviews.map((review)=>(
            <div key={review.id} className='reviewlist' onClick={()=>showReviews(review)}>

            <h2>Current recipe has an user Id of {review.user_id} and recipe id of {review.recipe_id}. Reviewer states that the recipe was {review.rating} out of 5 and they said that {review.comment}  </h2>


            </div>
            ))

            
        }
        </div>
        <div>

        <h2>This recipe has an average review of {finalAverage} stars</h2>
        
        </div>
        </div>
    )

}else{
    return <h2>No Reviews To Display</h2>
}
}
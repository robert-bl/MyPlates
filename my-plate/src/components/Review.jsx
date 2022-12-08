import { useNavigate } from 'react-router-dom'
import{ useState, useEffect } from 'react'
import axiosCreate from '../services/apiServices'
import { FaStar } from 'react-icons/fa'
import '../styling/recipe-and-review.css'


export default function Review (props) {
    const [reviews, setReviews] = useState(null)
    let finalAverage = 0
    

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

console.log(reviews)

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
        (() => {
            if(finalAverage===0) {
                    return (
                        <div>No current reviews</div>
                    )
                
                } else {
                    return (
                        <div className='rating-average'>This recipe has an average review of 
                        {finalAverage} <FaStar size={30} color="gold"/> stars</div> 
                    )
                }
        })()  
    }
            
        </div>
        <div className='reviews'>
        <h4>You may edit your review by clicking on it</h4>

        <div>Reviews:</div>
        {
            reviews.map((review)=>(
            <div key={review.id} className='reviewlist' onClick={()=>showReviews(review)}>

            <div>{review.user.username} states that the recipe was {review.rating} out of 5 <FaStar size={20} color="gold"/> and they said that {review.comment}  </div>
            </div>
            ))

            
        }
        </div>

    
        </div>
    )

}else{
    return <h2>No Reviews To Display</h2>
}
}
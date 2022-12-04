import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axiosCreate from '../services/apiServices'



export default function ReviewDetails () {
        let { id } = useParams()
  
        const [reviews, setReviews] = useState('')
       
        const getReviews= async ()=>{
            const response =await axiosCreate.get('/api/reviews/')
            setReviews(response.data)
            console.log(response.data)
          
          let selectedReviews =response.data.find(reviews=>reviews.id===id)
          setReviews(selectedReviews)
          
          }
    
        useEffect(()=>{
            getReviews()
            
          })
      
          
        return (reviews) ? (
        <div className="reviewdetail">{
    
            
                <div key={reviews.id}>
                    <h2>Current recipe has an user Id of {reviews.user_id} and review id of {reviews.recipe_id}. Reviewer states that the recipe was {reviews.comment} out of 5 and they said that {reviews.comment}  </h2>
                
    
                 </div>
    
            
        }
          
  <div>
                
                <div className='returnbutton'>
                <button className='tohome'><Link to='/'> Home </Link> </button>
                <button className='recipe'><Link to='/recipes'> Back </Link> </button>
                </div>
              </div>
    </div>
    ) : <div>loading</div>;
    
}
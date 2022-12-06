import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axiosCreate from '../services/apiServices'
import DeleteReview from './DeleteReview'
import UpdateReview from './UpdateReview'
import { useNavigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'



export default function ReviewDetails () {
        let { id } = useParams()
        let navigate = useNavigate()

        function backToRecipes(){
          navigate(`/displayrecipe/${reviews.recipeId}`)
        }
        
      
        const [reviews, setReviews] = useState('')
       
        const getReviews= async ()=>{
            const response =await axiosCreate.get(`/api/reviews/${id}`)
            setReviews(response.data)
            
          
          }
    
        useEffect(()=>{
            getReviews()
            
          },[])
      
          console.log(reviews)

          
        return (reviews) ? (
        <div className="reviewdetail">{
    
            
                <div key={reviews.id}>
                    <h2> {reviews.user.username} states that the recipe was {reviews.rating} out of 5 <FaStar size={20} color="gold" /> and they said that {reviews.comment}  </h2>
                
    
                 </div>
    
            
        }
          
  <div>
                
                <div className='returnbutton'>
                <button className='tohome'><Link to='/'> Home </Link> </button>
                <button onClick={backToRecipes} className='recipe'>Back</button>
                <UpdateReview id={id}/>
                <DeleteReview id={id} recipeId={reviews.recipe_id}/>
                </div>
              </div>
    </div>
    ) : <div>loading</div>;
    
}
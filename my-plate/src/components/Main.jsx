import Register from './Register'
import Landing from './Landing'
import CreateRecipe from './CreateRecipe'
import RecipeList from './RecipeList'
import RandomRecipe from './RandomRecipe'
import SignIn from './SignIn'
import WriteReview from './WriteReview'
import Review from './Review'
import ReviewDetails from './ReviewDetails'
// import DeleteReview from './DeleteReview'
import DisplayRecipe from './DisplayRecipe'
import UpdateRecipe from './UpdateRecipe'
// import DeleteRecipe from './DeleteRecipe'

import UserPage from './UserPage'


import { Route, Routes } from 'react-router-dom'

export default function Main () {

    
    return (
        <div className="main-wrapper">
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/register" element={<Register />}/>
                <Route path='/login' element={<SignIn/>}/>
                <Route path='/createrecipe' element={<CreateRecipe/>}/>
                <Route path='/recipelist' element ={<RecipeList/>}/>
                <Route path='/randomrecipe' element={<RandomRecipe/>}/>
                <Route path='reviewpost' element={<WriteReview/>}></Route>
                <Route path='reviews' element={<Review/>}></Route>
                <Route path='reviews/:id' element={<ReviewDetails/>}/>
                {/* <Route path="deletereview" element={<DeleteReview/>}/> */}
                <Route path="displayrecipe/:id" element={<DisplayRecipe/>}/>
                <Route path="/updaterecipe/:recipe_id" element={<UpdateRecipe />} />
                {/* <Route path="deleterecipe" element={<DeleteRecipe/>}/> */}
                <Route path="user/:id"
                element={<UserPage/>} />
            </Routes>
        </div>
    )
}
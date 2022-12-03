import Register from './Register'
import Landing from './Landing'
import CreateRecipe from './CreateRecipe'
import RecipeList from './RecipeList'
import RandomRecipe from './RandomRecipe'
import SignIn from './SignIn'

import { Route, Routes } from 'react-router-dom'

export default function Main () {
    return (
        <div className="test-wrapper">
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/register" element={<Register />}/>
                <Route path='/login' element={<SignIn/>}/>
                <Route path='/createrecipe' element={<CreateRecipe/>}/>
                <Route path='/recipelist' element ={<RecipeList/>}/>
                <Route path='/randomrecipe' element={<RandomRecipe/>}/>

            </Routes>
        </div>
    )
}
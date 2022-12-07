import { useEffect, useState } from 'react'
import { DataContext } from './DataContext';
import Header from './components/Header'
import Main from './components/Main'
import './styling/App.css';
import axiosCreate from './services/apiServices';

function App() {

  //Auth
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const CheckSession = async () => {
    try {
      const res = await axiosCreate.get('/api/users/session')
      return res.data
    } catch (error) {
      throw error
    }
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])



  //placeholder state variable for Context setup
  // const [userInfo, setUserInfo] = useState({
  //   userId: 1,
  //   username: ""
  // })
  // const [recipeInfo, setRecipeInfo] = useState({
  //   recipeId: 1,
  // })



  return (
    <div className="App">
      <DataContext.Provider value={{authenticated, toggleAuthenticated, user, setUser, handleLogOut}}>
        <Header />
        <Main />
      </DataContext.Provider>
    </div>
  );
}

export default App;
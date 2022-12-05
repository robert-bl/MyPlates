import { useState } from 'react'
import { DataContext } from './DataContext';

import Header from './components/Header'
import Main from './components/Main'
import './App.css';

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

  //placeholder state variable for Context setup
  const [userInfo, setUserInfo] = useState({
    userId: 1,
    username: ""
  })
  const [recipeInfo, setRecipeInfo] = useState({
    recipeId: 1,
  })



  return (
    <div className="App">
      <DataContext.Provider value={{userInfo, setUserInfo,recipeInfo, setRecipeInfo, authenticated, toggleAuthenticated, user, setUser, handleLogOut}}>
        <Header />
        <Main />
      </DataContext.Provider>
    </div>
  );
}

export default App;
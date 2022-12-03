import { useState } from 'react'
import { DataContext } from './DataContext';

import Header from './components/Header'
import Main from './components/Main'
import './App.css';

function App() {

  //placeholder state variable for Context setup
  const [userInfo, setUserInfo] = useState({
    userId: 1,
    username: ""
  })

  return (
    <div className="App">
      <DataContext.Provider value={{userInfo, setUserInfo}}>
        <Header />
        <Main />
      </DataContext.Provider>
    </div>
  );
}

export default App;
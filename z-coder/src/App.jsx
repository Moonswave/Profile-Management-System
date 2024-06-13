import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Home2 from './Home2'
import Login from './Login'
import Signin from './Signin'
import Profile from './Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home2/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Signin/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App

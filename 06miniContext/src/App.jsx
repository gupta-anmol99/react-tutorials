import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Context API</h1>
    <UserContextProvider id={1024}>
      <Login />
      <Profile />
    </UserContextProvider>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from './config/authcontext'

function App() {

  const {isAuthenticated} = useAuth;
  console.log(isAuthenticated);
  return (
    <>
      <Toaster/>
      <button onClick={()=>{
        toast.error("You clicked")
      }}>Click ME</button>
    </>
  )
}

export default App

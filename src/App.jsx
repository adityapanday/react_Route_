import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './Component/Headers/Header'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-green-600 p-4' >React router</h1> */}
      <Headers/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App

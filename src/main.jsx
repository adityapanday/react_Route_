import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/about.jsx'
import Contact from './Component/Contact/Contact.jsx'
import User from './Component/User/User.jsx'
import { Route } from 'react-router-dom'
import Github from './Component/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     children:[
//       {
//           path:"/",
//           element:<Home/>
//       },
//       {
//         path:"/about",
//         element:<About/>
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])



const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>} />
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>} />
       <Route path='contact/:Userid/:Postid' element={<User/>} />
       <Route path='github' element={<Github/>} />

       
    </Route>
  )
) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

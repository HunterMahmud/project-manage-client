import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import NewUser from './components/NewUser';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/users',
    element: <NewUser></NewUser>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

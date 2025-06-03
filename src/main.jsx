import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Allitems from './pages/Allitems.jsx';
import AddItems from './pages/AddItems.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ItemDetails from './pages/ItemDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/all-items",
        element:<Allitems></Allitems>
      },
      {
        path: "/all-items/:id",
        element: <ItemDetails></ItemDetails>
      },
      {
        path: "/add-items",
        element: <AddItems></AddItems>
      },
      {
      
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

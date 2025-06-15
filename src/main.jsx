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
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/items")
      },
      {
        path: "/all-items",
        element: <Allitems></Allitems>,
        loader: () => fetch("http://localhost:5000/items")

      },
      {
        path: "/all-items/:id",
        element: <PrivateRoute><ItemDetails></ItemDetails></PrivateRoute>
      },
      {
        path: "/add-items",
        element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

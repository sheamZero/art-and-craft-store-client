import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Allitems from './pages/Allitems.jsx';
import AddItems from './pages/AddItems.jsx';
import MyItems from './pages/MyItems.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ItemDetails from './pages/ItemDetails.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import UpdateItem from './pages/UpdateItem.jsx';
import SubcategoriesCard from './components/SubcategoriesCard.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://art-and-craft-store-server-kohl.vercel.app/items")
      },
      {
        path: "/all-items",
        element: <Allitems></Allitems>,
        loader: () => fetch("https://art-and-craft-store-server-kohl.vercel.app/items")

      },
      {
        path: "/all-items/:id",
        element: <PrivateRoute><ItemDetails></ItemDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-and-craft-store-server-kohl.vercel.app/items/${params.id}`)
      },
      {
        path: "/add-items",
        element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
      },
      {
        path: "/my-items",
        element: <PrivateRoute><MyItems></MyItems></PrivateRoute>,
        loader: () => fetch("https://art-and-craft-store-server-kohl.vercel.app/items")
      },
      {
        path: "/my-items/:id",
        element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/subcategory/:sub_name",
        element: <SubcategoriesCard></SubcategoriesCard>
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

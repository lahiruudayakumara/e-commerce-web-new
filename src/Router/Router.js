import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import { Shop } from '../pages/Shop'
import SignUp from '../pages/SignUp'
import Cart from '../pages/Cart'
import { CheckOut } from '../pages/CheckOut'
import ProductDetails from '../pages/ProductDetails'
import { Login } from '../pages/Login'
import { Layout } from '../components/Layout/Layout'

const router  = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="Home" />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "Shop",
        element: <Shop />
      },
      {
        path: "SignUp",
        element: <SignUp />
      },
      {
        path: "Cart",
        element: <Cart />
      },
      {
        path: "CheckOut",
        element: <CheckOut />
      },
      {
        path: "ProductDetails/:Id",
        element: <ProductDetails />
      },
    ]
  },
  {
    path: "Login",
    element: <Login />
  }
])

export const Router = () => {
  return <RouterProvider router={router} />
}

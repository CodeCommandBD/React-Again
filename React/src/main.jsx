import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'milligram/dist/milligram.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom/client";
import Home from './pages/Home.jsx';
import Product from './pages/Product.jsx';
import Hero from './pages/Hero.jsx';
import Error from './pages/Error.jsx';
import ReactDom from './components/ReactDom.jsx';
import Signin from './pages/Signin.jsx';
import Profile from './pages/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ReactDom></ReactDom>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/hero",
        element: <Hero></Hero>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ]
  },


]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

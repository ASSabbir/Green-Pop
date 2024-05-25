import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Componetns/Root/Root";
import Home from "./Componetns/Home/Home";
import Products from "./Componetns/Products/Products";
import Details from "./Componetns/Home/Cards/Details";
import Abutus from "./Componetns/About us/Abutus";
import Login from "./Componetns/login/Login";
import Register from "./Componetns/login/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('https://green-pop-server.vercel.app/products')
      },
      {
        path:'/products',
        element:<Products></Products>,
        loader:()=>fetch('https://green-pop-server.vercel.app/products')
      },
      {
        path:'/plant/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`https://green-pop-server.vercel.app/item/${params.id}`)
      },
      {
        path:'/aboutus',
        element:<Abutus></Abutus>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<Register></Register>
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="font-poppins ">
    {/* <React.StrictMode> */}
      <RouterProvider router={router} />
    {/* </React.StrictMode> */}
    
  </div>
);

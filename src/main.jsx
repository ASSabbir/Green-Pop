import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Componetns/Root/Root";
import Home from "./Componetns/Home/Home";
import Products from "./Componetns/Products/Products";
import Details from "./Componetns/Home/Cards/Details";
import Abutus from "./Componetns/About us/Abutus";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('http://localhost:5000/products')
      },
      {
        path:'/products',
        element:<Products></Products>,
        loader:()=>fetch('http://localhost:5000/products')
      },
      {
        path:'/plant/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:5000/item/${params.id}`)
      },
      {
        path:'/aboutus',
        element:<Abutus></Abutus>
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

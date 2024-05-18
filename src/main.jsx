import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Componetns/Root/Root";
import Home from "./Componetns/Home/Home";
import Products from "./Componetns/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('data.json')
      },
      {
        path:'/products',
        element:<Products></Products>,
        loader:()=>fetch('data.json')
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="font-poppins ">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    
  </div>
);

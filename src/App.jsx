import { children } from "react";
import { lazy, Suspense } from "react";

import HeaderComponent from "./Components/Header";
import Body from "./Components/Body";
import "./App.css";
import React from "react";
import About from "../src/Components/About"
import Error from "./Components/Error"
import Contact from "./Components/Contact"
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from './Components/ProfileClass'
// import Mart from "./Components/Mart"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Code Splitting 
const Mart = lazy(() => import("./Components/Mart"));



function AppLayout(){
  return <>
  <HeaderComponent />
  <Outlet/>
  </>
}


export const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children : [
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
        children:[
          {
           path:'AppLayout/about/profile',
           element:<Profile/>
        }]
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurantMenu/:id",
        element:<RestaurantMenu/>
      },
      {
        path:"/instamart",
        element:(
          <Suspense fallback={<h1>Wait for load.......</h1>}>
            <Mart/>
          </Suspense>
        )
      }
    ]
  },
 
]);

const App = ()=>{
  return <RouterProvider router = {AppRouter}/>
}

export default App;
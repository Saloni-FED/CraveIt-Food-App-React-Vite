import { children } from "react";
import { lazy, Suspense } from "react";
import HeaderComponent from "./Components/Header";
import Body from "./Components/Body";
import "./App.css";
import React from "react";
import About from "../src/Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Profile from "./Components/ProfileClass";
// import FAQ from "./Components/FAQ";
import Cart from "./Components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../utils/ReduxStore/Store"

// Code Splitting
const FAQ = lazy(() => import("./Components/FAQ"));

function AppLayout() {
  return (
    <>
      <Provider store={store}>
        <HeaderComponent />
        <Outlet />
      </Provider>
    </>
  );
}

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "about/profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurantMenu/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/faq",
        element: (
          <Suspense>
            <FAQ fallback={<h1>Wait for a Moment</h1>} />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={AppRouter} />;
};

export default App;

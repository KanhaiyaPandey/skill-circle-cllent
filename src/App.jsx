import React, { use, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { layeoutLoader } from "./utils/loaders";
import LandingPage from "./pages/LandingPage";

const App = () => {


  const router = createBrowserRouter([
        {
        path: "/",
        element: <Layout/>,
        children: [
          {
            index: true,
            element: <Home/>,
          },
        ],
         loader : layeoutLoader
      },

      {
        path : "/landing",
        element : <LandingPage />,
      }
  ])

  return (

      <div className="poppins">
         <RouterProvider router={router} />
      </div>

  );
};

export default App;

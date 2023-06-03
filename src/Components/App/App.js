import React from "react";
import MasterLayout from "../MasterLayout/MasterLayout";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Details from "../Details/Details";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  //ROUTING
  let routes = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "details", element: <Details /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "./screens/Index";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Index />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
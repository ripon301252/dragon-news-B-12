import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx'
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import ContextAuthProvider from "./Router/ContextAuthProvider.jsx";




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextAuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextAuthProvider>
  </StrictMode>
);

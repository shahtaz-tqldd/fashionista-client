import React from 'react'
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { Toaster } from 'react-hot-toast';
import './assets/styles/colors.css'


function App() {
  return (
    <React.Fragment>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </React.Fragment>
  );
}

export default App;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Routes from './Routes/route.jsx'
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={Routes} />
  //  {/* </React.StrictMode>, */}
)

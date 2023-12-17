import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Navbar } from './Components/common/Navbar.jsx'
// import Footer from './Components/MUI/Footer.jsx'
// import Navbar from './Components/MUI/AppBar.jsx'
import MiniDrawer from './Components/MUI/Sidebar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    {/* <Navbar/> */}
    <MiniDrawer AppComponent={<App />} />
    {/* <App /> */}
    {/* <Footer /> */}
  </React.StrictMode>,
)

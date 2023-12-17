import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MiniDrawer from './Components/MUI/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MiniDrawer AppComponent={<App />} />
    {/* <App /> */}
  </React.StrictMode>,
)

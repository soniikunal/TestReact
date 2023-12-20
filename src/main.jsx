import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SlideNavbar from './Components/MUI/SlideNavbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SlideNavbar AppComponent={<App />} />
    {/* <App /> */}
  </React.StrictMode>,
)

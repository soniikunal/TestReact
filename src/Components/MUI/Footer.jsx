import React from 'react'
import "./common.css"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  return (
    <>
    <footer className="mainFooter">Footer</footer>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
    </>
  )
}

export default Footer
import React,{useEffect} from 'react'
import "./common.css"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     const message = 'Closing this tab will submit you Test!';
  //     event.returnValue = message; // Standard for most browsers
  //     return message; // For some older browsers
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

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
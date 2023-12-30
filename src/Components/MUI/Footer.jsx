import React, { useEffect } from "react";
import "./common.css";
import { ToastContainer } from "react-toastify";
import { Box, Container, Grid } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import isoImg1 from "../../assets/iso.svg";
import isoImg2 from "../../assets/iso2.svg";
import Typography from "@mui/joy/Typography";
import { spacing } from "@mui/system";

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
      <footer className="mainFooter">
        <Container>
          <Grid container spacing={2}>
            <Grid justifyContent="flex-start" xs={7}>
              <img src={isoImg1} alt="" />
              <img src={isoImg2} alt="" />
              <p
                style={{
                  display: "inline-block",
                  color: "white",
                  margin: "20px 0px",
                }}
              >
                ISO Certified: 9001 (QMS) &amp; 27001 (ISMS)
              </p>
            </Grid>

            <Grid xs={5} justifyContent="flex-end">
              <p
                style={{
                  display: "inline-block",
                  color: "white",
                  margin: "20px 0px",
                }}
              >
                © 2023 Fusion Business Solutions (P) Limited. All Rights
                Reserved
              </p>
            </Grid>
          </Grid>
        </Container>
      </footer>
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
  );
}

export default Footer;

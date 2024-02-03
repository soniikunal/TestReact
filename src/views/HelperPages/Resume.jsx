import React, { useState, useEffect } from "react";
import { CardContent } from "@mui/material";
import { Table, Sheet, Box, Card, Container, Typography, List, ListItem, Button } from '@mui/joy';
import "./helperPages.css";
import { formateDate, getTestUser } from "../../Utils/utils";
import { Link } from "react-router-dom";

// const formData = {
//   name: "John Doe",
//   department: "IT",
//   position: "Software Engineer",
//   test: "React",
//   fatherName: "Michael Doe",
//   dob: "1990-01-01",
//   email: "john.doe@example.com",
//   number: "123-456-7890",
// };

const Resume = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const userData = getTestUser();
    if (userData) {
      setFormData(JSON.parse(userData));
    }
  }, []);

  return (
    <Container maxWidth="" sx={{ height: 'calc(100vh-220px)', display: 'flex', width: 'auto' }}>
      <Card color="primary" size="md" variant="soft" className="mainCard">
        {/* <Container> */}
        {/* <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Resume
      </Typography> */}
        <Card
          color="neutral"
          invertedColors={false}
          orientation="horizontal"
          size="lg"
          variant="soft"
          sx={{ py: 0, marginBlock: 'auto', maxWidth: '1200px', flexDirection: "column" }}
        >
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography level="h3" gutterBottom >
                User Details
              </Typography>
              <Typography level="h3" gutterBottom >
                {formData.AppID}
              </Typography>
            </Box>
            <Card>
              <div className="innerCard">
                <Sheet className="mainInfo">
                  <Table>
                    <tbody>
                      {formData.name && (
                        <tr>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              Name:
                            </Typography>
                          </td>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              {formData.name}
                            </Typography>
                          </td>
                        </tr>
                      )
                      }
                      {formData.department && (
                        <tr>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              Department:
                            </Typography>
                          </td>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              {formData.department}
                            </Typography>
                          </td>
                        </tr>
                      )
                      }
                      {formData.position && (
                        <tr>
                          <td>
                            <Typography
                              level="title-md"
                              className="dataItem"
                            >
                              Position:
                            </Typography>
                          </td>
                          <td>
                            <Typography
                              level="title-md"
                              className="dataItem"
                            >
                              {formData.position}
                            </Typography>
                          </td>
                        </tr>
                      )}
                      {formData.test && (
                        <tr>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              Test:
                            </Typography>
                          </td>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              {formData.test}
                            </Typography>
                          </td>
                        </tr>
                      )
                      }
                      {formData.fatherName && (
                        <tr>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              Father's Name:
                            </Typography>
                          </td>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              {formData.fatherName}
                            </Typography>
                          </td>
                        </tr>
                      )
                      }
                      {formData.dob && (
                        <tr>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              DOB:
                            </Typography>
                          </td>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              {formData.dob && formateDate(formData.dob)}
                            </Typography>
                          </td>
                        </tr>
                      )
                      }
                      {formData.email && (
                        <tr>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              Email:
                            </Typography>
                          </td>{" "}
                          <td>
                            {" "}
                            <Typography level="title-md" className="dataItem">
                              {formData.email}
                            </Typography>
                          </td>
                        </tr>
                      )
                      }
                      {formData.number && (
                        <tr>
                          <td>
                            <Typography level="title-md" className="dataItem">
                              Mobile Number:
                            </Typography>
                          </td>{" "}
                          <td>
                            <Typography level="title-md" className="dataItem">
                              {formData.number}
                            </Typography>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Sheet>
              </div>
            </Card>
            <div className="buttonContainer">
              <Link to={"/Prescreening"}>
                <Button
                  size="lg"
                  variant="solid"
                >
                  Next &gt; &gt;
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
        {/* </Container> */}
      </Card>
    </Container>
  );
};

export default Resume;

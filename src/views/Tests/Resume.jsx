import React, { useState, useEffect } from "react";
import { CardContent, Typography, Container, Button, Box } from "@mui/material";
import { Card, Table, Sheet } from "@mui/joy";
import "./test.css";
import { formateDate, getTestUser } from "../../Utils/utils";
import { Link } from "react-router-dom";

const formData = {
  name: "John Doe",
  department: "IT",
  position: "Software Engineer",
  test: "React",
  fatherName: "Michael Doe",
  dob: "1990-01-01",
  email: "john.doe@example.com",
  number: "123-456-7890",
};

const Resume = () => {
  //   const [formData, setFormData] = useState({});

  // useEffect(() => {
  //   const userData = getTestUser();
  //   if (userData) {
  //     setFormData(JSON.parse(userData));
  //   }
  // }, []);

  return (
    <Container maxWidth="">
      <Card color="primary" size="md" variant="soft" className="mainCard">
        {/* <Container> */}
        {/* <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
        Resume
      </Typography> */}
        <Card className="outerCard">
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" gutterBottom fontSize="xl">
                User Details
              </Typography>
              <Typography variant="h6" gutterBottom fontSize="xl">
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
                          <Typography variant="subtitle1" className="dataItem">
                            Name:
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
                            {formData.name}
                          </Typography>
                        </td>
                      </tr>
                        )
                      }
                      {formData.department && (
                        <tr>
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
                            Department
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
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
                              variant="subtitle1"
                              className="dataItem"
                            >
                              Position:
                            </Typography>
                          </td>
                          <td>
                            <Typography
                              variant="subtitle1"
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
                          <Typography variant="subtitle1" className="dataItem">
                            Test:
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
                            {formData.test}
                          </Typography>
                        </td>
                      </tr>
                        )
                      }
                      {formData.fatherName && (
                        <tr>
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
                            Father's Name:
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
                            {formData.fatherName}
                          </Typography>
                        </td>
                      </tr>
                        )
                      }
                      {formData.dob && (
                        <tr>
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
                            DOB:
                          </Typography>
                        </td>
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
                            {formData.dob && formateDate(formData.dob)}
                          </Typography>
                        </td>
                      </tr>
                        )
                      }
                      {formData.email && (
                        <tr>
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
                            Email:
                          </Typography>
                        </td>{" "}
                        <td>
                          {" "}
                          <Typography variant="subtitle1" className="dataItem">
                            {formData.email}
                          </Typography>
                        </td>
                      </tr>
                        )
                      }
                      {formData.number &&(
                        <tr>
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
                            Mobile Number:
                          </Typography>
                        </td>{" "}
                        <td>
                          <Typography variant="subtitle1" className="dataItem">
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
              <Link to={"/startTest"}>
                <Button variant="contained" color="primary" size="large">
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

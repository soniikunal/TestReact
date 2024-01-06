import React, { useState, useEffect } from "react";
import { CardContent, Typography, Container, Button } from "@mui/material";
import { Card } from "@mui/joy";
import "./test.css";

const mockData = {
  name: "John Doe",
  department: "IT",
  position: "Software Engineer",
  test: "React",
  fatherName: "Michael Doe",
  dob: "1990-01-01",
  email: "john.doe@example.com",
  mobile: "123-456-7890",
};

const Resume = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(mockData);
  }, []);

  return (
    <Card color="primary" size="md" variant="soft" className="mainCard">
      <Container>
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          Resume
        </Typography>
        <Card className="outerCard">
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Test Details
            </Typography>
            <Card>
              <div className="innerCard">
                <div className="leftSide">
                  <Typography variant="subtitle1" className="dataItem">
                    Name:
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    Department:
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    Position:
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    Test:
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    Father's Name:
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    DOB:
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    Email:
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    Mobile Number:
                  </Typography>
                </div>
                <div className="rightSide">
                  <Typography variant="subtitle1" className="dataItem">
                    {formData.name}
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    {formData.department}
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    {formData.position}
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    {formData.test}
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    {formData.fatherName}
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    {formData.dob}
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    {formData.email}
                  </Typography>
                  <Typography variant="subtitle1" className="dataItem">
                    {formData.mobile}
                  </Typography>
                </div>
              </div>
            </Card>
            <div className="buttonContainer">
              <Button variant="contained" color="primary" size="large">
                Next &gt; &gt;
              </Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Card>
  );
};

export default Resume;
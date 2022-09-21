import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import "./welcome-page.css";

const WelcomePage = () => {
  return (
    <div className="main ">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h2 className="title"> Welcome to XYZ </h2>
              <h2 className="title"> Institution</h2>
              <p className="subtitle">We brings out the best from you. </p>
            </div>
            <div className="button-container">
              <a href="/studentSignup">
                <Button className=" landingButton">Student</Button>&emsp;&emsp;
              </a>
              <a href="/instituteSignup">
                <Button className=" landingButton" variant="outline-primary">
                  Institute
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePage;

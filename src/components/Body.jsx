import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Body.css"; 
import Contact from "./Contact";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="body-section py-5" id="body">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center">
            <img
              src={`/images/small.png`}
              alt="Project visual"
              className="img-fluid project-image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
          <Col className="text-left">
            <h3>MERN STACK DEVELOPER</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ea veniam a suscipit error ex in at fugit minus itaque!
            </p>
          </Col>
          <span className="borderLine"></span>
        </Row>
      </Container>
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="pt-5 about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="text-center mb-4">
            <h1>I'm Gokul G G</h1>
            <p>MERN Stack Developer</p>
          </Col>
          <Col md={12} className="text-center">
            <img
              src={`../images/small.png`}
              alt=""
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
          <p className="new">Gokul G G</p>
        </Row>
      </Container>
      <div className="social-media">
        <a href="#">Linkedin</a>
        <a href="#">Gmail</a>
        <a href="#">Discord</a>
        <a href="#">GitHub</a>
      </div>
    </section>
  );
};

export default About;

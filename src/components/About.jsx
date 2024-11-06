import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/About.css";
import { useState,useEffect } from "react";

  const About = () => {

  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Hardware Engineer",
    "Artist"
  ];

  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length; 
        return roles[nextIndex];
      });
    }, 2000); 

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <section id="about" className="pt-5 about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="text-center mb-4">
            <h1>I'm Gokul G G</h1>
            <p>{currentRole}</p>
          </Col>
          <Col md={12} className="text-center">
            <p className="name">Gokul GG</p>
            <img
              src={`../images/small.png`}
              alt=""
              className="img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
                position: "relative",
                zIndex: 2,
              }}
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

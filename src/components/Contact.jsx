import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <Container id="contact">
      {/* First row */}
      <Row className="mt-5">
        <Col xs={12} sm={7} className="order-xs-1">
          <div className="p-3 head">WHAT DO I HELP</div>
        </Col>
        <Col xs={12} sm={5} className="order-xs-4">
          <div className="background">
            <img src="../images/react.png" alt="" className="gridImage" />
            <span className="gridTextBig">Frontend</span>
            <br />
            <span className="gridTextSmall">100 Projects</span>
          </div>
        </Col>
      </Row>

      {/* Second row */}
      <Row className="pt-3">
        <Col xs={12} sm={7} className="order-xs-2">
          <div className="para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            architecto! Pariatur quam ad sed culpa! Culpa nemo omnis commodi
            doloremque.
          </div>
        </Col>
        <Col xs={12} sm={5} className="order-xs-5">
          <div className="background">
            <img src="../images/node.png" alt="" className="gridImage" />
            <span className="gridTextBig">Backend</span>
            <br />
            <span className="gridTextSmall">100 Projects</span>
          </div>
        </Col>
      </Row>

      {/* Third row */}
      <Row className="pt-3">
        <Col xs={12} sm={4} className="order-xs-3">
          <div>
            <span className="number">
              250<sup>+</sup>
            </span>
            <br />
            <span className="subtext">Projects completed</span>
          </div>
        </Col>
        <Col xs={12} sm={3} className="order-xs-6">
          <div>
            <span className="number">
              249<sup>+</sup>
            </span>
            <br />
            <span className="subtext">Happy Clients</span>
          </div>
        </Col>
        <Col xs={12} sm={5} className="order-xs-7">
          <div className="background">
            <img src="../images/client.png" alt="" className="gridImage" />
            <span className="gridTextBig">Frontend</span>
            <br />
            <span className="gridTextSmall">100 Projects</span>
          </div>
        </Col>
        <span className="borderLine"></span>
      </Row>
    </Container>
  );
};

export default Contact;

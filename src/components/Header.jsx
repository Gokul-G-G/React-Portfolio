import React, { useState } from "react";
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import "../styles/Header.css";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className="sticky-top navbar">
        <div className="container d-flex justify-content-between">
          <Navbar.Brand href="#home">
            <img
              src="/images/small.png"
              alt="About Me"
              className="img-fluid logo"
            />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#about" className="nav">
              Home
            </Nav.Link>
            <Nav.Link href="#body" className="nav">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="nav">
              Contact
            </Nav.Link>
            <Button variant="outline-success" onClick={handleShow}>
              Hire Me
            </Button>
          </Nav>
        </div>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src="/resume.pdf" // Path to the PDF in the public folder
            width="100%"
            height="400px"
            title="Resume"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => window.open("/resume.pdf", "_blank")}>
            Download Resume
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;

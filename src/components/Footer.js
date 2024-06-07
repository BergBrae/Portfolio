import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Brady Berg</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/bergbrae"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/brady-berg/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/brady.berg"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md={{ span: 1, offset: 3 }} className="footer-info">
          <IoIosInformationCircle style={{ color: "white" }} onClick={handleShow} />
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This website was forked from a project by <a href="https://github.com/soumyajit4419" target="_blank" rel="noopener noreferrer">soumyajit4419</a>.
            You can find the original repository <a href="https://github.com/soumyajit4419/Portfolio" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
          <p>
            You can find my forked repository <a href="https://github.com/bergbrae/Portfolio" target="_blank" rel="noopener noreferrer">here</a>.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Footer;

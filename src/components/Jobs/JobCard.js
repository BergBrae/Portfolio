import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';
import { Row, Col, Container } from "react-bootstrap";

function JobCard(props) {
  const { job, index } = props;
  const { Title, Company, Duration, Responsibilities, Image } = job;
  const imagesPath = process.env.PUBLIC_URL + "/assets/images/";

  return (
    <Accordion.Item eventKey={index} className="transparent job-item">
      <Accordion.Header >
        <Container>
          <Row>
            <Col md={2}>
              <img src={imagesPath + Image} className="img-fluid white-on-transparent m-4" style={{ maxHeight: "100px", maxWidth: "100px" }} />
            </Col>
            <Col md={6}>
              <h2>
                {Title}
              </h2>
              <p>
                {Company}
              </p>
            </Col>
          </Row>
        </Container>
      </Accordion.Header>
      <Accordion.Body>
        <Container>
          <Row>
            <Col>
              <p>
                {Duration}
              </p>
              <ul>
                {Responsibilities.map((responsibility, index) => {
                  return <li key={index} className="job-point">{responsibility}</li>;
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </Accordion.Body>
    </Accordion.Item>
  );
}
export default JobCard;

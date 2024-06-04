import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JobCard from "./JobCard";
import Particle from "../Particle";
import BluefliteLogo from "../../Assets/jobs/Blueflite logo.jpeg";

function Jobs() {
  return (
    <Container fluid className="job-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Knowledge <strong className="purple">Applied </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is my professional history.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <JobCard
            img={BluefliteLogo}
            title="Software Engineer"
            description="I am a Software Engineer at a large tech company. I work on a variety of projects, from web development to machine learning."
          />
        </Row>
      </Container>
    </Container>
  );
}

export default Jobs;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import JobCard from "./JobCard";
import Particle from "../Particle";
import jobData from "../../Assets/jobs/experience.json";
import Accordion from 'react-bootstrap/Accordion';

function Jobs() {
  const jobs = jobData.Experience;


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

        <Accordion className="transparent">
          {jobs.map((job, index) => (
            <JobCard
              job={job}
              index={index}
              className="transparent"
            />
          ))}
        </Accordion>
      </Container>
    </Container>
  );
}

export default Jobs;

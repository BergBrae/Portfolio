import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';

function JobCard(props) {
  const { job, index } = props;
  const { Title, Company, Duration, Responsibilities, Image } = job;
  const imagesPath = process.env.PUBLIC_URL + "/assets/images/";

  return (
    <Accordion.Item eventKey={index} className="project-card-view">
      <Accordion.Header>
        <img src={imagesPath + Image} className="img-fluid" style={{ maxHeight: "80px" }} />
        <h2>
          {Title}
        </h2>
        <h3>
          {Company}
        </h3>
        <p>
          {Duration}
        </p>
      </Accordion.Header>
      <Accordion.Body>
        <ul>
          {Responsibilities.map((responsibility, index) => {
            return <li key={index}>{responsibility}</li>;
          })}
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  );
}
export default JobCard;

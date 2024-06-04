import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function JobCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="left" src={props.img} alt="card-img" className="job-card-img"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "left" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default JobCard;

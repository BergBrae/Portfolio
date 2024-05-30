import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            I am <span className="purple">Brady Berg </span>
            from <span className="purple"> Williamston, Michigan.</span>
            <br />
            I am currently employed as an Automation Engineer at Merit Labs.
            <br />
            I hold a Bachelor's degree in Computational Data Science from Michigan State University.
            <br />
            <br />
            Apart from working, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working on my home server
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing with my dog Newton
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I often have inspirational quotes!"{" "}
          </p>
          <footer className="blockquote-footer">Brady</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

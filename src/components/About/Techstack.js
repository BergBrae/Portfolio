import React from "react";
import { Col, Row } from "react-bootstrap";
import { } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit
} from "react-icons/di";
import {
  SiPostgresql,
  SiPandas,
  SiPytorch,
  SiOpencv,
  SiOpenai,
  SiMysql,
  SiFastapi,
  SiOnnx,
  SiLinux,
  SiDocker
} from "react-icons/si";
import { } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiOnnx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Techstack;

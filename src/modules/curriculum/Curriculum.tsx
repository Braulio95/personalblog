import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ExpComp } from "../../components/ExpComp/ExpComp";
import { SubtitleComp } from "../../components/SubtitleComp/SubtitleComp";
import { ModuleProps } from "../../types/interfaces/ModuleProps";

export const Curriculum = ({ isMobile }: ModuleProps) => {
  const workExperience = [
    {
      id: 1,
      date: "Sept 2023 - Present",
      company: "ToniConecta",
      role: "Full stack developer",
      description:
        "Updtate and maintain the company's website. Develop new systems for the company.",
    },
    {
      id: 2,
      date: "Feb 2023 - Aug 2023",
      company: "The ksquare group",
      role: "JavaScript developer trainee",
      description:
        "Back and front end developer with experience in the PERN stack (Postgres, Express, React, NodeJs).",
    },
    {
      id: 2,
      date: "Oct 2020 - Jul 2022",
      company: "PEMEX: Exploración y Producción",
      role: "Geophycist: Seismic interpreter",
      description:
        "Make interpretations of structural geology in the Ku Maloob Zaap fields.",
    },
  ];

  const education = [
    {
      id: 1,
      date: "Aug 2014 - Jun 2020",
      company: "Universidad Autónoma del Carmen",
      role: "Bachelor in geophysical engineering",
      description:
        "Professional who, based on his knowledge of mathematics, physics, and geology, develops methods and techniques to explore our planet.",
    },
  ];
  return (
    <Container
      id="curriculum"
      fluid="xxl"
      className="home"
      style={{
        paddingInline: "5%",
        minHeight: isMobile ? "calc(100vh - 62px)" : "calc(100vh - 62px)",
        paddingBottom: "10%",
        marginBottom: "8%",
      }}
    >
      <Row>
        <Col xxl="12">
          <SubtitleComp>Curriculum</SubtitleComp>
        </Col>
      </Row>
      <ExpComp experiences={workExperience} type="Work Experience" />
      <ExpComp experiences={education} type="Education" />
    </Container>
  );
};

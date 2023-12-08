import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { colorPalette } from "../../styles/partials/colors";
import { StrongComp } from "../../components/StrongComp/StrongComp";
import img from "../../assets/pngwing.com.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModuleProps } from "../../types/interfaces/ModuleProps";

export const Home = ({ isMobile }: ModuleProps) => {
  const headingStyle = {
    fontWeight: 400,
    fontSize: "2rem",
    color: colorPalette.strongestGreen,
  };

  const subHeadingStyle = {
    fontWeight: "lighter",
    fontSize: "1.2rem",
  };
  if (isMobile) {
    return (
      <Container
        id="home"
        fluid="xxl"
        className="home"
        style={{
          paddingInline: "5%",
          display: "flex",
          minHeight: isMobile ? "calc(100vh - 62px)" : "calc(100vh - 62px)",
          paddingBlock: "10%",
        }}
      >
        <Row>
          <Col
            lg={4}
            xxl={4}
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              margin: "0 auto",
              overflow: "hidden",
            }}
          >
            <Image
              src={img}
              style={{
                width: "350px",
                height: "350px",
                margin: "0 auto",
                marginTop: "4px",
                objectFit: "contain",
              }}
            />
          </Col>
          <Col
            lg={8}
            xxl={8}
            style={{
              marginBlock: "5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "right",
              textAlign: "left",
            }}
          >
            <h1 style={headingStyle}>
              Hi, my name is{" "}
              <StrongComp color={colorPalette.strongestGreen}>
                Braulio Estrada
              </StrongComp>
              , I am a web developer in Mexico and I offer my web services in{" "}
              <StrongComp color={colorPalette.strongestGreen}>
                Front-end
              </StrongComp>{" "}
              projects.
            </h1>
            <h2
              style={{
                ...subHeadingStyle,
                paddingBlock: "2rem",
              }}
            >
              I help you to build your UI, getting more visibility and relevance
              in the internet.
            </h2>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container
      id="home"
      fluid="xxl"
      className="home"
      style={{
        paddingInline: "5%",
        display: "flex",
        minHeight: isMobile ? "calc(100vh - 62px)" : "calc(100vh - 62px)",
        paddingBlock: "10%",
      }}
    >
      <Row>
        <Col
          lg={8}
          xxl={8}
          style={{
            marginBlock: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            textAlign: "right",
          }}
        >
          <h1 style={headingStyle}>
            Hi, my name is{" "}
            <StrongComp color={colorPalette.strongestGreen}>
              Braulio Estrada
            </StrongComp>
            , I am a web developer in Mexico and I offer my web services in{" "}
            <StrongComp color={colorPalette.strongestGreen}>
              Front-end
            </StrongComp>{" "}
            projects.
          </h1>
          <h2
            style={{
              ...subHeadingStyle,
              paddingBlock: "2rem",
            }}
          >
            I help you to build your UI, getting more visibility and relevance
            in the internet.
          </h2>
        </Col>
        <Col
          lg={4}
          xxl={4}
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            margin: "0 auto",
            overflow: "hidden",
          }}
        >
          <Image
            src={img}
            style={{
              width: "400px",
              height: "400px",
              margin: "0 auto",
              marginTop: "4px",
              objectFit: "contain",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

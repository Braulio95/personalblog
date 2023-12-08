import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComp from "../../components/CardComp/CardComp";
import { StrongComp } from "../../components/StrongComp/StrongComp";
import { colorPalette } from "../../styles/partials/colors";
import { projects } from "../../data/projects";
import { ModuleProps } from "../../types/interfaces/ModuleProps";

export const Portfolio = ({ isMobile }: ModuleProps) => {
  return (
    <Container
      id="portfolio"
      fluid="xxl"
      className="home"
      style={{
        paddingInline: "5%",
        minHeight: isMobile ? "calc(100vh - 62px)" : "calc(100vh - 62px)",
        paddingBottom: "10%",
        marginBottom: "10%",
      }}
    >
      <Row>
        <Col xxl="12">
          <h2>
            <StrongComp color={colorPalette.strongestGreen}>
              Portfolio
            </StrongComp>
          </h2>
        </Col>
      </Row>
      <Row>
        {projects.map(
          ({ id, title, img, linkLiveDemo, LinkGitHubRepo }, index) => {
            return (
              <Col
                key={index}
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                className="mb-2 d-flex justify-content-center"
                style={{ marginBlock: "1.2rem" }}
              >
                <CardComp
                  id={id}
                  title={title}
                  img={img}
                  linkLiveDemo={linkLiveDemo}
                  LinkGitHubRepo={LinkGitHubRepo}
                />
              </Col>
            );
          }
        )}
      </Row>
    </Container>
  );
};

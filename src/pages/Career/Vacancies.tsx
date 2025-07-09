import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// types
import { Vacancy } from "./types";

type VacancyProps = {
  vacancies: any[];
};

const Vacancies = ({ vacancies }: VacancyProps) => {
  console.log("Vacancies:", vacancies[0].content);
  return (
    <section className="py-5 mt-2 position-relative" id="job-openings">
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="display-5 fw-semibold">Job Openings</h1>
            <p className="text-muted mx-auto">
              Interested? Come show us what you're made of!
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={12}>
            {(vacancies || []).map((vacancy, index) => {
              return (
                <React.Fragment key={index.toString()}>
                  <a
                    href={vacancy.content.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="mb-4">{vacancy.content.designation}</h3>
                  </a>
                  <ul className="list-unstyled mb-2 "></ul>
                </React.Fragment>
              );
            })}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Vacancies;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// types
import { Vacancy } from './types';

type VacancyProps = {
    vacancies: any[];
};

const Vacancies = ({ vacancies }: VacancyProps) => {
    // If vacancies array is empty or first item has no content, don't render

    if (!vacancies || vacancies.length === 0) return null;

    return (
        <section className="py-5 mt-2 position-relative" id="job-openings">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 className="display-5 fw-semibold">Job Openings</h1>
                        <p className="text-muted mx-auto">Interested? Come show us what you're made of!</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={12}>
                        {vacancies.map((vacancy, index) => {
                            const content = vacancy;
                            if (!content?.jdLink || !content?.title) return null;

                            return (
                                <React.Fragment key={index.toString()}>
                                    <a href={content.jdLink} target="_blank" rel="noopener noreferrer">
                                        <h3 className="m-4 ">{content.title}</h3>
                                    </a>
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

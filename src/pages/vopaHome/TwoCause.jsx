import React, { useContext } from "react";
import {
  Row,
  Col,
  Container,
  Accordion,
  Badge,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import classNames from "classnames";

const CustomToggle = ({ children, eventKey, linkClass, callback }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to="#"
      className={classNames(linkClass, {
        collapsed: !isCurrentEventKey,
      })}
      onClick={decoratedOnClick}
    >
      {children}
    </Link>
  );
};

const TwoCause = () => {
  return (
    <section className={"d-flex border-bottom pb-4"}>
      <Container>
        <Row className="justify-content-center pt-5">
          <Col className="text-start">
            <h2 className="display-5 fw-medium">
              Towards Achieving Sustainable Development Goals
            </h2>
            <p className="mb-0">
              <span className="">
                Our initiatives directly contribute to the United Nations
                Sustainable Development Goals, focusing on quality education and
                promoting good health and well-being for all.
              </span>
            </p>
          </Col>
        </Row>
        <Row className=" pt-5 align-items-center features-3">
          <Col lg={{ span: 6 }}>
            <div id="features-list" data-aos="fade-up" data-aos-duration="300">
              <div className="d-flex">
                <img
                  style={{
                    width: "200px",
                  }}
                  src={"/images/homePage/SDG3.png"}
                  alt="Girl Reading Book"
                  className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                />

                <div className="flex-grow-1 p-3">
                  <div>
                    <p className="text-muted mt-1 mb-4">
                      Promoting mental health awareness, supporting teacher
                      well-being, and creating healthy learning environments
                      through our educational initiatives.
                    </p>
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Col>
          <Col lg={{ span: 6 }}>
            <div id="features-list" data-aos="fade-up" data-aos-duration="300">
              <div className="d-flex">
                <img
                  style={{
                    width: "200px",
                  }}
                  src={"/images/homePage/SDG4.png"}
                  alt="Girl Reading Book"
                  className="img-fluid d-block mx-auto mt-4 mt-lg-0"
                />

                <div className="flex-grow-1 p-3">
                  <div>
                    <p className="text-muted mt-1 mb-4">
                      Ensuring inclusive and equitable quality education for all
                      through digital learning, teacher training, and innovative
                      educational solutions.
                    </p>
                  </div>{" "}
                </div>
              </div>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TwoCause;

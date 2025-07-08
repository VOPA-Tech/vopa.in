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

const ProductCards = () => {
  return (
    <section className={"d-flex border-bottom pb-4"}>
      <Container>
        <Row className="pt-5  features-3">
          <Col lg={{ span: 6 }}>
            <div id="features-list" data-aos="fade-up" data-aos-duration="300">
              <div className="d-flex  ">
                <span
                  className={classNames(
                    // 'bg-soft-' + 'primary',
                    "avatar",
                    "avatar-sm",
                    "rounded-lg",
                    "icon",
                    // 'icon-with-bg',
                    // 'icon-xs',
                    "text-" + "info",
                    "me-3",
                    "flex-shrink-0"
                  )}
                >
                  <FeatherIcon
                    icon={"book"}
                    size={124}
                    className={classNames("icon-dual-" + "success")}
                  />
                </span>
                <div className="flex-grow-1 ">
                  {"Education"}

                  <div>
                    <p className="text-muted mt-1 mb-4">
                      VOPA makes quality learning accessible to every child,
                      anywhere.
                    </p>
                    {/* <Link to="#" className="h6 text-primary">
                                            Learn more
                                            <FeatherIcon className="ms-1 icon-xxs" icon="arrow-right" />
                                        </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 6 }}>
            <div id="features-list" data-aos="fade-up" data-aos-duration="300">
              <div className="d-flex">
                <span
                  className={classNames(
                    // 'bg-soft-' + 'primary',
                    "avatar",
                    "avatar-sm",
                    "rounded-lg",
                    "icon",
                    // 'icon-with-bg',
                    // 'icon-xs',
                    "text-" + "primary",
                    "me-3",
                    "flex-shrink-0"
                  )}
                >
                  <FeatherIcon
                    icon={"plus"}
                    className={classNames("icon-dual-" + "success")}
                  />
                </span>
                <div className="flex-grow-1">
                  Mental Health
                  <div>
                    <p className="text-muted mt-1 mb-4">
                      VOPA empowers minds with tools for emotional well-being
                      and resilience.
                    </p>
                    {/* <Link to="#" className="h6 text-primary">
                                            Learn more
                                            <FeatherIcon className="ms-1 icon-xxs" icon="arrow-right" />
                                        </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductCards;

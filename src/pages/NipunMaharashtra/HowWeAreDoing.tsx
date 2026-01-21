import { Link } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import desktop1 from 'assets/images/features/desktop1.gif';
import desktop from 'assets/images/hero/desktop.jpg';
import AccordionExample from './Accordions';

const HowWeAreDoing = () => {
    return (
        <section className="pt-lg-6  pb-lg-6 pb-5 bg-paper-texture position-relative overflow-hidden">
            <Container>
                <AccordionExample />
            </Container>
        </section>
    );
};

export default HowWeAreDoing;

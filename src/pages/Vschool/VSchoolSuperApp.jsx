import React from 'react';
import { Container } from 'react-bootstrap';
import './VSchoolSuperApp.scss';

const VSchoolSuperApp = () => {
    const nodes = [
        {
            title: 'GOVERNMENT',
            position: 'top-right',
            points: ['Analytics', 'Assessments', 'Implementation'],
        },
        {
            title: 'TEACHERS',
            position: 'top-left',
            points: ['Teaching', 'Training', 'TLMs'],
        },
        {
            title: 'PARENTS',
            position: 'bottom-left',
            points: ['Monitoring', 'Access', 'Engagement'],
        },
        {
            title: 'STUDENTS',
            position: 'bottom-right',
            points: ['Self-learning', 'Assessments', 'Home Learning'],
        },
    ];

    return (
        <Container className="vschool-superapp-wrapper py-5 text-center">
            <h2 className="mb-5 vschool-title">VSchool as a Super App</h2>

            <div className="vschool-diagram">
                <div className="vschool-center">VSCHOOL</div>

                {nodes.map(({ title, position, points }) => (
                    <div key={title} className={`vschool-node ${position}`}>
                        <h5>{title}</h5>
                        <ul>
                            {points.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default VSchoolSuperApp;

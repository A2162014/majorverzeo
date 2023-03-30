import React from 'react';
import { Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Row>
            <Col sm={3}>
                <h2>About Us</h2>
                <p>Some text about who we are and what we do.</p>
            </Col>
            <Col sm={9}>
                <h1>About Page</h1>
                <img src="/logo.png" alt="Logo" />
                <p>This is the about page of the ReactJS Major Project.</p>
            </Col>
        </Row>
    );
};

export default About;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Hero() {
  return (
    <div className="bg-Success py-5">
      <Container className='py-96'>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 text-white fw-bold mb-4">Modern Interior Design Studio</h1>
            <p className="text-white-50 mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Button variant="warning" size="lg" className="me-3">Shop Now</Button>
            <Button variant="outline-light" size="lg">Explore</Button>
          </Col>
          <Col md={6}>
            <img 
              src="/placeholder.svg?height=400&width=600" 
              alt="Modern Sofa" 
              className="img-fluid" 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
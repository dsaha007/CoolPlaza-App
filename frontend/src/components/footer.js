import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="mt-5 py-3 bg-dark text-light">
      <Container>
        <Row>
          <Col className="text-center" style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
            Created by Debayan Saha © {new Date().getFullYear()} All rights reserved!
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
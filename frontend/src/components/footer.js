import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <footer className="mt-5 py-3 bg-light">
      <Container>
        <Row>
          <Col className="text-center">
            Created by Debayan Saha © all rights reserved!
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
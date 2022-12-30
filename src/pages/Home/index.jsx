import React from 'react'
import { Container, Row, Col, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './index.css'

export default function HomePage() {
  return (
    <Container fluid className='container-ticket'>
    <Row className="justify-content-md-center main-row">
      <Col md="auto" className='mt-5 text-white main-col'>
      {[
        'TI',
        'Marketing',
      ].map((area) => (
      <Link to={"/chamados/"+area} key={area}>
        <Row key={area}className="justify-content-md-center">
          <Alert key={area} variant="light" className='px-5 text-center'>
            {area}
          </Alert>
        </Row>
      </Link>
      ))}
      </Col>
    </Row>
  </Container>
  )
}

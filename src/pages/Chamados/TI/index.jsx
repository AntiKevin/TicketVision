import React from 'react'
import TicketTI from '../../../components/form-chamados/TI'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'

export default function ChamadosTI() {
  return (
    <Container fluid className='container-ticket'>
    <Row className="justify-content-md-center">
      <Col md="auto" className='mt-5'>
        <TicketTI/>
      </Col>
    </Row>
  </Container>
  )
}

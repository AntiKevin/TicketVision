import React from 'react'
import TicketDesign from '../../../components/form-chamados/Design'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css'

export default function ChamadosDesign() {
  return (
    <Container fluid className='container-ticket'>
    <Row className="justify-content-md-center">
      <Col md="auto" className='mt-5'>
        <TicketDesign/>
      </Col>
    </Row>
  </Container>
  )
}

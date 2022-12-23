import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'

export default function TicketTI() {
  return (
    <div className='Form-Block-TI px-4 py-4'>
        <h2 className='title'>Formulário de abertura de chamados</h2>
        <h3>{'> TI'}</h3>
        <Form className='pt-5'>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="name" placeholder="Seu nome" />
            <Form.Text className="text-muted">
              Chamados sem nome não serão atendidos.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo do Chamado</Form.Label>
            <Form.Control type="name" placeholder="Qual sua queixa?" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPriority">
          <Form.Label>Prioridade</Form.Label>
            <div key='inline-radio' className="mb-3">
              <Form.Check
                inline
                label="0"
                name="group1"
                type='radio'
                id='inline-radio-1'
              />
              <Form.Check
                inline
                label="1"
                name="group1"
                type='radio'
                id='inline-radio-2'
              />
              <Form.Check
                inline
                label="2"
                name="group1"
                type='radio'
                id='inline-radio-3'
              />
              <Form.Check
                inline
                label="3"
                name="group1"
                type='radio'
                id='inline-radio-3'
              />
              <Form.Check
                inline
                label="4"
                name="group1"
                type='radio'
                id='inline-radio-3'
              />
              <Form.Check
                inline
                label="5"
                name="group1"
                type='radio'
                id='inline-radio-3'
              />
              <Form.Text className="text-muted">
              Quanto menor o numero maior a prioridade.
            </Form.Text>
            </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlDescrição">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Detalhe o seu problema" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSetor">
          <Form.Label>Setor</Form.Label>
            <div key='inline-radio' className="mb-3">

            {['Engenharia', 'Topografia','Obras',
              'Comercial','Diretoria','Sala Técnica',
              'SESMT','Administrativo','Qualidade'].map((setor) => (
              <Form.Check
              label={setor}
              name="Setores"
              type='radio'
              id={setor}
              key={setor}
            />
            ))}
            </div>
            </Form.Group>
            <Button variant="light" type='submit'>Enviar</Button>{' '}
        </Form>
    </div>
  )
}

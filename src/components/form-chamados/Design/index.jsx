import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './index.css'

export default function TicketDesign() {

  //Objeto do chamado com hook useState
  const [chamado, setChamado] = useState({
    nome: "",
    setor: "",
    prior: 5,
    titulo: "",
    desc: "",

  });

  //manipulando após o envio do chamado
  const submitHandle = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      console.log("cant validate it all")
    }
    else{
    setValidated(true);
    console.log(chamado)
    }
  };
  // manipulando o state object de cada item do formulário a medida que se escreve
  const handleChange = (event) => {
    const { name, value } = event.target;
    setChamado((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  //hook state de vallidação
  const [validated, setValidated] = useState(false);

  return (
    <div className='Form-Block-TI px-4 py-4'>
        <h2 className='title'>Formulário de Solicitação de Atividade</h2>
        <h3>{'> Marketing'}</h3>
        <Form className='pt-5' noValidate validated={validated} onSubmit={submitHandle}>

          <Form.Group className="mb-3" controlId="FormNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="name" placeholder="Seu nome" name='nome' onChange={handleChange} required/>
            <Form.Text className="text-muted">
            </Form.Text>
            <Form.Control.Feedback>Parece bom!</Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'> Chamados sem nome não serão atendidos.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="FormTitulo">
            <Form.Label>Titulo do Chamado</Form.Label>
            <Form.Control type="name" placeholder="Seu nome" name='titulo'  onChange={handleChange} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPriority">
          <Form.Label>Prioridade</Form.Label>
            <div key='inline-radio' className="mb-3">
              <Form.Check
                inline
                label="0"
                name="prior"
                type='radio'
                onChange={handleChange}
                value="0"
                id='inline-radio-1'
              />
              <Form.Check
                inline
                label="1"
                name="prior"
                type='radio'
                onChange={handleChange}
                value="1"
                id='inline-radio-2'
              />
              <Form.Check
                inline
                label="2"
                name="prior"
                type='radio'
                onChange={handleChange}
                value="2"
                id='inline-radio-3'
              />
              <Form.Check
                inline
                label="3"
                name="prior"
                type='radio'
                onChange={handleChange}
                value="3"
                id='inline-radio-3'
              />
              <Form.Check
                inline
                label="4"
                name="prior"
                type='radio'
                onChange={handleChange}
                value="4"
                id='inline-radio-3'
              />
              <Form.Check
                inline
                label="5"
                name="prior"
                type='radio'
                onChange={handleChange}
                value="5"
                id='inline-radio-3'
              />
              <Form.Text className="text-muted">
              Quanto menor o numero maior a prioridade.
            </Form.Text>
            </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlDescrição">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange} name="desc" required/>
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
              onChange={handleChange}
              value={setor}
            />
            ))}
            </div>
            </Form.Group>
            <Button variant="light" type='submit'>Enviar</Button>{' '}
        </Form>
    </div>
  )
}

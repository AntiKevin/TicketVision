import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import './index.css'
import axios from 'axios';
import Cookies from 'js-cookie'

export default function TicketDesign() {

  //Objeto do chamado com hook useState
  const [chamado, setChamado] = useState({
    nome: "",
    setor: "",
    prior: 5,
    titulo: "",
    desc: "",
    areas: [2],
    status: "pendente",
  });
  
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  
  const loginJWT = async () => {
    //set the state of loading for the page
    setIsLoading(true)

    await axios.post('https://api-ticketvision.up.railway.app/auth-token/', {
      username: 'webuser',
      password: 'Ticket4359'
    })
    .then(function (response) {
      Cookies.set('auth_token', response.data.access)
    })
    .catch(function (error) {
    });
  }
  //Criando chamado 
  const createChamado = async () => {
    await axios.post('https://api-ticketvision.up.railway.app/Chamados/', chamado, {
      headers: {
        Authorization: 'Bearer ' + Cookies.get('auth_token'),
      }
    })
    .then(function () {
      navigate('/enviado')
    })
    .catch(function (error) {
    });
  }


  //manipulando após o envio do chamado
  const submitHandle = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    else {
      await loginJWT()
      createChamado()
    }
    setValidated(true);
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
        {isLoading == false ?(
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
            {['0', '1','2','3','4','5'].map((prior) => (
              <Form.Check
                inline
                label={prior}
                name="prior"
                type='radio'
                onChange={handleChange}
                value={prior}
                id='inline-radio'
                key={prior}
                required
              />
            ))}
              <Form.Text className="text-muted">
              Quanto menor o numero maior a prioridade.
            </Form.Text>
            </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlDescrição">
              <Form.Label>Descrição</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange} name="descricao" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSetor">
          <Form.Label>Setor</Form.Label>
            <div key='inline-radio' className="mb-3">

            {['Engenharia', 'Topografia','Obras',
              'Comercial','Diretoria','Sala Técnica',
              'SESMT','Administrativo','Qualidade','TI'].map((setor) => (
              <Form.Check
              label={setor}
              name="setor"
              type='radio'
              id={setor}
              key={setor}
              onChange={handleChange}
              value={setor}
              required
            />
            ))}
            </div>
            </Form.Group>
            <Button variant="light" type='submit'>Enviar</Button>{' '}
        </Form>
        ): (<p>carregando...</p>)}
    </div>
  )
}

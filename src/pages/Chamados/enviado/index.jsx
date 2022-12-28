import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, Button } from 'react-bootstrap'
  
export default function Enviado() {

  const styles_container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const navigate = useNavigate()

  return (
        <Stack gap={2} className="col-md-5 mx-auto text-white text-center" style={styles_container}>
            <p>Chamado enviado Com sucesso!</p>
            <Button variant="outline-secondary" onClick={() => navigate('/')}>
                Voltar ao Inicio
            </Button>
        </Stack>
  )
}
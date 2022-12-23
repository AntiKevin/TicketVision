import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react'

//importando componentes das paginas
import HomePage from './pages/Home';
import ChamadosTI from './pages/Chamados/TI';
import ChamadosDesign from './pages/Chamados/Design';

export default function Pages() {
  return (
      <Router>
        <Routes>
          <Route path='/chamados/ti' element={<ChamadosTI/>} />
          <Route path='/chamados/design' element={<ChamadosDesign/>} />
          <Route path='/' element={<HomePage/>} />
        </Routes>
      </Router>
    )
}
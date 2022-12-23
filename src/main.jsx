import React from 'react'
import ReactDOM from 'react-dom/client'
import Pages from './routes'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
)

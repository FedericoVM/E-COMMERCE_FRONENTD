import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "./components/layout/Header/header.css"
import "./components/layout/footer/footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/views/Registro/registro.css"
import './components/views/Login/login.css'
import ApiReactQuery from './queryApi/ApiReactQuery'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiReactQuery>
    <App />
    </ApiReactQuery>
  </React.StrictMode>,
)

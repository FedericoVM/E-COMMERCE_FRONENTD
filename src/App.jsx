
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import { RouterPrincipal } from './routers/RouterPrincipal'
import "./components/layout/Header/header.css";

function App() {
  return (
    <div className="App">
      <RouterPrincipal />
    </div>
  );
}
export default App;


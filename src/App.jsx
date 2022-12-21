import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import { RouterPrincipal } from './components/routers/RouterPrincipal'


function App() {
  return (
    <div className="App">
      <RouterPrincipal />
    </div>
  );
}

export default App;

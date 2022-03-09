// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import React from 'react'
import { Home } from './components/pages/Home'
import { AboutUs } from './components/pages/AboutUs'
import { Contact } from './components/pages/Contact'
import { Estado } from './components/pages/Estado'
import { RickMorty } from './components/pages/RickMorty'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { Contactar } from './components/pages/Contactar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/status" element={<Estado/>} />
          <Route path="/rick-morty" element={<RickMorty/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/contactar" element={<Contactar/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;

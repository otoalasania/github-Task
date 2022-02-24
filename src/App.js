import React, {useState, useEffect} from 'react';
import './App.css';
import Details from './Pages/Details'
import Home from './Pages/Home'
import { BrowserRouter , Route, Routes, Switch } from 'react-router-dom'

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;

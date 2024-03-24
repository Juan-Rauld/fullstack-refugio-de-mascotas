/* eslint-disable no-unused-vars */
// Ok, el front es más complejo que Backend... no hay caso ha!
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Edit from './pages/Edit/Edit'
import Detail from './pages/Detail/Detail'
import NotFound from './pages/NotFound/NotFound'


import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/inicio" element={<Home/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/detail/:id" element={<Detail/>} />
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
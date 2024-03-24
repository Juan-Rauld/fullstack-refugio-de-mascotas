/* eslint-disable no-unused-vars */
// Ok, el front es más complejo que Backend... no hay caso ha!
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Edit from './pages/Edit/Edit'
import Detail from './pages/Detail/Detail'
import NotFound from './pages/NotFound/NotFound'
import HeaderComp from './components/headerComponents/HeaderComp'
import './App.css'

function App() {

  return (
    <>
      <div className='p-8'>
        <BrowserRouter>
          <HeaderComp />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/pets/create" element={<Create />} />
            <Route path="/pets/edit/:id" element={<Edit />} />
            <Route path="/pets/detail/:id" element={<Detail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App;
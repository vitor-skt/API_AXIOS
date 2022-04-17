import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/homePage'
import Details from './pages/details'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)

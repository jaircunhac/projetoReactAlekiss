import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Locations from './pages/Locations'
import { Header } from './components/header/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/locations' element={<Locations />} />
        

      </Routes>
    </BrowserRouter>
    
  </StrictMode>
)

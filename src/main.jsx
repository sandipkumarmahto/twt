import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './Components/RegisterPage.jsx'
import Homepage from './Components/Homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/home' element={<Homepage/>}/>
      </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Shell from './layouts/Shell'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './styles.css'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Shell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Shell>
      </BrowserRouter>
    </ThemeProvider>
  )
}

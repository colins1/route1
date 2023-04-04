import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import HomePage from './components/HomePage'
import DriftPage from './components/DriftPage'
import ForzaPage from './components/ForzaPage'
import TimeAttackPage from './components/TimeAttackPage'


function App() {
  return (
    <BrowserRouter>
        <Menu />
        <div className="page">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage/>} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App

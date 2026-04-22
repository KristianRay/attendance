import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import InfoPage from './pages/InfoPage.jsx'
import ActivitiesPage from './pages/ActivitiesPage.jsx'
import RulesPage from './pages/RulesPage.jsx'
import FeedbackPage from './pages/FeedbackPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

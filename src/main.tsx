
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './i18n.ts'
import React from 'react'




createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <App />
 </React.StrictMode>
)

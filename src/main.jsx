import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AllProvider } from './context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllProvider>
      <App />
    </AllProvider>
  </StrictMode>
)

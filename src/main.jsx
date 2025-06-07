if (process.env.NODE_ENV === "development") {
  const script = document.createElement("script");
  script.src = "http://localhost:8097";
  document.head.appendChild(script);
}

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

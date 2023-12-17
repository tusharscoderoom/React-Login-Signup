import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { AuthUserContextProvider } from './contexts/AuthUser-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthUserContextProvider>
      <App />
    </AuthUserContextProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/Router.jsx'
import './index.css'
import FirebaseAuth from './firebase/FirebaseAuth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuth>
      <Router />
    </FirebaseAuth>
  </StrictMode>
)

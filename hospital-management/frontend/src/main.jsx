import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Add console log for debugging
console.log('App is rendering')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

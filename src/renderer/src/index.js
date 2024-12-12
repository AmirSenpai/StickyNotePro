import React from 'react'
import ReactDOM from 'react-dom/client' // Updated import
import App from './components/App'
import './assets/base.css' // Import CSS here

// Create a root element and render the App component using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

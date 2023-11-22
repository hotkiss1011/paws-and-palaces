import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Nav from './components/Nav.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Nav />
    <div className="content">
      <div className="main-body">
        <App />
      </div>
    </div>
  </React.StrictMode>,
)

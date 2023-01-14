import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Context from './context/CustomContext'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Context>
    <App />
  </Context>
)

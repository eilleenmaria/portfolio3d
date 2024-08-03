import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WrapError from './helpers/WrapError.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <WrapError>
      <App />
   </WrapError>
  
   
   
  </React.StrictMode>,
)

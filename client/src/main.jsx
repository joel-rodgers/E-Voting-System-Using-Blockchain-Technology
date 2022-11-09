import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
)

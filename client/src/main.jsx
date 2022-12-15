import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import UserHome from './container/UserHome';
import Admin from './components/Admin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/*' element={<UserHome/>}/>
        
      </Routes>
    </Router>
  </React.StrictMode>
)

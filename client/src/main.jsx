import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './components/init';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import  { StateContextProvider }  from './context';

import Register from './components/Register';
import Login from './components/Login';
import UserHome from './container/UserHome';
import Admin from './components/Admin';
import AdminHome from './container2/AdminHome';

ReactDOM.createRoot(document.getElementById('root')).render(
   
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <Router>
    <StateContextProvider>
      <Routes>
      
        <Route path='/' element={<App/>} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Admin' element={<Admin/>}/>
        <Route path='/AdminHome' element={<AdminHome/>}/>
        <Route path='/*' element={<UserHome/>}/>
        
        
      </Routes>
      </StateContextProvider>
    </Router>
    </ThirdwebProvider> 
  </React.StrictMode>
  
)

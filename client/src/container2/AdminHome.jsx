import React from 'react'
import { Route, Routes } from 'react-router-dom';

import  SidebarAdmin  from '../components/SidebarAdmin';
import NavbarAdmin from '../components/NavbarAdmin'
import Dash from '../components/adDashboard';
import AddCandidate from '../components/addCandidate';
import RegisterVoters from '../components/registerVoters';
import ChangeState from '../components/changeState';
import ElectionResults from '../components/electionResults';


const AdminHome = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
    <div className="sm:flex hidden mr-10 relative">
      <SidebarAdmin />
      
    </div>
      
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <NavbarAdmin />
        <Routes>
          <Route path="/adDashboard" element={<Dash />} />
          <Route path="/addCandidate" element={<AddCandidate />} />
          <Route path="/registerVoters" element={<RegisterVoters />} />
          <Route path="/changeState" element={<ChangeState />} />
          <Route path="/electionResults" element={<ElectionResults />} />
        </Routes>
        
      </div>
    </div>
  )
}

export default AdminHome
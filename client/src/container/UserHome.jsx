import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SidebarUser, NavbarUser } from '../components';
import Dashboard from '../components/dashboard';
import Profile from '../components/profile';
import VoterRegistration from '../components/voterRegistration';
import VotingArea from '../components/votingArea';
import Results from '../components/results';
import OTP from '../components/otp';


import logo from "../../images/logo.png";
import user from "../../images/user.png";


const UserHome = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
    <div className="sm:flex hidden mr-10 relative">
      <SidebarUser />
    </div>
      
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <NavbarUser />
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/results" element={<Results />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/voterRegistration" element={<VoterRegistration />} />
        <Route path="/votingArea" element={<VotingArea />} />
        <Route path="/otp" element={<OTP />} />
        </Routes>
      </div>
    </div>
    
  )
}

export default UserHome

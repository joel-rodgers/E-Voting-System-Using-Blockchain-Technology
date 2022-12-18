import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'; 

import { useStateContext } from '../context';
import {CustomButton} from './';
import logo from "../../images/logo.png";
import police from "../../images/police.png";
import search from "../../images/search.svg";
import menu from "../../images/menu.svg";

import { nav } from '../container2/adminPins';


const NavbarAdmin = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('adDashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address} = useStateContext();



  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#1c1c24] rounded-[100px]">
      <input type="text" placeholder="Search for campaigns" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-white bg-transparent outline-none" />
      <div className="w-[72px] h-full rounded-[20px] bg-blue flex justify-center items-center cursor-pointer">
      <img src={search} alt="search" className="w-[15px] h-[15px] object-contain"/>

      </div>

      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
      <CustomButton 
          btnType="button"
          title={address ? 'Add a Candidate' : 'Connect'}
          styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('registerVoters')
            else connect()
          }}
        />

        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={police} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

      {/* Small screen navigation */}
          <div className="sm:hidden flex justify-between items-center relative">
          <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <img src={police} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>

          <img
            src={menu}
            alt="menu"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
            onClick={() => setToggleDrawer((prev) => !prev)}
          
          />

          <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
            <ul className="mb-4">
            {nav.map((link2) => (
                <li
                  key={link2.name}
                  className={`flex p-4 ${isActive === link2.name && 'bg-[#3a3a43]'}`}
                  onClick={() => {
                    setIsActive(link2.name);
                    setToggleDrawer(false);
                    navigate(link2.link2);
                  }}
                >
                  <img 
                    src={link2.imgUrl2}
                    alt={link2.name}
                    className={`w-[24px] h-[24px] object-contain ${isActive === link2.name ? 'grayscale-0' : 'grayscale'}`}
                  />
                  <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link2.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                    {link2.name}
                  </p>
                </li>
              ))}
            </ul>

            <div className="flex mx-4">
            <CustomButton 
              btnType="button"
              title={address ? 'Vote' : 'Connect'}
              styles={address ? 'bg-[#1dc071]' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if(address) navigate('registerVoters')
                else connect();
              }}
            />

            </div>

          </div>

          </div>
      
    </div>
  )
}

export default NavbarAdmin;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo2 from "../../images/logo2.png";
import sun from "../../images/sun.svg";
import { nav } from '../container2/adminPins';

const Icon2 = ({ styles, name, imgUrl2, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl2} alt="logo2" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl2} alt="logo2" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)


const SidebarAdmin = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('adDashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        <Icon2 styles="w-[52px] h-[52px] bg-[#2c2f32]" imgUrl2={logo2} />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1c1c24] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
        {nav.map((link2) => (
          <Icon2
            key={link2.name}
            {... link2}
            isActive={isActive}
            handleClick= {() => {
              if(!link2.disabled){
                setIsActive(link2.name);
                navigate(link2.link2);
              }
            }}
           />
        ))}

        </div>
        <Icon2 styles="bg-[#1c1c24] shadow-secondary" imgUrl2={sun} />

      </div>

    </div>
  )
}

export default SidebarAdmin

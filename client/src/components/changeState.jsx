import React from 'react'
import { CustomButton} from '.';

const changeState = () => {
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
      <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Change Election State</h1>

      </div>

      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] mt-[20px] ">
        <p class="font-epilogue font-bold sm:text-[22px] text-[10px] leading-[28px] text-white">Election State: Registration</p>
      </div>
      

      <div className="flex justify-center items-center mt-[40px]" >
      <CustomButton 
              btnType="submit"
              title="Change election state"
              styles="bg-[#1dc071]"
        />

      </div>

    </div>
  )
}

export default changeState
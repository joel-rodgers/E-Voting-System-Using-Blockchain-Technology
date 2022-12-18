import React from 'react'

import { CustomButton, FormField} from '.';

const voterRegistration = () => {
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4" >
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
      <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Register as a voter</h1>
      </div>

      <form>
        <div>
        <FormField 
            labelName="Personal Number*"
            placeholder="3766xxxx"
            inputType="number"
            value= ""//{form.cname}
            //handleChange=//{(e) => handleFormFieldChange('cname', e)}
          />
        </div>
        <FormField 
            labelName="Address Number*"
            placeholder="0xabc..."
            inputType="text"
            value=""//{form.cname}
           // handleChange={(e) => handleFormFieldChange('cname', e)}
          />

        <div className="flex justify-center items-center mt-[40px]">
          <CustomButton 
              btnType="submit"
              title="Register"
              styles="bg-[#1dc071]"
           />

        </div>
      </form>
      

      </div>
    
  )
}

export default voterRegistration

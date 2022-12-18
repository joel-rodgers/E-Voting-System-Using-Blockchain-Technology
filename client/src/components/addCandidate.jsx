import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import './init';

import { useStateContext } from '../context';
import { CustomButton, FormField} from '.';
import { checkIfImage } from '../utils';

const addCandidate = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {addCandidate} = useStateContext();
  const [form, setForm] = useState({
      cname: '',
      cbio: '',
      cparty: '',
      cimage: ''

  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.cimage, async (exists) => {
      if(exists){
        setIsLoading(true)
        await addCandidate({ ...form});
        setIsLoading(false)
        navigate('/adDashboard')
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, cimage: ''});
      }
    })

    
    

  }

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Add a Candidate</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]" >
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Candidate Name*"
            placeholder="John Doe"
            inputType="text"
            value={form.cname}
            handleChange={(e) => handleFormFieldChange('cname', e)}
          />

          <FormField 
            labelName="Candidate Party*"
            placeholder="Write a Party Name"
            inputType="text"
            value={form.cparty}
            handleChange={(e) => handleFormFieldChange('cparty', e)}
          />


        </div>

        <FormField 
            labelName="Candidate Bio*"
            placeholder="Write Candidate Bio"
            isTextArea="text"
            value={form.cbio}
            handleChange={(e) => handleFormFieldChange('cbio', e)}
        />

        <FormField 
            labelName="Candidate Image*"
            placeholder="Place image URL of the candidate"
            inputType="url"
            value={form.cimage}
            handleChange={(e) => handleFormFieldChange('cimage', e)}
        />

        <div className="flex justify-center items-center mt-[40px]">
        <CustomButton 
              btnType="submit"
              title="Submit new candidate"
              styles="bg-[#1dc071]"
        />

        </div>


      </form>

    </div>
  )
}

export default addCandidate
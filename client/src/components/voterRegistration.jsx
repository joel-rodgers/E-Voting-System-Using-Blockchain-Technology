import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';


import { CustomButton, FormField} from '.';

const voterRegistration = () => {

  const navigate = useNavigate();

    const [form, setForm] = useState({
        personalno : '',
	      account_address: ''
    });

//Handle Input
const handleFormFieldChange = (fieldName, e) => {
        setForm({...form, [fieldName] :e.target.value})
    }


//Handle Register
const handleSubmit = async (e) =>{
        e.preventDefault();
        const {personalno, account_address} = form;
        try{
            const res = await fetch('http://localhost:3001/voterRegistration', {
                method : 'POST',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify({
                    personalno,account_address
                })
            });

            if(!res){
                window.alert("Invalid Entry")
            }else{
                window.alert("Checking....");
                navigate ('/otp')
                // Token is generated when we log in
            }

        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4" >
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
      <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Register as a voter</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
        <FormField 
            labelName="Personal Number*"
            placeholder="3766xxxx"
            inputType="number"
            value= {form.personalno}
            handleChange={(e) => handleFormFieldChange('personalno', e)}
          />
        </div>
        <FormField 
            labelName="Address Number*"
            placeholder="0xabc..."
            inputType="text"
            value={form.account_address}
           handleChange={(e) => handleFormFieldChange('account_address', e)}
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

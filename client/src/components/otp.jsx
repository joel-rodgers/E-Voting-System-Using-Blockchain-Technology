
import { CustomButton, FormField} from '.';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const otp = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        otp : ''
    });

//Handle Input
const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setForm({...form, [name] : value})
    }


//Handle Check Code
const handleSubmit = async (event) =>{
        event.preventDefault();
        const {otp} = form;
        try{
            const res = await fetch('http://localhost:3001/otp', {
                method : 'POST',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify({
                    otp
                })
            });

            if(!res){
                window.alert("Invalid OTP")
            }else{
                window.alert("OTP Verification Successful ");
                navigate ('/voterRegistration')
                // Token is generated when we log in
            }

        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
        <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">OTP Verification</h1>

        </div>

        <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
            <div className="flex flex-wrap gap-[40px] mt-5">
            
                            <input type="number" placeholder="OTP code" className="rounded-2xl border-none ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2 py-1 px-2 w-full"
                            id="otp"
                            name="otp"
                            value={form.otp}
                            onChange={handleChange}/>
                    

            <div>
            <CustomButton 
              btnType="submit"
              title="Check Code"
              styles="bg-[#1dc071]"
            />
            </div>

            </div>

        </form>

    </div>
  )
}

export default otp
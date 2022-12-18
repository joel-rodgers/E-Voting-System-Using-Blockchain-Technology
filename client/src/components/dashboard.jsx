import React from 'react'



const dashboard = () => {
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4" >
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
      <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">User Manual</h1>

      </div>

      <div className="flex flex-wrap overflow-auto rounded-lg shadow hidden md:block space-y-4 mt-[20px] bg-gray-50 border-b-4 border-gray-200 " >
        <h4 className="font-bold sm:text-[20px] text-[15px]">Welcome </h4>
        <h5 className="font-bold sm:text-[20px] text-[15px]">These are a few Guidelines for the user : </h5>
        <h5 className="font-bold sm:text-[20px] text-[15px]">1. Voter  Registration</h5>

        <ul>
          <li><strong>*</strong>For casting the vote, user needs to first register himself. For this registration purpose , the user will be provided a voter registration form on this website.</li>
          <li><strong>*</strong>The voter can only register in the registration phase. After the registration phase is over the user can not register and thus will not be able to vote.</li>
          <li><strong>*</strong>For registration , the user will have to enter his Personal Number and the Account Address which the user will be using for  voting purpose.</li>
          <li><strong>*</strong>At the first stage the user’s age will be checked. If the user is  18 or above  18 years of age then only is he eligible to vote.</li>
          <li><strong>*</strong>The second stage is OTP verification. This stage is required to validate the voter. After entering the Personal Number and successful age verification.</li>
          <li><strong>*</strong>After entering correct OTP user will get successfully registered.</li>
        </ul>

        <h5 className="font-bold sm:text-[20px] text-[15px]">2.Voting Process</h5>

        <ul >
          <li><strong>*</strong>Overall , voting process is divided into three phases. All of which will be initialized and terminated by the admin. User has to participate in the process according to current phase. </li>
        </ul>
        <ol >
          <li><strong>(a).Registration Phase</strong>:  During this phase the registration of the users (who are going to cast the vote) will be carried out. </li>
          <li><strong>(b).Voting Phase</strong>: After initialization of voting phase from the admin, user can cast the vote in voting section.The casting of vote can be simply done by clicking on “VOTE” button, after which transaction will be initiated and after confirming transaction the vote will get successfully casted. After voting phase gets over user will not be able to cast vote.</li>
          <li><strong>(c).Result Phase</strong>: This is the final stage of whole voting process during which the results of election will be displayed at “Result” section.</li>
        </ol>
      </div>
       
    </div>
  )
}

export default dashboard
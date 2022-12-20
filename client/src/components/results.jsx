import React from 'react'
import { useStateContext } from '../context';

const results = () => {
  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4" >
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
      <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Election Results</h1>

      </div>
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] mt-[20px] ">
        <p class="font-epilogue font-bold sm:text-[22px] text-[10px] leading-[28px] text-white">Your account:0x47b627794ECdaB7Ce901715cfB1e20C83ec495a3</p>
      </div>

      <div className="flex flex-wrap overflow-auto rounded-lg shadow hidden md:block space-y-4 mt-[20px] ">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">#</th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Candidate Name</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Candidate Party</th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Votes</th>
            </tr>

          </thead>

          <tbody className="divide-y divide-gray-100" >
            <tr className="bg-white" >
            <td className=" p-3 text-sm text-gray-700 ">1</td>
          <td className="p-3 text-sm text-gray-700 ">Ben Carson</td>
          <td className="p-3 text-sm text-gray-700 ">
            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Republican</span>
          </td>
          <td className="p-3 text-sm text-gray-700 ">
            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">5</span>
          </td>

        </tr>


      </tbody>

    </table>

      </div>
       
    </div>
  )
}

export default results

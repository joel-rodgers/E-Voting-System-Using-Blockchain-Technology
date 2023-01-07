import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const {contract} = useContract
    ('0xa2FCA21284AADe347ac9687b1671a6Aa6C4cf413');

    //ADD CANDIDATE CONTRACT
    const { mutateAsync: addCandidate} = useContractWrite(contract, 'addCandidate');

    //REGISTER VOTER CONTRACT
    
    //CHANGE STATE CONTRACT

    //VOTE CONTRACT

    //READ CANDIDATES 
    //const {data} = useContractRead(contract, "candidates")
    


    //READ CANDIDATES COUNT CONTRACT

    //READ STATE CONTRACT

    //READ REGISTERED VOTERS CONTRACT

    const address = useAddress();
    const connect = useMetamask();

    //ADD CANDIDATE FUNCTION CALL
    const publishCandidate = async (form) => {
    try {
        const data = await addCandidate([
            //address, //Owner
            form.cname, //Candidate Name
            form.cparty, //Candidate Party
            form.cbio, //Candidate Bio
            form.cimage, //Candidate Image
        ])

        console.log("contract call success", data)
    } catch (error) {
      console.log("contract call failure", error)
    }
  }

    //REGISTER VOTER FUNCTION CALL

    //CHANGE STATE FUNCTION CALL

    //VOTE FUNCTION CALL
    
    //READ CANDIDATES FUNCTION CALL
    

    //READ CANDIDATES COUNT FUNCTION CALL

    //READ STATE FUNCTION CALL

    //READ REGISTERED VOTERS FUNCTION CALL



  return (
    <StateContext.Provider
        value={{
            address,
            contract,
            connect,
            addCandidate: publishCandidate,
            
        }}
    >
        {children}
    </StateContext.Provider>
  )


} 

export const useStateContext = () => useContext(StateContext);
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract Election{
   struct Candidate {
      uint id;
      string cname;
      uint voteCount;
      string cparty;
      string cbio;
      string cimage;

   }

   struct Voter{
        bool hasVoted;
        uint vote;
        bool isRegistered;
   }

   address admin;
   mapping(uint => Candidate)
   public candidates;

   mapping(address => Voter)
   public voters;
   uint public candidatesCount;

   enum PHASE{reg, voting, done}
   PHASE public state;

   modifier onlyAdmin(){
		require(msg.sender==admin);
		_;
	}
	
	modifier validState(PHASE x){
	    require(state==x);
	    _;
	}

    constructor(){
        admin=msg.sender;
        state=PHASE.reg;   
    }

    function changeState(PHASE x) onlyAdmin public{
		require(x > state);
        state = x;
    }

    function addCandidate(string memory _cname , string memory _cparty , string memory _cbio , string memory    _cimage) public onlyAdmin validState(PHASE.reg){
		candidatesCount++;
        
        candidates[candidatesCount]=Candidate(candidatesCount,_cname,0,_cparty,_cbio,_cimage);
    
	}

    function voterRegisteration(address user) public onlyAdmin validState(PHASE.reg){
		voters[user].isRegistered=true;
	}

    function vote(uint _candidateId) public validState(PHASE.voting){
        
		require(voters[msg.sender].isRegistered);
		require(!voters[msg.sender].hasVoted);
        require(_candidateId > 0 && _candidateId<=candidatesCount);
		candidates[_candidateId].voteCount++;
		voters[msg.sender].hasVoted=true;
		voters[msg.sender].vote=_candidateId;
	}

}

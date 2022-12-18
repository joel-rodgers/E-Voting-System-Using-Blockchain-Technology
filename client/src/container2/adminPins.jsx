import adDashboard from "../../images/dashboard2.png";
import logout from "../../images/logout2.png";
import addCandidate from "../../images/addCandidate.png";
import registerVoters from "../../images/registerVoter.png";
import changeState from "../../images/changeState.png";
import electionResults from "../../images/electionResults.png";

export const nav = [
  {
    name: 'dashboard',
    imgUrl2: adDashboard,
    link2: '/adDashboard',
  },
  {
    name: 'Add Candidate',
    imgUrl2: addCandidate,
    link2: '/addCandidate',
  },
  {
    name: 'Register Voters',
    imgUrl2: registerVoters,
    link2: '/registerVoters',
  },
  {
    name: 'Change State',
    imgUrl2: changeState,
    link2: '/changeState',
  },
  {
    name: 'Election Results',
    imgUrl2: electionResults,
    link2: '/electionResults',
  },
  {
    name: 'logout',
    imgUrl2: logout,
    link2: '/',
  },
];
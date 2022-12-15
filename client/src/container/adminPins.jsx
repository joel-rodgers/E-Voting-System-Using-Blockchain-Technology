import adDashboard from "../../images/dashboard.svg";
import logout from "../../images/logout.svg";
import addCandidate from "../../images/voterRegistration.svg";
import registerVoters from "../../images/profile.svg";
import changeState from "../../images/votingArea.svg";
import electionResults from "../../images/result.svg";

export const nav = [
  {
    name: 'dashboard',
    imgUrl: adDashboard,
    link: '/adDashboard',
  },
  {
    name: 'Add Candidate',
    imgUrl: addCandidate,
    link: '/addCandidate',
  },
  {
    name: 'Register Voters',
    imgUrl: registerVoters,
    link: '/registerVoters',
  },
  {
    name: 'Change State',
    imgUrl: changeState,
    link: '/changeState',
    disabled: true,
  },
  {
    name: 'Election Results',
    imgUrl: electionResults,
    link: '/electionResults',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
  },
];
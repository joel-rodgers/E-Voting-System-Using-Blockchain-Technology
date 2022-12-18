import dashboard from "../../images/dashboard.svg";
import logout from "../../images/logout.svg";
import voterRegistration from "../../images/voterRegistration.svg";
import profile from "../../images/profile.svg";
import votingArea from "../../images/votingArea.svg";
import results from "../../images/result.svg";

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/dashboard',
  },
  {
    name: 'voter Registration',
    imgUrl: voterRegistration,
    link: '/voterRegistration',
  },
  {
    name: 'voting Area',
    imgUrl: votingArea,
    link: '/votingArea',
  },
  {
    name: 'results',
    imgUrl: results,
    link: '/results',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
  },
];
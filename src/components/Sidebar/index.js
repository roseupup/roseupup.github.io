import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

const Logo = () => (
  <Link className="logo" to="/">
    <img src={LogoS} alt="logo"></img>
    <img className="sub-logo" src={LogoSubtitle} alt="slobodan"></img>
  </Link>
)

// const IconLink = ({ icon, to }) => (
//   <NavLink exact activeClassName="active" to={to}>
//     <FontAwesomeIcon icon={icon} color="#4d4d4e" >dfsdfds</FontAwesomeIcon>
//     <div className='IconLinkText'>Home</div>
//   </NavLink>
// )
const IconLink = ({ icon, to, text }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <NavLink 
        exact 
        activeClassName="active" 
        to={to}
        className="iconLinkContainer"
      >
        {/* <FontAwesomeIcon icon={icon} color="#4d4d4e" className={`icon ${isHovered ? 'visible' : 'hidden'}`} /> */}
        <div className={`IconLinkText ${isHovered ? 'hidden' : 'visible'}`}>{text}</div>
      </NavLink>
    );
  }

const SocialMediaLink = (props) => (
    <div {...props}>
        <a
        href="https://www.linkedin.com/in/yl7922/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="2x" />
      </a>
      <a
        href="https://www.youtube.com/channel/UC-IWcHLSWXr6IUdWUOvnmZg"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        {/* <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="2x" /> */}
        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" size="2x" />
      </a>
      <a
        href="https://github.com/roseupup"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        {/* <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" size="2x" />  */}
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size="2x" />
      </a>
    </div>
)

const Sidebar = () => {
  return (
    <div className="nav-bar">
      {/* <Logo></Logo> */}
      <nav>
      <IconLink icon={faHome} to="/" text="HOME"></IconLink>
      </nav>
      <SocialMediaLink className="socialMediaLink"></SocialMediaLink>
    </div>
  )
}

export default Sidebar

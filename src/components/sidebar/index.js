import { Link,NavLink } from 'react-router-dom'
import './index.scss'
import LogoSidebar from '../../assets/images/name_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome,  faUser ,faBolt} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
     const [showNav, setShowNav] = useState(false);
     return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoSidebar} alt='logo' />
</Link>
<nav className={showNav ? 'mobile-show' : ''}>
<NavLink 
onClick={() => setShowNav(false)}
exact="true" activeclassname="active" to="/">
<FontAwesomeIcon icon={faHome} color="#d9e3f0" />
</NavLink>
<NavLink 
onClick={() => setShowNav(false)}
exact="true" activeclassname="active" className="about-link" to="/about">
<FontAwesomeIcon icon={faUser} color="#d9e3f0" />
</NavLink>
<NavLink 
onClick={() => setShowNav(false)}
exact="true" activeclassname="active" className="project-link" to="/project">
<FontAwesomeIcon icon={faBolt} color="#d9e3f0" />

</NavLink>
<NavLink 
onClick={() => setShowNav(false)}
exact="true" activeclassname="active" className="contact-link" to="/contact">
<FontAwesomeIcon icon={faEnvelope} color="#d9e3f0" />

</NavLink>
<FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
</nav>
<ul>
 <li>
   <a
    target="_blank"
    rel="noreferrer"
    href="https://www.linkedin.com/in/charan-poojary-5810711a7"
    >
     <FontAwesomeIcon icon={faLinkedin} color="#d9e3f0" />
</a>
</li>
<li>
   <a
    target="_blank"
    rel="noreferrer"
    href="https://github.com/Charan-poojary"
    >
     <FontAwesomeIcon icon={faGithub} color="#d9e3f0" />
</a>
</li>
<li>
   <a
    target="_blank"
    rel="noreferrer"
    href="https://www.instagram.com/_charan._.poojary_/"
    >
     <FontAwesomeIcon 
     icon={faInstagram} color="#d9e3f0" />
</a>
</li>
</ul>
<FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#FB48C4"
          size="3x"
          className='hamburger-icon' />
</div>
       
)
}

export default Sidebar
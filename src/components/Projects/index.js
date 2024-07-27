import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetter';
import Loader from 'react-loaders';
import LMS from '../../assets/images/L M S.jpg';
import MIT from '../../assets/images/E_MIT.jpg';
import BRW from '../../assets/images/BREW.jpeg';
import WF from '../../assets/images/WF.jpeg';
import EDEMY from '../../assets/images/EDEMY.png';
import ABB from '../../assets/images/ABB-White_logo.jpeg'; 
import AK from '../../assets/images/ak1.jpeg' 


import './index.scss';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const projArray = ['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's'];
  const targetText = ['E','x','p','e','r','i','e','n','c','e','s'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  const projectLinks = [
    'https://github.com/Charan-poojary/Loyalty_Bridge',
    'https://github.com/Charan-poojary/venueBooking_Android_App',
    'https://github.com/Charan-poojary/Edemy_Udemy_Clone',
    'https://weather-forecast-web-app-git-main-meghanathshettys-projects.vercel.app/',
    'https://github.com/Charan-poojary/ABB_ACS_Software',
    'https://ak-digitalstest-meghanathshettys-projects.vercel.app/',
    '/project',
    '/project',
  ];
  

  const projectData = [
    { image: LMS, link: projectLinks[0], deployed: false },
    { image: MIT, link: projectLinks[1], deployed: false },
    { image: EDEMY, link: projectLinks[2], deployed: false },
    { image: WF, link: projectLinks[3], deployed: true },
    { image: ABB, link: projectLinks[4], deployed: false },
    { image: AK, link: projectLinks[5], deployed: true },
    { image: BRW, link: projectLinks[6], deployed: false },
    { image: BRW, link: projectLinks[7], deployed: false },
  ];
  

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
        <h1>
<AnimatedLetters letterClass={letterClass}
       strArray={targetText}
       idx={22} />
</h1>

<p>
<b className='intern_1' style={{fontSize:"2rem"}}>&#8226; SDE Intern, Access Control Project - ABB</b>
</p>
<p className='proj-para'>
Collaborated with the Terminal Automation Systems (TAS) team, gaining insight into the team's processes and database management for clients at ABB.
Later, gained exposure to Access Control Systems, understanding their operation and integration into the client's environment.
</p>
<p className='proj-para'>
Additionally, designed a UI for Access Control Systems (Access Control Software) by exploring application development using ASP.NET Core, React, and MS SQL Server at ABB.
</p>
<Link to="https://drive.google.com/file/d/1bM03ZEcZIK6dcqfL_AnwbnD492XpQcRR/view?usp=sharing" className='flat-button'> CREDENTIALS </Link> 
<br /> 
<br /> 
<br /> 
<br /> 

<p>
<b className='intern_1' style={{fontSize:"2rem"}}>&#8226; Full Stack Developer Intern (MERN) - Adhyayana</b>
</p>
<p className='proj-para'>
Actively learned the process of web development and its tools, then developed a Udemy Clone WebApp using the MERN stack, gaining invaluable experience in website development.
 Utilized AWS for cloud storage (S3 Bucket), ensuring efficient data management and storage solutions, reducing data retrieval time.
</p>
<p className='proj-para'>
Enhanced communication skills and teamwork in a professional environment that fostered growth and learning, contributing to increase in project efficiency.
</p>
<Link to="https://drive.google.com/file/d/12zIiy5R52EU05ZWDxMLcEJ3M6ahs9Fr1/view?usp=sharing" className='flat-button'> CREDENTIALS </Link>
</div>
<br/>
      <div className='proj-container'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={projArray} idx={15} />
          </h1>
          <div className="projects-div">
            <div className="projects-grid">
              {projectData.map((project, index) => (
                <div key={index} className="project-item">
                  <Link to={project.link}>
                  <img src={project.image} alt={`Project ${index + 1}`} />
                  {project.deployed && <span className="badge">Deployed</span>}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      <Loader type="ball-pulse" active={true} />
    </>
  );
};

export default Projects;

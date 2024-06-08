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
<b className='intern_1'>&#8226; SDE Intern, Access Control Project (ABB-ACS_Software) - ABB</b>
</p>
<p>
During this internship, I had the opportunity to work on the Access Control Project at ABB, contributing to the development of software solutions. My role involved working with a talented team to enhance security and access control systems, ensuring efficient and reliable operations.
</p>
<p>
I gained hands-on experience with .NET Core, C#, React, and MS SQL Server, which were crucial in developing and maintaining robust and scalable software applications. This role allowed me to deepen my understanding of full-stack development and integrate modern technologies into practical solutions.
</p>
<br /> 
<p>
<b className='intern_1'>&#8226; Intern, EDEMY Project(Udemy clone) - Adhyayana</b>
</p>
<p>
During this internship, I had the privilege of contributing to the development of EDEMY, a Udemy clone. Working within a team of 5 individuals, alongside a mentor, we successfully implemented the project using the MERN (MongoDB, Express.js, React.js, Node.js) stack and AWS(S3 bucket).
</p>
<p>
In this role, my responsibilities included UI/UX design,frontend and AWS (S3 Bucket), allowing me to actively participate in the creation of a functional and responsive e-learning platform. Collaborating closely with a mentor provided valuable insights into effective teamwork and project management.
</p>
<br/>
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

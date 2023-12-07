import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetter';
import Loader from 'react-loaders';
import LMS from '../../assets/images/L M S.jpg';
import MIT from '../../assets/images/E_MIT.jpg';
import BRW from '../../assets/images/BREW.jpeg';
import WF from '../../assets/images/WF.jpeg';
import EDEMY from '../../assets/images/EDEMY.png';


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
    '/project',
    '/project',
  ];
  

  const projectData = [
    { image: LMS, link: projectLinks[0] },
    { image: MIT, link: projectLinks[1] },
    { image: EDEMY, link: projectLinks[2] },
    { image: WF, link: projectLinks[3] },
    { image: BRW, link: projectLinks[4] },
    { image: BRW, link: projectLinks[5] },
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
<b className='intern_1'>&#8226; Intern, EDEMY Project(Udemy clone) - Adhyayana</b>
</p>
<p>
During this internship, I had the privilege of contributing to the development of EDEMY, a Udemy clone. Working within a team of 5 individuals, alongside a mentor, we successfully implemented the project using the MERN (MongoDB, Express.js, React.js, Node.js) stack and AWS(S3 bucket).
</p>
<p>
In this role, my responsibilities included UI/UX design,frontend and AWS, allowing me to actively participate in the creation of a functional and responsive e-learning platform. Collaborating closely with a mentor provided valuable insights into effective teamwork and project management.
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

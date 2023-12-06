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

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  const projectImages = [
     LMS,
     MIT,
    EDEMY,
    WF,
    BRW,
    BRW,
  ];

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={projArray} idx={15} />
          </h1>
          <div className="projects-div">
            <div className="projects-grid">
              {projectImages.map((image, index) => (
                <div key={index} className="project-item">
                  <img src={image} alt={`Project ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Loader type="semi-circle-spin" active={true} />
    </>
  );
};

export default Projects;

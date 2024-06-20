import { useEffect, useState } from 'react'
import './index.scss' 
import AnimatedLetters from '../AnimatedLetter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faCss3, faPython, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'

const About = () => {
 const [letterClass, setLetterClass] = useState('text-animate')
 const about_arr=['A', 'b', 'o','u','t',' ','m','e'];
 const tech_arr=['T','e','c','h',' ','S','t','a','c','k'];

   useEffect (() => {
     setTimeout(() => {
    setLetterClass('text-animate-hover')
    }, 4000)
      }, [])


 return (
  <>
        <div className="container about-page">
        <div className="text-zone">
        <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={about_arr}
        idx={15}
        />
        </h1>
        <p>
        Hello there! 👋 I'm Charan Poojary, a recent MCA graduate from MIT Manipal, eager to embark on an exciting journey in the tech world.My academic background has equipped me with a solid foundation in computer science, and I am now seeking opportunities to apply my knowledge and skills in a professional setting.
        </p> 
        <p>Explore my portfolio for a glimpse of my projects and skills. I am excited about the opportunity to leverage my knowledge and learn from experienced professionals in a real-world setting. 
</p>
<p>
Let's build the future together! 🚀
</p>
<Link to="https://drive.google.com/file/d/1YkLEz36SrpPIrEv9WnYin6Tm3C4bOiAj/view?usp=sharing" className='flat-button'>MY RESUME</Link>
</div>
         <div className="stage-cube-cont">
         <h1 className="tech-stack-heading"><AnimatedLetters
        letterClass={letterClass}
        strArray={tech_arr}
        idx={15}
        /></h1>
         <div className="cubespinner">
           <div className="face1">
             <FontAwesomeIcon icon={faJava} color="#EFD81D" />
           </div>
           
           <div className="face2">
             <FontAwesomeIcon icon={faReact} color="#28A4D9" />
           </div>
           <div className="face3">
             <FontAwesomeIcon icon={faCss3} color="#F06529" />
           </div>
           <div className="face4">
             <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
           </div>
           <div className="face5">
             <FontAwesomeIcon icon={faJsSquare} color="#EC4D28" />
           </div>
           
           <div className="face6">
             <FontAwesomeIcon icon={faPython} color="#154734" />
           </div>
         </div>
  </div>
  </div>

      <Loader type="ball-pulse" active={true} />
      </>
        )
}


export default About
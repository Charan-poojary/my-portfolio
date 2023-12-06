import { useEffect, useState } from 'react'
import './index.scss' 
import AnimatedLetters from '../AnimatedLetter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faCss3, faPython, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

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
        I'm very ambitious fullstack developer  looking for a role in
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
        </p> 
        <p>I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
</p>
<p>
If I need to define myself in one sentence that would be a family
person, Son of a beautiful parents, a sports fanatic, photography
enthusiast, and tech-obsessed!!!
</p>
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

      <Loader type="semi-circle-spin" active={true} />
      </>
        )
}


export default About
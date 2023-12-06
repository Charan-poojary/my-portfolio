import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetter';
import Loader from 'react-loaders';
import LogoS from '../../assets/images/frontend_vector.svg'



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [text, setText] = useState('');
    const nameArray = [' ','C','h','a','r','a','n']
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r','.']

    useEffect (() => {
          setTimeout (() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    },[] )

    useEffect(() => {
        let index = 0;
        const targetText = "From Pixels to Performance: Full Stack Magic Begins Here...";
        const interval = setInterval(() => {
          setText(targetText.slice(0, index));
          index++;
    
          if (index > targetText.length) {
            clearInterval(interval);
          }
        }, 100);
    
        setTimeout(() => {
          clearInterval(interval);
        }, targetText.length * 100 + 1000);
    },[])

    return (
        <>
        <div className=" container home-page">
           <div className="text-zone">
            <h1>
               <span className={letterClass}>H</span>
               <span className={`${letterClass} _12`}>i</span> 
               <br /> 
            <span className={`${letterClass} _13`}>i</span> 
            <span className={`${letterClass} _14`}>'m </span> 
       <AnimatedLetters letterClass={letterClass}
       strArray={nameArray}
       idx={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
       strArray={jobArray}
       idx={22} />
        </h1>
        <h2>frontend developer / React / HTML / CSS / Bootsrap / Canva / Figma</h2>
        <h2 className='movin_text'>{text}</h2> 
        <Link to="/contact" className='flat-button'> CONTACT ME </Link>
        </div>
        <div className="logo-container">
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />
      </div>
        </div>
        < Loader type="semi-circle-spin" active={true} />
        </>

        );
}


export default Home
import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import AnimatedLetters from '../AnimatedLetter';
import Loader from 'react-loaders';
import 'loaders.css/loaders.css';
import LogoS from '../../assets/images/frontend_vector.svg';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'C', 'h', 'a', 'r', 'a', 'n'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 2000);
    }, []);



    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <br />
                        <span className={`${letterClass} _13`}>i</span>
                        <span className={`${letterClass} _14`}>'m </span>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <Typewriter
                            words={['Frontend Developer', 'React Developer', 'Full Stack Developer']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h1>
                    <p>frontend developer / React / HTML / CSS / Bootstrap / Canva / Figma</p>
                    <h2 className='movin_text'>From <strong style={{color:'#FB48C4',fontSize:'2rem'}}>Pixels</strong> to Performance: Full <strong style={{color:'#FB48C4',fontSize:'2rem'}}>Stack</strong> Magic Begins Here...</h2>
                    <Link to="/contact" className='flat-button'> CONTACT ME </Link>
                </div>
                <div className="logo-container">
                    <img
                        className="solid-logo"
                        src={LogoS}
                        alt="JavaScript, Developer"
                    />
                </div>
            </div>
            <Loader type="ball-pulse" active={true} />
        </>
    );
};

export default Home;

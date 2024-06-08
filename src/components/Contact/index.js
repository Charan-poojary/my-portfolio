import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetter'
import pic from '../../assets/images/Charan_pinkbg.jpeg'
import './index.scss'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const Form = useRef ();

    const user_id = process.env.REACT_APP_EMAILJS_USER_ID;
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;


    useEffect (() => {
         setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
        }, [])

        //email

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm(service_id, template_id, Form.current, user_id)
            .then(
              () => {
                alert('Message successfully sent!')
                window.location.reload(false)
              },
              () => {
                alert('Failed to send the message, please try again')
              }
            )
            }
    
    return (
        <>
    <div className="container contact-page">
    <div className='text-zone'>
    <h1>
    <AnimatedLetters
     letterClass={letterClass}    
     strArray={['C', 'o', 'n','t','a','c','t',' ','m','e']}
     idx={15}   
    />
    </h1>
    <p>
    I'm very ambitious fullstack developer looking for a role in
        established IT company with the opportunity.
    </p>
    <div className="contact-form">
<form ref={Form} onSubmit={sendEmail}>
<dt>
<li className="half">
<input placeholder="Name"  type="text" name="name" required />
</li>
<li className="half">
<input
placeholder="Email"
type="email"
name="email"
required
/>
</li>
<li>
<input placeholder="Subject" type="text" name="subject" required />
</li>
<li>
<textarea  placeholder="message" name="message" required></textarea>
</li>
<li>
<input type="submit" className='flat-button' value="SEND" />
</li>
</dt>
</form>

</div>
</div>

<div className="img-container">
      <img
        className="solid-logo"
        src={pic}
        alt="JavaScript,  Developer"
      />
      </div>
      </div>
<Loader type="ball-pulse" active={true} />

    </>
    )

}


export default Contact



    
   
    
import React from 'react'

// style file image
import '../Style/contact.css'

// icons 
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

function Contact() {

  return (
    <>
        <div className="contact-container">

            <div className="c-top-text">
                <h1>Contact Us</h1>
            </div>

            <div className="contact">

                <div className="github">
                    <p><FaGithub className='icon'/> <a href="https://github.com/HammadShinwari33" target='_blank'>Click Me</a> to open my github profile</p>
                </div>

                <div className="linkedin">
                    <p><FaLinkedin className='icon'/> <a href="https://www.linkedin.com/in/hammad-shinwari-694124283/" target='_blank'>Click Me</a> to open my linkedin profile</p>
                </div>

                <div className="phone">
                    <p><FaPhone className='icon'/> 0300-3066377</p>
                </div>

                <div className="email">
                    <p><FaMailBulk className='icon'/> <a href="">Click Me</a> to open my gmail account</p>
                </div>

            </div>


        </div>
    </>
  )
}

export default Contact;
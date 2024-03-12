import React from 'react'

// style file image
import '../Style/contact.css'


function Contact() {
  return (
    <>
        <div className="contact-container">

            <div className="c-top-text">
                <h1>Contact Us</h1>
            </div>

            <div className="contact">

                <div className="form">

                    <div className="n-e">

                            <div className="name-div">
                                <h3>Name</h3>
                                <input type='text' placeholder='Enter your name...' required/>
                            </div>

                            <div className="email-div">
                                <h3>Email address</h3>
                                <input type='email' placeholder='Enter your email...' required/>
                            </div>

                    </div>

                    <div className="subject">
                            <h3>Subject</h3>
                            <input type="text" placeholder='Enter Subject...' required/>
                    </div>

                    <div className="message">
                            <h3>Message</h3>
                            <textarea placeholder='Enter a Message...' className='textarea'></textarea>
                    </div>

                    <div className="send-button">
                            <button>Send Message</button>
                    </div>

                </div>

            </div>


        </div>
    </>
  )
}

export default Contact;
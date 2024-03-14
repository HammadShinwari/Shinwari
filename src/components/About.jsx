import React from 'react'

// style file import 
import '../Style/about.css'

// animation file import
// import 'animate.css';

// image file import
import aboutImg from '../images/about.png'

function About() {
  return (
    <>
        <div className="about-container">

            <div className="about-image">
                <img src={aboutImg} alt="about-img" />
            </div>

            <div className="about-text">
                <h2>LET'S <br /> INTRODUCE ABOUT <br /> MYSELF</h2>
                <p>Hello to everyone. My name is Hammad Shinwari. I am currently learning web development course from saylani mass it training. <br /> <br />
                I have a unique opportunity to showcase my growing expertise and knowledge in web development through my portfolio. With a deep understanding of HTML, CSS, Bootstrap, Tailwand css, Material UI, JavaScript, Firebase, and React Js.  I am well on my way to becoming a skilled and successful Mern stack developer.</p>
                <div className="about-button">
                    <button>DOWNLOAD CV</button>
                </div>
            </div>

        </div>
    </>
  )
}

export default About;
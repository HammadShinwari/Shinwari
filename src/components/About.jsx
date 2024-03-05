import React from 'react'

// style file import 
import '../Style/about.css'

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
                <p>Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days. <br /> <br />
                Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two.</p>
                <div className="about-button">
                    <button>DOWNLOAD CV</button>
                </div>
            </div>

        </div>
    </>
  )
}

export default About;
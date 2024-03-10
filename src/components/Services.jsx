import React from 'react'

// style file import 
import '../Style/services.css'

// animation file import 
// import 'animate.css'

// image file import
import Service1 from '../images/service-1.png'
import Service2 from '../images/service-2.png'
import Service3 from '../images/service-3.png'
import Service4 from '../images/service-4.png'

function Services() {

  return (
    <>
        <div className="services-container">

            <div className="service-text">
                <h1>Our Services</h1>
                <p>Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast beginning signs open god you're gathering ithe</p>
            </div>

            <div className="service-cards">

                <div className="service-card">
                    <img src={Service1} alt="" />
                    <h2>WEB DEV</h2>
                    <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                </div>

                <div className="service-card">
                    <img src={Service2} alt="" />
                    <h2>UI/UX DESIGN</h2>
                    <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                </div>

                <div className="service-card">
                    <img src={Service3} alt="" />
                    <h2>WEB DESIGN</h2>
                    <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                </div>

                <div className="service-card">
                    <img src={Service4} alt="" />
                    <h2>FREELANCING</h2>
                    <p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
                </div>

            </div>

        </div>
    </>
  )
}

export default Services;
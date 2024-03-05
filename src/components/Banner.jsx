import React from 'react'

// style file import 
import '../Style/banner.css'

// image file import
import bannerImg from '../images/portfolio-banner.png'

function Banner() {
  return (
    <>
        <div className="banner-container">

            <div className="b-text">
                <h3 className='b-text-h3'>Hello 👋</h3>
                <h1 className='b-text-h1'>I am Hammad Shinwari</h1>
                <h2 className='b-text-h2'>Passionate Frontend Developer</h2>
                <div className="b-buttons">
                    <div className="btn-1">
                        <button>HIRE ME</button>
                    </div>
                    <div className="btn-2">
                        <button>GET CV</button>
                    </div>
                </div>
            </div>

            <div className="b-image">
                <img src={bannerImg} alt="hero-img" className='banner-img'/>
            </div>

        </div>
    </>
  )
}

export default Banner;
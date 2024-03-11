import React from 'react'

// style file link 
import '../Style/skills.css'

// images link
import htmlImg from '../images/html.webp'
import cssImg from '../images/css.webp';
import jsImg from '../images/js.svg'
import reactImg from '../images/react.png'
import tailwandImg from '../images/tailwand.jpg'
import muiImg from '../images/mui.png'
import githubImg from '../images/github.png'
import gitImg from '../images/git.png'
import bootstrapImg from '../images/bootstrap.jpeg'

function Skills() {
  return (
    <>
       <div className="skills-container">

            <div className="skills-text">
                <h1>Skills</h1>
            </div>

            <div className="skills-images">
                <img src={htmlImg} alt="" className='html'/>
                <img src={cssImg} alt="" className='css'/>
                <img src={jsImg} alt="" />
                <img src={muiImg} alt="" className='muiImg'/>
                <img src={reactImg} alt="" />
                <img src={tailwandImg} alt="" />
                <img src={githubImg} alt="" />
                <img src={gitImg} alt="" />
                <img src={bootstrapImg} alt="" />
            </div>

       </div>
    </>
  )
}

export default Skills;
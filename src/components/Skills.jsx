import React from 'react';

// style file link 
import '../Style/skills.css';

// images link
import htmlImg from '../images/html.webp';
import cssImg from '../images/css.png';
import jsImg from '../images/js.png';
import reactImg from '../images/react.webp';
import tailwandImg from '../images/tailwand.jpg';
import firebaseImg from '../images/firebase.png';
import githubImg from '../images/github.png';
import gitImg from '../images/git.jpg';
import bootstrapImg from '../images/bootstrap.jpeg';
import vscodeImg from '../images/code.png';

function Skills() {
  return (
    <>
       <div className="skills-container">

            <div className="skills-text">
                <h1>Skills</h1>
            </div>

            <div className="skills-images">
              
              <div className="html-skill">
                <h2>HTML</h2>
                <div className="html-img">
                  <h3>90%</h3>
                  <img src={htmlImg} alt=""/>
                </div>
              </div>

              <div className="css-skill">
                <h2>CSS</h2>
                <div className="css-img">
                  <h3>85%</h3>
                  <img src={cssImg} alt=""/>
                </div>
              </div>

              <div className="js-skill">
                <h2>Javascript</h2>
                <div className="js-img">
                  <h3>65%</h3>
                  <img src={jsImg} alt=""/>
                </div>
              </div>

              <div className="firebase-skill">
                <h2>Firebase</h2>
                <div className="firebase-img">
                  <h3>80%</h3>
                  <img src={firebaseImg} alt=""/>
                </div>
              </div>

              <div className="react-skill">
                <h2>React js</h2>
                <div className="react-img">
                  <h3>70%</h3>
                  <img src={reactImg} alt=""/>
                </div>
              </div>

              <div className="tailwand-skill">
                <h2>Tailwand CSS</h2>
                <div className="tailwand-img">
                  <h3>75%</h3>
                  <img src={tailwandImg} alt=""/>
                </div>
              </div>

              <div className="github-skill">
                <h2>Github</h2>
                <div className="github-img">
                  <h3>90%</h3>
                  <img src={githubImg} alt=""/>
                </div>
              </div>

              <div className="git-skill">
                <h2>Git</h2>
                <div className="git-img">
                  <h3>85%</h3>
                  <img src={gitImg} alt=""/>
                </div>
              </div>

              <div className="bootstrap-skill">
                <h2>Bootstrap</h2>
                <div className="bootstrap-img">
                  <h3>80%</h3>
                  <img src={bootstrapImg} alt=""/>
                </div>
              </div>

              <div className="code-skill">
                <h2>Code Editor</h2>
                <div className="code-img">
                  <h3>90%</h3>
                  <img src={vscodeImg} alt=""/>
                </div>
              </div>

            </div>

       </div>
    </>
  )
}

export default Skills;